import { motion } from 'framer-motion';

const techs = [
  { name: 'Rust', color: 'text-orange-500', desc: 'High Perf Backend' },
  { name: 'Python', color: 'text-blue-400', desc: 'Data & Scripting' },
  { name: 'TypeScript', color: 'text-blue-500', desc: 'Type Safety' },
  { name: 'Arch Linux', color: 'text-indigo-400', desc: 'Infrastructure' },
  { name: 'Supabase', color: 'text-emerald-400', desc: 'Postgres Backend' },
  { name: 'Tailscale', color: 'text-gray-200', desc: 'Secure Networking' },
];

export const TechStack = () => {
  return (
    <div className="py-20 px-4">
      <h2 className="text-3xl font-mono text-center mb-12 text-yum-accent">
        <span className="text-white">&lt;</span> Stack /<span className="text-white">&gt;</span>
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
        {techs.map((tech, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05, borderColor: '#10b981' }}
            className="bg-yum-800 border border-yum-700 p-6 rounded hover:shadow-lg transition-all cursor-default group"
          >
            <h3 className={`font-bold text-xl mb-1 ${tech.color}`}>{tech.name}</h3>
            <p className="text-gray-500 text-sm font-mono group-hover:text-gray-300">{tech.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};