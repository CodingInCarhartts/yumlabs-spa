import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';

const commands = [
  { cmd: 'yumlabs init', output: 'Initializing Core Services...' },
  { cmd: 'load module --rust', output: 'Optimizing Backend Performance...' },
  { cmd: 'connect --supabase', output: 'Database Sync: Active' },
  { cmd: 'status', output: 'Systems Operational. Welcome to YUMLABS.' },
];

export const TerminalHero = () => {
  const [lineIndex, setLineIndex] = useState(0);

  useEffect(() => {
    if (lineIndex < commands.length) {
      const timeout = setTimeout(() => {
        setLineIndex(prev => prev + 1);
      }, 1500);
      return () => clearTimeout(timeout);
    }
  }, [lineIndex]);

  return (
    <div className="w-full max-w-4xl mx-auto p-4 mt-20">
      <div className="bg-yum-800 rounded-t-md p-2 flex items-center gap-2 border-b border-yum-700">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
        <div className="ml-4 text-xs text-gray-400 font-mono flex items-center gap-2">
          <Terminal size={12} />
          root@yumlabs:~
        </div>
      </div>
      <div className="bg-yum-900/90 backdrop-blur p-6 rounded-b-md border border-yum-700 shadow-2xl shadow-yum-accent/10 font-mono text-sm md:text-base h-[300px] flex flex-col">
        {commands.slice(0, lineIndex + 1).map((item, idx) => (
          <div key={idx} className="mb-4">
            <div className="flex gap-2 text-yum-accent">
              <span>➜</span>
              <span className="text-white">~ {item.cmd}</span>
            </div>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-gray-400 mt-1 ml-5"
            >
              {item.output}
            </motion.div>
          </div>
        ))}
        <div className="flex-grow"></div>
        {lineIndex === commands.length && (
            <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: [0, 1, 0] }} 
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="w-2 h-5 bg-yum-accent ml-5"
            />
        )}
      </div>
    </div>
  );
};