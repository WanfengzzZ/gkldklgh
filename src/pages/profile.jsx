// @ts-ignore;
import React from 'react';
// @ts-ignore;
import { Button } from '@/components/ui';
// @ts-ignore;
import { Settings, Lock, Bell, HelpCircle, ChevronRight, Camera } from 'lucide-react';

import { UserCard } from '@/components/UserCard';
import { MenuItem } from '@/components/MenuItem';
export default function Profile(props) {
  const {
    $w
  } = props;
  const user = $w.auth.currentUser || {
    name: '张小明',
    nickName: 'zhangxiaoming',
    avatarUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  };
  const handleLogout = () => {
    if (confirm('确定要退出登录吗？')) {
      alert('已退出登录');
      // 实际应用中这里应该是调用退出登录API
    }
  };
  const handleMenuItemClick = label => {
    alert(`跳转到${label}页面`);
    // 实际应用中这里应该是路由跳转
  };
  return <div className="max-w-md mx-auto p-4">
      <UserCard user={user} />
      
      <div className="bg-white rounded-xl shadow-md overflow-hidden mb-6">
        <MenuItem icon={Settings} label="账号设置" onClick={() => handleMenuItemClick('账号设置')} />
        <MenuItem icon={Lock} label="隐私设置" onClick={() => handleMenuItemClick('隐私设置')} />
        <MenuItem icon={Bell} label="通知设置" onClick={() => handleMenuItemClick('通知设置')} />
        <MenuItem icon={HelpCircle} label="帮助与反馈" onClick={() => handleMenuItemClick('帮助与反馈')} />
      </div>

      <Button variant="outline" className="w-full text-red-500 font-medium py-3 px-4 rounded-xl shadow-md hover:bg-red-50 transition" onClick={handleLogout}>
        退出登录
      </Button>
    </div>;
}