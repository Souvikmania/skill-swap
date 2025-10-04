import { createContext, useContext, useState, ReactNode } from 'react';
import { Profile, Skill, SkillExchange } from '../types';
import { mockProfiles, mockSkills, mockExchanges, currentUser } from '../data/mockData';

interface AppContextType {
  currentUser: Profile;
  profiles: Profile[];
  skills: Skill[];
  exchanges: SkillExchange[];
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
  addSkill: (skill: Omit<Skill, 'id' | 'created_at'>) => void;
  updateProfile: (updates: Partial<Profile>) => void;
  createExchange: (exchange: Omit<SkillExchange, 'id' | 'created_at' | 'updated_at' | 'status'>) => void;
  updateExchangeStatus: (exchangeId: string, status: SkillExchange['status']) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [user, setUser] = useState<Profile>(currentUser);
  const [profiles] = useState<Profile[]>(mockProfiles);
  const [skills, setSkills] = useState<Skill[]>(mockSkills);
  const [exchanges, setExchanges] = useState<SkillExchange[]>(mockExchanges);

  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);

  const addSkill = (skillData: Omit<Skill, 'id' | 'created_at'>) => {
    const newSkill: Skill = {
      ...skillData,
      id: `s${Date.now()}`,
      created_at: new Date().toISOString()
    };
    setSkills(prev => [...prev, newSkill]);
  };

  const updateProfile = (updates: Partial<Profile>) => {
    setUser(prev => ({
      ...prev,
      ...updates,
      updated_at: new Date().toISOString()
    }));
  };

  const createExchange = (exchangeData: Omit<SkillExchange, 'id' | 'created_at' | 'updated_at' | 'status'>) => {
    const newExchange: SkillExchange = {
      ...exchangeData,
      id: `e${Date.now()}`,
      status: 'pending',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    };
    setExchanges(prev => [...prev, newExchange]);
  };

  const updateExchangeStatus = (exchangeId: string, status: SkillExchange['status']) => {
    setExchanges(prev =>
      prev.map(ex =>
        ex.id === exchangeId
          ? { ...ex, status, updated_at: new Date().toISOString() }
          : ex
      )
    );
  };

  return (
    <AppContext.Provider
      value={{
        currentUser: user,
        profiles,
        skills,
        exchanges,
        isAuthenticated,
        login,
        logout,
        addSkill,
        updateProfile,
        createExchange,
        updateExchangeStatus
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
}
