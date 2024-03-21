// PopoverContentComponent.tsx

import React from 'react';
import { PopoverContent } from '@nextui-org/react';
import { CircleUserRound, Settings, LogOut } from 'lucide-react';

const PopoverContentComponent: React.FC = () => {
  return (
    <PopoverContent>
      <div className="px-1 py-2 border-2 border-black bg-white">
        <div className="flex items-center text-sm text-slate-500">sreeuser@gmail.com</div>
        <br />
        <div className="flex items-center">
          <CircleUserRound />
          <span className="ml-2 text-sm max-w-prose text-slate-500">View profile</span>
        </div>
        <br />
        <div className="flex items-center">
          <Settings />
          <span className="ml-2 text-sm max-w-prose text-slate-500">Settings</span>
        </div>
        <br />
        <hr />
        <div className="flex items-center">
          <LogOut />
          <span className="ml-2 text-sm max-w-prose text-slate-500">Sign Out</span>
        </div>
      </div>
    </PopoverContent>
  );
};

export default PopoverContentComponent;
