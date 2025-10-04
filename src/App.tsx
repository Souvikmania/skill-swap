import { useState } from 'react';
import { AppProvider, useApp } from './context/AppContext';
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import Discover from './pages/Discover';
import Exchanges from './pages/Exchanges';
import Profile from './pages/Profile';
import Navbar from './components/Navbar';

function AppContent() {
  const { isAuthenticated, logout } = useApp();
  const [currentPage, setCurrentPage] = useState<string>('dashboard');

  if (!isAuthenticated) {
    return <Landing onGetStarted={() => {}} />;
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />;
      case 'discover':
        return <Discover />;
      case 'exchanges':
        return <Exchanges />;
      case 'profile':
        return <Profile />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-teal-50 to-cyan-50">
      <Navbar
        currentPage={currentPage}
        onNavigate={setCurrentPage}
        onLogout={logout}
      />
      <main className="max-w-7xl mx-auto px-6 py-8">
        {renderPage()}
      </main>
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}
