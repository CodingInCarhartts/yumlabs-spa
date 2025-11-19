import { Navbar } from './components/Navbar';
import { TerminalHero } from './components/TerminalHero';
import { Services } from './components/Services';
import { TechStack } from './components/TechStack';
import { Contact } from './components/Contact';
import { Github } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-yum-900 text-white selection:bg-yum-accent selection:text-black overflow-x-hidden">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="min-h-[80vh] flex flex-col items-center justify-center relative">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none"></div>
            
            <div className="text-center mb-8 z-10">
                <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tighter">
                    BUILD <span className="text-transparent bg-clip-text bg-gradient-to-r from-yum-accent to-yum-secondary">DIFFERENT</span>
                </h1>
                <p className="text-gray-400 font-mono">Architecting Backend Superiority.</p>
            </div>

            <TerminalHero />
        </section>

        <Services />
        <TechStack />
        <Contact />

        <footer className="py-12 border-t border-yum-700 text-center font-mono text-gray-500">
            <div className="flex justify-center gap-4 mb-4">
                <a href="https://github.com/CodingInCarhartts" target="_blank" rel="noopener noreferrer">
                    <Github className="hover:text-white cursor-pointer" />
                </a>
            </div>
            <p>&copy; {new Date().getFullYear()} YUMLABS. All systems normal.</p>
            <p className="text-xs mt-2 opacity-50">Powered by Bun, Rust & Caffeine.</p>
        </footer>
      </main>
    </div>
  )
}

export default App