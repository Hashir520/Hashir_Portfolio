import React from 'react';

export default function SkillBadge({ name, level }) {
  const getLevelColor = () => {
    switch (level) {
      case 'Beginner':
        return 'from-green-700  to-green-600';
      case 'Intermediate':
        return 'from-green-700  to-green-600';
      case 'Advanced':
        return 'from-green-700  to-green-600';
      case 'Expert':
        return 'from-green-700  to-green-600';
      default:
        return 'from-green-700  to-green-600';
    }
  };
  

  return (
    <div className="glass-effect p-4 rounded-2xl group hover:bg-white/[0.15] transition-colors">
      <h3 className="font-medium   text-white mb-2">{name}</h3>
      <span className={`text-sm font-medium px-3 py-1 rounded-full inline-block bg-gradient-to-r ${getLevelColor()}`}>
        {level}
      </span>
    </div>
  );
}