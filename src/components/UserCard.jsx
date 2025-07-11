// @ts-ignore;
import React from 'react';
// @ts-ignore;
import { Avatar, AvatarFallback, AvatarImage, Badge } from '@/components/ui';
// @ts-ignore;
import { Camera } from 'lucide-react';

export function UserCard({
  user
}) {
  return <div className="bg-white rounded-xl shadow-md p-6 mb-6 hover:translate-y-[-2px] transition-transform">
      <div className="flex items-center space-x-4">
        <div className="relative">
          <Avatar className="w-20 h-20 border-2 border-blue-500">
            <AvatarImage src={user.avatarUrl || "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"} />
            <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="absolute bottom-0 right-0 bg-blue-500 rounded-full p-1">
            <Camera className="text-white w-3 h-3" />
          </div>
        </div>
        <div>
          <h2 className="text-xl font-bold text-gray-800">{user.name}</h2>
          <p className="text-gray-500">@{user.nickName || "user"}</p>
          <div className="flex space-x-2 mt-1">
            <Badge variant="blue">VIP会员</Badge>
            <Badge variant="green">已认证</Badge>
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-4 pt-4 border-t border-gray-100">
        <div className="text-center">
          <p className="text-gray-500 text-sm">关注</p>
          <p className="font-bold text-gray-800">128</p>
        </div>
        <div className="text-center">
          <p className="text-gray-500 text-sm">粉丝</p>
          <p className="font-bold text-gray-800">356</p>
        </div>
        <div className="text-center">
          <p className="text-gray-500 text-sm">获赞</p>
          <p className="font-bold text-gray-800">1.2k</p>
        </div>
      </div>
    </div>;
}