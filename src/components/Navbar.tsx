import { Cpu, Github } from 'lucide-react';

export const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-yum-900/80 backdrop-blur-md border-b border-yum-700 h-16 flex items-center">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-2 font-mono text-xl font-bold tracking-tighter">
            <Cpu className="text-yum-accent" />
            <span>YUM<span className="text-yum-accent">LABS</span></span>
        </div>
        <div className="flex gap-6 text-sm font-mono text-gray-400">
            <a href="#contact" className="hover:text-white hover:underline decoration-yum-accent underline-offset-4">Contact</a>
            <a href="https://github.com/CodingInCarhartts" target="_blank" rel="noopener noreferrer" className="bg-yum-accent text-black font-bold px-3 py-1 rounded hover:bg-green-400 transition-colors flex items-center gap-2">
                <Github className="w-4 h-4" />
                GitHub
            </a>
        </div>
      </div>
    </nav>
  );
};
