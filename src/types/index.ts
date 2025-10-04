export interface Profile {
  id: string;
  full_name: string;
  bio: string;
  avatar_url?: string;
  location: string;
  profession: string;
  experience_level: 'beginner' | 'intermediate' | 'expert';
  created_at: string;
  updated_at: string;
}

export interface Skill {
  id: string;
  user_id: string;
  skill_name: string;
  category: string;
  skill_type: 'offer' | 'seeking';
  proficiency_level?: 'beginner' | 'intermediate' | 'expert';
  description: string;
  created_at: string;
}

export interface SkillExchange {
  id: string;
  requester_id: string;
  provider_id: string;
  requester_skill_id: string;
  provider_skill_id: string;
  status: 'pending' | 'accepted' | 'rejected' | 'completed' | 'cancelled';
  message: string;
  created_at: string;
  updated_at: string;
  requester?: Profile;
  provider?: Profile;
  requester_skill?: Skill;
  provider_skill?: Skill;
}

export interface ExchangeMessage {
  id: string;
  exchange_id: string;
  sender_id: string;
  content: string;
  created_at: string;
  sender?: Profile;
}

export interface Review {
  id: string;
  exchange_id: string;
  reviewer_id: string;
  reviewee_id: string;
  rating: number;
  comment: string;
  created_at: string;
  reviewer?: Profile;
}
