import { Server, Terminal, Wrench, Shield } from 'lucide-react';

const services = [
  {
    icon: <Server className="w-8 h-8 text-yum-accent" />,
    title: 'Backend APIs',
    desc: 'Robust, oxidised Rust services and Python microservices designed for scale.'
  },
  {
    icon: <Terminal className="w-8 h-8 text-yum-secondary" />,
    title: 'CLI Tools',
    desc: 'Custom developer tooling and shell automation for Linux environments.'
  },
  {
    icon: <Wrench className="w-8 h-8 text-blue-400" />,
    title: 'Dev Tooling',
    desc: 'Project-focused utilities to streamline CI/CD and architectural workflows.'
  },
  {
    icon: <Shield className="w-8 h-8 text-white" />,
    title: 'SecOps',
    desc: 'Implementation of secure networks via Tailscale and hardened Linux configs.'
  }
];

export const Services = () => {
  return (
    <div className="py-20 bg-yum-800/30 border-y border-yum-700">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <div key={i} className="p-6 bg-yum-900 border border-yum-700 rounded hover:border-yum-accent transition-colors">
              <div className="mb-4">{s.icon}</div>
              <h3 className="text-lg font-bold mb-2 font-mono">{s.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};