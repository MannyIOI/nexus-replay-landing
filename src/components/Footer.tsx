import { LineChart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-gray-700">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <LineChart className="h-6 w-6 text-blue-500" />
            <span className="font-bold">Nexus Replay</span>
          </div>
          <div className="text-sm text-gray-400">
            © 2024 Nexus Replay. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}