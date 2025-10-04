import { Skill, Profile } from '../types';
import { BookOpen, Award, Target } from 'lucide-react';
import Card from './Card';

interface SkillCardProps {
  skill: Skill;
  profile?: Profile;
  showProfile?: boolean;
  onClick?: () => void;
}

const categoryColors: Record<string, string> = {
  Technology: 'bg-teal-100 text-teal-700',
  Design: 'bg-purple-100 text-purple-700',
  Business: 'bg-amber-100 text-amber-700',
  Creative: 'bg-pink-100 text-pink-700',
  Languages: 'bg-blue-100 text-blue-700',
  'Soft Skills': 'bg-green-100 text-green-700'
};

const proficiencyIcons = {
  beginner: <BookOpen className="w-4 h-4" />,
  intermediate: <Target className="w-4 h-4" />,
  expert: <Award className="w-4 h-4" />
};

export default function SkillCard({ skill, profile, showProfile = false, onClick }: SkillCardProps) {
  const isOffering = skill.skill_type === 'offer';

  return (
    <Card hover={!!onClick} className="p-5 cursor-pointer" onClick={onClick}>
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <h3 className="font-bold text-lg text-slate-800">{skill.skill_name}</h3>
            {skill.proficiency_level && (
              <span className="text-teal-600" title={skill.proficiency_level}>
                {proficiencyIcons[skill.proficiency_level]}
              </span>
            )}
          </div>
          <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${categoryColors[skill.category] || 'bg-gray-100 text-gray-700'}`}>
            {skill.category}
          </span>
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-bold ${
          isOffering
            ? 'bg-gradient-to-r from-teal-500 to-cyan-600 text-white'
            : 'bg-gradient-to-r from-coral-400 to-orange-400 text-white'
        }`}>
          {isOffering ? 'OFFERING' : 'SEEKING'}
        </span>
      </div>

      <p className="text-slate-600 text-sm mb-3 line-clamp-2">{skill.description}</p>

      {showProfile && profile && (
        <div className="flex items-center gap-3 pt-3 border-t border-slate-100">
          <img
            src={profile.avatar_url || 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=100'}
            alt={profile.full_name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <p className="font-semibold text-sm text-slate-800">{profile.full_name}</p>
            <p className="text-xs text-slate-500">{profile.profession}</p>
          </div>
        </div>
      )}
    </Card>
  );
}
