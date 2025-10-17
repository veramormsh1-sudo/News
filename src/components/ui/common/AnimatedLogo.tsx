import React from 'react';

const AnimatedLogo: React.FC = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="relative w-24 h-24">
        <svg 
          width="96" 
          height="96" 
          viewBox="0 0 96 96" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="animate-pulse"
        >
          {/* Центральная точка */}
          <circle cx="48" cy="48" r="4" fill="#FF6600" className="animate-pulse">
            <animate attributeName="r" values="3;5;3" dur="2s" repeatCount="indefinite" />
          </circle>
          
          {/* Первое кольцо */}
          <circle cx="48" cy="32" r="3" fill="#FF6600">
            <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" begin="0.2s" />
          </circle>
          <circle cx="64" cy="48" r="3" fill="#FF6600">
            <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" begin="0.4s" />
          </circle>
          <circle cx="48" cy="64" r="3" fill="#FF6600">
            <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" begin="0.6s" />
          </circle>
          <circle cx="32" cy="48" r="3" fill="#FF6600">
            <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" begin="0.8s" />
          </circle>
          
          {/* Диагонали */}
          <circle cx="59" cy="37" r="2" fill="#FF6600">
            <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2s" repeatCount="indefinite" begin="0.3s" />
          </circle>
          <circle cx="59" cy="59" r="2" fill="#FF6600">
            <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2s" repeatCount="indefinite" begin="0.5s" />
          </circle>
          <circle cx="37" cy="59" r="2" fill="#FF6600">
            <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2s" repeatCount="indefinite" begin="0.7s" />
          </circle>
          <circle cx="37" cy="37" r="2" fill="#FF6600">
            <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2s" repeatCount="indefinite" begin="0.1s" />
          </circle>
          
          {/* Внешнее кольцо */}
          <circle cx="48" cy="16" r="4" fill="#FF6600">
            <animate attributeName="opacity" values="0.2;0.7;0.2" dur="3s" repeatCount="indefinite" begin="0s" />
          </circle>
          <circle cx="80" cy="48" r="4" fill="#FF6600">
            <animate attributeName="opacity" values="0.2;0.7;0.2" dur="3s" repeatCount="indefinite" begin="0.5s" />
          </circle>
          <circle cx="48" cy="80" r="4" fill="#FF6600">
            <animate attributeName="opacity" values="0.2;0.7;0.2" dur="3s" repeatCount="indefinite" begin="1s" />
          </circle>
          <circle cx="16" cy="48" r="4" fill="#FF6600">
            <animate attributeName="opacity" values="0.2;0.7;0.2" dur="3s" repeatCount="indefinite" begin="1.5s" />
          </circle>
          
          {/* Внешние диагонали */}
          <circle cx="69" cy="27" r="3" fill="#FF6600">
            <animate attributeName="opacity" values="0.1;0.6;0.1" dur="3s" repeatCount="indefinite" begin="0.25s" />
          </circle>
          <circle cx="69" cy="69" r="3" fill="#FF6600">
            <animate attributeName="opacity" values="0.1;0.6;0.1" dur="3s" repeatCount="indefinite" begin="0.75s" />
          </circle>
          <circle cx="27" cy="69" r="3" fill="#FF6600">
            <animate attributeName="opacity" values="0.1;0.6;0.1" dur="3s" repeatCount="indefinite" begin="1.25s" />
          </circle>
          <circle cx="27" cy="27" r="3" fill="#FF6600">
            <animate attributeName="opacity" values="0.1;0.6;0.1" dur="3s" repeatCount="indefinite" begin="1.75s" />
          </circle>
        </svg>
      </div>
    </div>
  );
};

export default AnimatedLogo;