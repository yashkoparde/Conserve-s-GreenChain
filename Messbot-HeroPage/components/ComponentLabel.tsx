
import React from 'react';
import { motion, MotionValue } from 'framer-motion';

interface ComponentLabelProps {
  opacity: MotionValue<number>;
  side: 'left' | 'right';
  xOffset: string;
  yOffset: string;
  title: string;
  description: string;
  color: 'emerald' | 'blue' | 'purple' | 'amber';
}

const colorMap = {
  emerald: '#10b981',
  blue: '#3b82f6',
  purple: '#a855f7',
  amber: '#f59e0b',
};

const ComponentLabel: React.FC<ComponentLabelProps> = ({ 
  opacity, side, xOffset, yOffset, title, description, color 
}) => {
  return (
    <motion.div
      style={{ 
        opacity, 
        top: '50%', 
        left: '50%', 
        x: xOffset, 
        y: yOffset,
      }}
      className={`absolute z-40 flex items-center ${side === 'left' ? 'flex-row-reverse text-right' : 'flex-row text-left'}`}
    >
      {/* SVG Connector Line */}
      <div className="relative h-px w-24 overflow-visible">
        <svg className="absolute top-0 left-0 w-full h-4 overflow-visible" style={{ transform: side === 'left' ? 'scaleX(-1)' : 'none' }}>
          <motion.path
            d="M 0 0 L 80 0"
            fill="transparent"
            stroke="white"
            strokeWidth="0.5"
            strokeOpacity="0.2"
          />
          <motion.path
            d="M 0 0 L 80 0"
            fill="transparent"
            stroke={colorMap[color]}
            strokeWidth="1.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, repeat: Infinity }}
            style={{ filter: `drop-shadow(0 0 4px ${colorMap[color]})` }}
          />
          <circle cx="0" cy="0" r="2.5" fill={colorMap[color]} />
        </svg>
      </div>

      {/* Label Content */}
      <div className={`px-4 ${side === 'left' ? 'mr-2' : 'ml-2'}`}>
        <h4 className="text-white font-bold text-sm tracking-tight mb-0.5">{title}</h4>
        <p className="text-neutral-500 text-[10px] leading-tight max-w-[150px] font-medium uppercase tracking-[0.1em]">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default ComponentLabel;
