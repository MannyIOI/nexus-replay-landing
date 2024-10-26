import { LineChart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="container mx-auto px-6 py-6 flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <LineChart className="h-8 w-8 text-blue-500" />
        <span className="text-xl font-bold">Nexus Replay</span>
      </div>
      <div className="hidden md:flex space-x-8">
        <a href="#features" className="hover:text-blue-400 transition-colors">Features</a>
        <a href="#pricing" className="hover:text-blue-400 transition-colors">Pricing</a>
      </div>
      <button 
        onClick={() => navigate('/login')} 
        className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-lg transition-colors"
      >
        Get Started
      </button>
    </nav>
  );
}