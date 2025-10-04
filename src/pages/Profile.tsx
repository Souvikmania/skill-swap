import { useState } from 'react';
import { MapPin, Briefcase, Star, CreditCard as Edit2, Save, X } from 'lucide-react';
import { useApp } from '../context/AppContext';
import Card from '../components/Card';
import Button from '../components/Button';
import SkillCard from '../components/SkillCard';
import { mockReviews } from '../data/mockData';

export default function Profile() {
  const { currentUser, skills, updateProfile } = useApp();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    full_name: currentUser.full_name,
    bio: currentUser.bio,
    location: currentUser.location,
    profession: currentUser.profession,
    experience_level: currentUser.experience_level
  });

  const mySkills = skills.filter(s => s.user_id === currentUser.id);
  const myReviews = mockReviews.filter(r => r.reviewee_id === currentUser.id);
  const avgRating = myReviews.length > 0
    ? (myReviews.reduce((sum, r) => sum + r.rating, 0) / myReviews.length).toFixed(1)
    : 'N/A';

  const handleSave = () => {
    updateProfile(formData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setFormData({
      full_name: currentUser.full_name,
      bio: currentUser.bio,
      location: currentUser.location,
      profession: currentUser.profession,
      experience_level: currentUser.experience_level
    });
    setIsEditing(false);
  };

  return (
    <div className="space-y-8">
      <Card className="p-8">
        <div className="flex items-start gap-8">
          <img
            src={currentUser.avatar_url || 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=200'}
            alt={currentUser.full_name}
            className="w-32 h-32 rounded-2xl object-cover shadow-lg"
          />

          <div className="flex-1">
            <div className="flex items-start justify-between mb-4">
              {isEditing ? (
                <input
                  type="text"
                  value={formData.full_name}
                  onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
                  className="text-3xl font-black text-slate-900 border-2 border-teal-500 rounded-lg px-3 py-1"
                />
              ) : (
                <h1 className="text-3xl font-black text-slate-900">{currentUser.full_name}</h1>
              )}

              <div className="flex gap-2">
                {isEditing ? (
                  <>
                    <Button variant="primary" size="sm" onClick={handleSave}>
                      <Save className="w-4 h-4 mr-2" />
                      Save
                    </Button>
                    <Button variant="outline" size="sm" onClick={handleCancel}>
                      <X className="w-4 h-4 mr-2" />
                      Cancel
                    </Button>
                  </>
                ) : (
                  <Button variant="outline" size="sm" onClick={() => setIsEditing(true)}>
                    <Edit2 className="w-4 h-4 mr-2" />
                    Edit Profile
                  </Button>
                )}
              </div>
            </div>

            {isEditing ? (
              <div className="space-y-3">
                <input
                  type="text"
                  value={formData.profession}
                  onChange={(e) => setFormData({ ...formData, profession: e.target.value })}
                  className="w-full border-2 border-slate-200 rounded-lg px-3 py-2"
                  placeholder="Profession"
                />
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full border-2 border-slate-200 rounded-lg px-3 py-2"
                  placeholder="Location"
                />
                <textarea
                  value={formData.bio}
                  onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                  className="w-full border-2 border-slate-200 rounded-lg px-3 py-2"
                  placeholder="Bio"
                  rows={3}
                />
                <select
                  value={formData.experience_level}
                  onChange={(e) => setFormData({ ...formData, experience_level: e.target.value as any })}
                  className="border-2 border-slate-200 rounded-lg px-3 py-2"
                >
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="expert">Expert</option>
                </select>
              </div>
            ) : (
              <>
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-2 text-slate-600">
                    <Briefcase className="w-4 h-4" />
                    <span>{currentUser.profession}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600">
                    <MapPin className="w-4 h-4" />
                    <span>{currentUser.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                    <span className="font-bold text-slate-900">{avgRating}</span>
                    <span className="text-slate-500">({myReviews.length} reviews)</span>
                  </div>
                </div>

                <p className="text-slate-600 leading-relaxed">{currentUser.bio}</p>

                <div className="mt-4">
                  <span className="inline-block px-4 py-1.5 bg-teal-100 text-teal-700 rounded-full text-sm font-semibold">
                    {currentUser.experience_level.charAt(0).toUpperCase() + currentUser.experience_level.slice(1)}
                  </span>
                </div>
              </>
            )}
          </div>
        </div>
      </Card>

      <div>
        <h2 className="text-2xl font-bold text-slate-900 mb-4">My Skills</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {mySkills.map(skill => (
            <SkillCard key={skill.id} skill={skill} />
          ))}
          {mySkills.length === 0 && (
            <Card className="p-8 text-center col-span-2">
              <p className="text-slate-500">No skills added yet</p>
            </Card>
          )}
        </div>
      </div>

      {myReviews.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Reviews</h2>
          <div className="space-y-4">
            {myReviews.map(review => (
              <Card key={review.id} className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <img
                      src={review.reviewer?.avatar_url || 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=100'}
                      alt={review.reviewer?.full_name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-bold text-slate-900">{review.reviewer?.full_name}</p>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < review.rating
                                ? 'fill-amber-500 text-amber-500'
                                : 'text-slate-300'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <span className="text-sm text-slate-500">
                    {new Date(review.created_at).toLocaleDateString()}
                  </span>
                </div>
                <p className="text-slate-600">{review.comment}</p>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
