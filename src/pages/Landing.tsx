import { ArrowRight, Users, Sparkles, TrendingUp, Shield } from 'lucide-react';
import Button from '../components/Button';

interface LandingProps {
  onGetStarted: () => void;
}

export default function Landing({ onGetStarted }: LandingProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-teal-50 to-cyan-50">
      <nav className="px-6 py-5 flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-lg flex items-center justify-center transform -rotate-12">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
            SkillSwap
          </span>
        </div>
        <Button variant="outline" size="sm" onClick={onGetStarted}>
          Sign In
        </Button>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-block">
              <span className="px-4 py-2 bg-gradient-to-r from-teal-500 to-cyan-600 text-white rounded-full text-sm font-semibold shadow-lg">
                Trade Skills, Not Cash
              </span>
            </div>

            <h1 className="text-6xl font-black text-slate-900 leading-tight">
              Learn Anything.
              <span className="block bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent">
                Teach Everything.
              </span>
            </h1>

            <p className="text-xl text-slate-600 leading-relaxed max-w-lg">
              Join a community where professionals exchange skills without money.
              Share what you know, learn what you need, and grow together.
            </p>

            <div className="flex gap-4">
              <Button
                variant="primary"
                size="lg"
                onClick={onGetStarted}
                className="group"
              >
                Get Started Free
                <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                Watch Demo
              </Button>
            </div>

            <div className="flex gap-8 pt-6">
              <div>
                <p className="text-3xl font-bold text-slate-900">12K+</p>
                <p className="text-sm text-slate-600">Active Users</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-slate-900">50K+</p>
                <p className="text-sm text-slate-600">Skills Exchanged</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-slate-900">4.9</p>
                <p className="text-sm text-slate-600">Avg Rating</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-10 -left-10 w-72 h-72 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full opacity-20 blur-3xl"></div>

            <div className="relative grid grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-xl transform rotate-3 hover:rotate-0 transition-transform">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">Connect</h3>
                <p className="text-sm text-slate-600">Find professionals eager to exchange skills</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-xl transform -rotate-3 hover:rotate-0 transition-transform mt-12">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">Grow</h3>
                <p className="text-sm text-slate-600">Expand your skillset without spending money</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-xl transform rotate-2 hover:rotate-0 transition-transform">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center mb-4">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">Smart Match</h3>
                <p className="text-sm text-slate-600">AI-powered skill matching algorithm</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-xl transform -rotate-2 hover:rotate-0 transition-transform mt-12">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">Verified</h3>
                <p className="text-sm text-slate-600">All users verified with reviews and ratings</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-32 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-5xl font-black text-teal-600 mb-3">01</div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">List Your Skills</h3>
            <p className="text-slate-600">Add skills you can teach and skills you want to learn</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-black text-cyan-600 mb-3">02</div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Find Matches</h3>
            <p className="text-slate-600">Discover people who need your skills and have what you need</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-black text-orange-600 mb-3">03</div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Start Learning</h3>
            <p className="text-slate-600">Connect, schedule sessions, and exchange knowledge</p>
          </div>
        </div>
      </div>
    </div>
  );
}
