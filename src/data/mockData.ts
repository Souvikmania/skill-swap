import { Profile, Skill, SkillExchange, Review } from '../types';

export const mockProfiles: Profile[] = [
  {
    id: '1',
    full_name: 'Sarah Chen',
    bio: 'Full-stack developer passionate about creating impactful solutions. Love teaching and learning new technologies.',
    avatar_url: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200',
    location: 'San Francisco, CA',
    profession: 'Senior Software Engineer',
    experience_level: 'expert',
    created_at: '2024-01-15T10:00:00Z',
    updated_at: '2024-01-15T10:00:00Z'
  },
  {
    id: '2',
    full_name: 'Marcus Williams',
    bio: 'UI/UX designer with 8 years of experience. Always eager to learn backend development.',
    avatar_url: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200',
    location: 'Austin, TX',
    profession: 'Lead Product Designer',
    experience_level: 'expert',
    created_at: '2024-02-10T14:30:00Z',
    updated_at: '2024-02-10T14:30:00Z'
  },
  {
    id: '3',
    full_name: 'Elena Rodriguez',
    bio: 'Digital marketing strategist looking to expand into data analytics and visualization.',
    avatar_url: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200',
    location: 'Miami, FL',
    profession: 'Marketing Director',
    experience_level: 'intermediate',
    created_at: '2024-03-05T09:15:00Z',
    updated_at: '2024-03-05T09:15:00Z'
  },
  {
    id: '4',
    full_name: 'David Park',
    bio: 'Data scientist specializing in machine learning. Want to improve my communication and presentation skills.',
    avatar_url: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200',
    location: 'Seattle, WA',
    profession: 'Data Scientist',
    experience_level: 'expert',
    created_at: '2024-01-20T16:45:00Z',
    updated_at: '2024-01-20T16:45:00Z'
  },
  {
    id: '5',
    full_name: 'Aisha Patel',
    bio: 'Content writer and storyteller. Eager to learn web development to build my own projects.',
    avatar_url: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
    location: 'Boston, MA',
    profession: 'Content Strategist',
    experience_level: 'intermediate',
    created_at: '2024-02-28T11:20:00Z',
    updated_at: '2024-02-28T11:20:00Z'
  },
  {
    id: 'current',
    full_name: 'You',
    bio: 'Passionate about learning and sharing knowledge.',
    location: 'New York, NY',
    profession: 'Professional',
    experience_level: 'intermediate',
    created_at: '2024-03-15T08:00:00Z',
    updated_at: '2024-03-15T08:00:00Z'
  }
];

export const mockSkills: Skill[] = [
  {
    id: 's1',
    user_id: '1',
    skill_name: 'React & TypeScript',
    category: 'Technology',
    skill_type: 'offer',
    proficiency_level: 'expert',
    description: 'Advanced React patterns, hooks, TypeScript integration, state management with Context and Redux.',
    created_at: '2024-01-15T10:30:00Z'
  },
  {
    id: 's2',
    user_id: '1',
    skill_name: 'Spanish Language',
    category: 'Languages',
    skill_type: 'seeking',
    description: 'Looking to learn conversational Spanish for travel and work opportunities.',
    created_at: '2024-01-15T10:35:00Z'
  },
  {
    id: 's3',
    user_id: '2',
    skill_name: 'UI/UX Design',
    category: 'Design',
    skill_type: 'offer',
    proficiency_level: 'expert',
    description: 'User research, wireframing, prototyping in Figma, design systems, accessibility.',
    created_at: '2024-02-10T15:00:00Z'
  },
  {
    id: 's4',
    user_id: '2',
    skill_name: 'Backend Development',
    category: 'Technology',
    skill_type: 'seeking',
    description: 'Want to learn Node.js, databases, APIs to become a full-stack designer.',
    created_at: '2024-02-10T15:05:00Z'
  },
  {
    id: 's5',
    user_id: '3',
    skill_name: 'Digital Marketing',
    category: 'Business',
    skill_type: 'offer',
    proficiency_level: 'expert',
    description: 'SEO, SEM, social media strategy, content marketing, analytics.',
    created_at: '2024-03-05T09:30:00Z'
  },
  {
    id: 's6',
    user_id: '3',
    skill_name: 'Data Visualization',
    category: 'Technology',
    skill_type: 'seeking',
    description: 'Interested in learning tools like Tableau, D3.js to present marketing data better.',
    created_at: '2024-03-05T09:35:00Z'
  },
  {
    id: 's7',
    user_id: '4',
    skill_name: 'Machine Learning',
    category: 'Technology',
    skill_type: 'offer',
    proficiency_level: 'expert',
    description: 'Python, TensorFlow, PyTorch, data preprocessing, model training and deployment.',
    created_at: '2024-01-20T17:00:00Z'
  },
  {
    id: 's8',
    user_id: '4',
    skill_name: 'Public Speaking',
    category: 'Soft Skills',
    skill_type: 'seeking',
    description: 'Want to improve presentation skills for conferences and team meetings.',
    created_at: '2024-01-20T17:05:00Z'
  },
  {
    id: 's9',
    user_id: '5',
    skill_name: 'Content Writing',
    category: 'Creative',
    skill_type: 'offer',
    proficiency_level: 'expert',
    description: 'Blog posts, technical documentation, copywriting, storytelling, SEO writing.',
    created_at: '2024-02-28T11:45:00Z'
  },
  {
    id: 's10',
    user_id: '5',
    skill_name: 'Web Development',
    category: 'Technology',
    skill_type: 'seeking',
    description: 'HTML, CSS, JavaScript basics to build personal portfolio and blogs.',
    created_at: '2024-02-28T11:50:00Z'
  },
  {
    id: 's11',
    user_id: 'current',
    skill_name: 'Project Management',
    category: 'Business',
    skill_type: 'offer',
    proficiency_level: 'intermediate',
    description: 'Agile methodologies, team coordination, timeline management.',
    created_at: '2024-03-15T08:30:00Z'
  },
  {
    id: 's12',
    user_id: 'current',
    skill_name: 'Graphic Design',
    category: 'Design',
    skill_type: 'seeking',
    description: 'Want to learn Adobe Creative Suite and design principles.',
    created_at: '2024-03-15T08:35:00Z'
  }
];

export const mockExchanges: SkillExchange[] = [
  {
    id: 'e1',
    requester_id: 'current',
    provider_id: '1',
    requester_skill_id: 's11',
    provider_skill_id: 's1',
    status: 'accepted',
    message: 'Hi Sarah! I would love to learn React from you. In exchange, I can help you with project management techniques.',
    created_at: '2024-03-20T10:00:00Z',
    updated_at: '2024-03-20T14:00:00Z'
  },
  {
    id: 'e2',
    requester_id: '2',
    provider_id: 'current',
    requester_skill_id: 's3',
    provider_skill_id: 's11',
    status: 'pending',
    message: 'I saw your project management skills! Would you like to learn UI/UX design from me?',
    created_at: '2024-03-22T09:30:00Z',
    updated_at: '2024-03-22T09:30:00Z'
  },
  {
    id: 'e3',
    requester_id: 'current',
    provider_id: '3',
    requester_skill_id: 's11',
    provider_skill_id: 's5',
    status: 'completed',
    message: 'Would love to learn digital marketing strategies from you!',
    created_at: '2024-03-10T15:20:00Z',
    updated_at: '2024-03-18T16:00:00Z'
  }
];

export const mockReviews: Review[] = [
  {
    id: 'r1',
    exchange_id: 'e3',
    reviewer_id: 'current',
    reviewee_id: '3',
    rating: 5,
    comment: 'Elena was an amazing teacher! Her marketing insights were incredibly valuable and practical.',
    created_at: '2024-03-19T10:00:00Z'
  },
  {
    id: 'r2',
    exchange_id: 'e3',
    reviewer_id: '3',
    reviewee_id: 'current',
    rating: 5,
    comment: 'Great project management tips! Very organized and clear in explanations.',
    created_at: '2024-03-19T11:30:00Z'
  }
];

export const currentUser = mockProfiles.find(p => p.id === 'current')!;
