import { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import { useApp } from '../context/AppContext';
import SkillCard from '../components/SkillCard';
import Card from '../components/Card';

export default function Discover() {
  const { skills, profiles, currentUser } = useApp();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState<'all' | 'offer' | 'seeking'>('all');
  const [filterCategory, setFilterCategory] = useState<string>('all');

  const categories = ['all', ...new Set(skills.map(s => s.category))];

  const filteredSkills = skills.filter(skill => {
    if (skill.user_id === currentUser.id) return false;

    const matchesSearch = skill.skill_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         skill.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === 'all' || skill.skill_type === filterType;
    const matchesCategory = filterCategory === 'all' || skill.category === filterCategory;

    return matchesSearch && matchesType && matchesCategory;
  });

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-black text-slate-900 mb-2">Discover Skills</h1>
        <p className="text-slate-600">Find the perfect skill match for your learning journey</p>
      </div>

      <Card className="p-6">
        <div className="space-y-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search skills..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border-2 border-slate-200 rounded-lg focus:border-teal-500 focus:outline-none text-slate-900"
            />
          </div>

          <div className="flex flex-wrap gap-3">
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-slate-600" />
              <span className="text-sm font-semibold text-slate-600">Type:</span>
            </div>
            {['all', 'offer', 'seeking'].map(type => (
              <button
                key={type}
                onClick={() => setFilterType(type as any)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                  filterType === type
                    ? 'bg-gradient-to-r from-teal-500 to-cyan-600 text-white shadow-lg'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <span className="text-sm font-semibold text-slate-600 self-center">Category:</span>
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setFilterCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                  filterCategory === category
                    ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-lg'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </Card>

      <div>
        <div className="flex items-center justify-between mb-4">
          <p className="text-slate-600">
            <span className="font-bold text-slate-900">{filteredSkills.length}</span> skills found
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map(skill => {
            const profile = profiles.find(p => p.id === skill.user_id);
            return (
              <SkillCard
                key={skill.id}
                skill={skill}
                profile={profile}
                showProfile
              />
            );
          })}
        </div>

        {filteredSkills.length === 0 && (
          <Card className="p-12 text-center">
            <p className="text-lg text-slate-500 mb-2">No skills found</p>
            <p className="text-sm text-slate-400">Try adjusting your filters or search terms</p>
          </Card>
        )}
      </div>
    </div>
  );
}
