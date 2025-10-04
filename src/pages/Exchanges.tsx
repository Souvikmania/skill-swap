import { useState } from 'react';
import { useApp } from '../context/AppContext';
import ExchangeCard from '../components/ExchangeCard';
import Card from '../components/Card';

export default function Exchanges() {
  const { currentUser, exchanges, profiles, skills, updateExchangeStatus } = useApp();
  const [filter, setFilter] = useState<'all' | 'pending' | 'accepted' | 'completed'>('all');

  const myExchanges = exchanges.filter(
    e => e.requester_id === currentUser.id || e.provider_id === currentUser.id
  );

  const filteredExchanges = filter === 'all'
    ? myExchanges
    : myExchanges.filter(e => e.status === filter);

  const stats = {
    all: myExchanges.length,
    pending: myExchanges.filter(e => e.status === 'pending').length,
    accepted: myExchanges.filter(e => e.status === 'accepted').length,
    completed: myExchanges.filter(e => e.status === 'completed').length
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-black text-slate-900 mb-2">My Exchanges</h1>
        <p className="text-slate-600">Manage your skill exchange requests and sessions</p>
      </div>

      <Card className="p-6">
        <div className="flex flex-wrap gap-3">
          {Object.entries(stats).map(([key, count]) => (
            <button
              key={key}
              onClick={() => setFilter(key as any)}
              className={`px-5 py-3 rounded-lg font-semibold transition-all ${
                filter === key
                  ? 'bg-gradient-to-r from-teal-500 to-cyan-600 text-white shadow-lg'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {key.charAt(0).toUpperCase() + key.slice(1)}
              <span className="ml-2 px-2 py-0.5 rounded-full bg-white bg-opacity-30 text-sm">
                {count}
              </span>
            </button>
          ))}
        </div>
      </Card>

      {filteredExchanges.length > 0 ? (
        <div className="grid md:grid-cols-2 gap-6">
          {filteredExchanges.map(exchange => (
            <ExchangeCard
              key={exchange.id}
              exchange={exchange}
              currentUserId={currentUser.id}
              profiles={profiles}
              skills={skills}
              onAccept={(id) => updateExchangeStatus(id, 'accepted')}
              onReject={(id) => updateExchangeStatus(id, 'rejected')}
            />
          ))}
        </div>
      ) : (
        <Card className="p-12 text-center">
          <p className="text-lg text-slate-500 mb-2">No exchanges found</p>
          <p className="text-sm text-slate-400">
            {filter === 'all'
              ? 'Start discovering skills to create your first exchange!'
              : `No ${filter} exchanges at the moment`}
          </p>
        </Card>
      )}
    </div>
  );
}
