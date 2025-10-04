import { SkillExchange, Profile, Skill } from '../types';
import { ArrowRight, Clock, CheckCircle, XCircle, Ban } from 'lucide-react';
import Card from './Card';
import Button from './Button';

interface ExchangeCardProps {
  exchange: SkillExchange;
  currentUserId: string;
  profiles: Profile[];
  skills: Skill[];
  onAccept?: (id: string) => void;
  onReject?: (id: string) => void;
  onViewDetails?: (id: string) => void;
}

const statusConfig = {
  pending: { icon: Clock, color: 'text-amber-600', bg: 'bg-amber-100', label: 'Pending' },
  accepted: { icon: CheckCircle, color: 'text-green-600', bg: 'bg-green-100', label: 'Accepted' },
  rejected: { icon: XCircle, color: 'text-red-600', bg: 'bg-red-100', label: 'Rejected' },
  completed: { icon: CheckCircle, color: 'text-blue-600', bg: 'bg-blue-100', label: 'Completed' },
  cancelled: { icon: Ban, color: 'text-gray-600', bg: 'bg-gray-100', label: 'Cancelled' }
};

export default function ExchangeCard({
  exchange,
  currentUserId,
  profiles,
  skills,
  onAccept,
  onReject,
  onViewDetails
}: ExchangeCardProps) {
  const isProvider = exchange.provider_id === currentUserId;
  const otherUserId = isProvider ? exchange.requester_id : exchange.provider_id;
  const otherUser = profiles.find(p => p.id === otherUserId);
  const requesterSkill = skills.find(s => s.id === exchange.requester_skill_id);
  const providerSkill = skills.find(s => s.id === exchange.provider_skill_id);

  const StatusIcon = statusConfig[exchange.status].icon;
  const showActions = exchange.status === 'pending' && isProvider;

  return (
    <Card hover className="p-6">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <img
            src={otherUser?.avatar_url || 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=100'}
            alt={otherUser?.full_name}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <h3 className="font-bold text-lg text-slate-800">{otherUser?.full_name}</h3>
            <p className="text-sm text-slate-500">{otherUser?.profession}</p>
          </div>
        </div>
        <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full ${statusConfig[exchange.status].bg}`}>
          <StatusIcon className={`w-4 h-4 ${statusConfig[exchange.status].color}`} />
          <span className={`text-sm font-semibold ${statusConfig[exchange.status].color}`}>
            {statusConfig[exchange.status].label}
          </span>
        </div>
      </div>

      <div className="bg-slate-50 rounded-lg p-4 mb-4">
        <div className="flex items-center justify-between gap-4">
          <div className="flex-1">
            <p className="text-xs text-slate-500 mb-1">{isProvider ? 'They offer' : 'You offer'}</p>
            <p className="font-semibold text-slate-800">{requesterSkill?.skill_name}</p>
          </div>
          <ArrowRight className="w-5 h-5 text-teal-500 flex-shrink-0" />
          <div className="flex-1">
            <p className="text-xs text-slate-500 mb-1">{isProvider ? 'You offer' : 'They offer'}</p>
            <p className="font-semibold text-slate-800">{providerSkill?.skill_name}</p>
          </div>
        </div>
      </div>

      {exchange.message && (
        <p className="text-sm text-slate-600 mb-4 italic border-l-2 border-teal-500 pl-3">
          "{exchange.message}"
        </p>
      )}

      <div className="flex gap-3">
        {showActions ? (
          <>
            <Button
              variant="primary"
              size="sm"
              className="flex-1"
              onClick={() => onAccept?.(exchange.id)}
            >
              Accept
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="flex-1"
              onClick={() => onReject?.(exchange.id)}
            >
              Decline
            </Button>
          </>
        ) : (
          <Button
            variant="ghost"
            size="sm"
            className="flex-1"
            onClick={() => onViewDetails?.(exchange.id)}
          >
            View Details
          </Button>
        )}
      </div>
    </Card>
  );
}
