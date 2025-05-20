
import React from 'react';

const Campfire = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M8 22h8" />
      <path d="M12 6c-1.1 1.5-2.7 1.5-4 3 1.5 1.5 1.5 2.5 2 4 .5-1.5 1.5-3 4-4-1.5-1.5-2-2-2-3z" />
      <path d="M12 10c-.7.7-1.1 1-1.5 1.5.4.5.5 1 .7 2 .2-.5.8-1.5 2-2-.7-.5-1-1-1.2-1.5z" />
      <path d="M16 22c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2" />
    </svg>
  );
};

export default Campfire;
