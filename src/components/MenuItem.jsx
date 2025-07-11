// @ts-ignore;
import React from 'react';
// @ts-ignore;
import { Settings, Lock, Bell, HelpCircle, ChevronRight } from 'lucide-react';

export function MenuItem({
  icon,
  label,
  onClick
}) {
  const Icon = icon;
  return <div className="p-4 border-b border-gray-100 flex items-center justify-between hover:bg-gray-50 transition cursor-pointer" onClick={onClick}>
      <div className="flex items-center">
        <div className={`bg-${icon === Settings ? 'blue' : icon === Lock ? 'purple' : icon === Bell ? 'green' : 'yellow'}-100 p-2 rounded-lg mr-3`}>
          <Icon className={`text-${icon === Settings ? 'blue' : icon === Lock ? 'purple' : icon === Bell ? 'green' : 'yellow'}-500`} />
        </div>
        <span>{label}</span>
      </div>
      <ChevronRight className="text-gray-400" />
    </div>;
}