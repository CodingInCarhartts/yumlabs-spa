import { Github, Twitter, MessageCircle } from 'lucide-react';

const contacts = [
  {
    icon: <MessageCircle className="w-8 h-8 text-indigo-400" />,
    title: 'Discord',
    desc: 'yumshot',
    link: null // Discord usernames aren't directly linkable
  },
  {
    icon: <Twitter className="w-8 h-8 text-blue-400" />,
    title: 'Twitter',
    desc: '@NotShinigamii',
    link: 'https://x.com/NotShinigamii'
  },
  {
    icon: <Github className="w-8 h-8 text-gray-200" />,
    title: 'GitHub',
    desc: 'CodingInCarhartts',
    link: 'https://github.com/CodingInCarhartts'
  }
];

export const Contact = () => {
  return (
    <div id="contact" className="py-20 bg-yum-800/30 border-y border-yum-700">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-mono text-center mb-12 text-yum-accent">
          <span className="text-white">&lt;</span> Contact /<span className="text-white">&gt;</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {contacts.map((c, i) => (
            <div key={i} className="p-6 bg-yum-900 border border-yum-700 rounded hover:border-yum-accent transition-colors">
              <div className="mb-4">{c.icon}</div>
              <h3 className="text-lg font-bold mb-2 font-mono">{c.title}</h3>
              {c.link ? (
                <a href={c.link} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-sm leading-relaxed">
                  {c.desc}
                </a>
              ) : (
                <p className="text-gray-400 text-sm leading-relaxed">{c.desc}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
