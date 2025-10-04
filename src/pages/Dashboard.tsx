import { useState } from 'react';
import { Plus, BookOpen, Target, Clock, CheckCircle } from 'lucide-react';
import { useApp } from '../context/AppContext';
import Button from '../components/Button';
import SkillCard from '../components/SkillCard';
import ExchangeCard from '../components/ExchangeCard';
import Card from '../components/Card';

export default function Dashboard() {
  const { currentUser, skills, exchanges, profiles, updateExchangeStatus } = useApp();
  const [showAddSkill, setShowAddSkill] = useState(false);

  const mySkills = skills.filter(s => s.user_id === currentUser.id);
  const myOfferings = mySkills.filter(s => s.skill_type === 'offer');
  const mySeeking = mySkills.filter(s => s.skill_type === 'seeking');
  const myExchanges = exchanges.filter(
    e => e.requester_id === currentUser.id || e.provider_id === currentUser.id
  );

  const pendingExchanges = myExchanges.filter(e => e.status === 'pending');
  const activeExchanges = myExchanges.filter(e => e.status === 'accepted');
  const completedExchanges = myExchanges.filter(e => e.status === 'completed');

  const stats = [
    {
      label: 'Skills Offering',
      value: myOfferings.length,
      icon: BookOpen,
      color: 'from-teal-500 to-cyan-600'
    },
    {
      label: 'Skills Seeking',
      value: mySeeking.length,
      icon: Target,
      color: 'from-orange-500 to-pink-500'
    },
    {
      label: 'Pending',
      value: pendingExchanges.length,
      icon: Clock,
      color: 'from-amber-500 to-orange-600'
    },
    {
      label: 'Completed',
      value: completedExchanges.length,
      icon: CheckCircle,
      color: 'from-green-500 to-emerald-600'
    }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-black text-slate-900 mb-2">
          Welcome back, {currentUser.full_name}!
        </h1>
        <p className="text-slate-600">Here's what's happening with your skill exchanges</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.label} className="p-6">
            <div className="flex items-center justify-between mb-3">
              <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-lg flex items-center justify-center`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <span className="text-3xl font-black text-slate-900">{stat.value}</span>
            </div>
            <p className="text-sm font-semibold text-slate-600">{stat.label}</p>
          </Card>
        ))}
      </div>

      {pendingExchanges.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Pending Requests</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {pendingExchanges.map(exchange => (
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
        </div>
      )}

      {activeExchanges.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Active Exchanges</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {activeExchanges.map(exchange => (
              <ExchangeCard
                key={exchange.id}
                exchange={exchange}
                currentUserId={currentUser.id}
                profiles={profiles}
                skills={skills}
              />
            ))}
          </div>
        </div>
      )}

      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-slate-900">My Skills</h2>
          <Button
            variant="primary"
            size="sm"
            onClick={() => setShowAddSkill(!showAddSkill)}
          >
            <Plus className="w-4 h-4 mr-2" />
            Add Skill
          </Button>
        </div>

        {showAddSkill && (
          <Card className="p-6 mb-6 bg-gradient-to-br from-teal-50 to-cyan-50">
            <h3 className="font-bold text-lg mb-4 text-slate-900">Add a New Skill</h3>
            <p className="text-sm text-slate-600">
              Visit the "Discover" page to browse skills and create exchange requests,
              or use your profile settings to add new skills you can offer or want to learn.
            </p>
          </Card>
        )}

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-3">
              Offering ({myOfferings.length})
            </h3>
            <div className="space-y-3">
              {myOfferings.map(skill => (
                <SkillCard key={skill.id} skill={skill} />
              ))}
              {myOfferings.length === 0 && (
                <Card className="p-6 text-center">
                  <p className="text-slate-500">No skills offered yet</p>
                </Card>
              )}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-3">
              Seeking ({mySeeking.length})
            </h3>
            <div className="space-y-3">
              {mySeeking.map(skill => (
                <SkillCard key={skill.id} skill={skill} />
              ))}
              {mySeeking.length === 0 && (
                <Card className="p-6 text-center">
                  <p className="text-slate-500">No skills sought yet</p>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
