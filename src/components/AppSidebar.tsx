import {
  ArrowUpRight,
  LucideIcon,
  MessagesSquare,
  Plus,
  Power,
  Sun,
  PlusCircle,
} from "lucide-react";

interface SidebarProps {
  title: string;
  url: string;
  icon: LucideIcon;
}

import { Avatar } from "@/components/ui/avatar";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useState } from "react";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Button } from "@/components/ui/button";
import { useChat } from "@/hooks/useChat";
import { Link, useParams } from "react-router-dom";

const AppSidebar = () => {
  const { chats, createNewChat } = useChat();
  const { chatId } = useParams();

  return (
    <Sidebar className="bg-sidebar-primary text-sidebar-primary-foreground dark">
      <SidebarContent className="flex flex-col h-full px-3">
        {/* Profile Section */}
        <div className="p-5 bg-white/10 mx-5 my-2 rounded-md">
          <div className="flex gap-x-5">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex flex-col gap-2">
              <span className="text-sm font-semibold leading-none">Imran Khan</span>
              <span className="text-xs leading-none text-green-500">Free Account</span>
            </div>
          </div>
        </div>

        {/* New Chat Button */}
        <Button
          onClick={createNewChat}
          className="mb-4 bg-emerald-600 hover:bg-emerald-700"
        >
          <PlusCircle className="mr-2 h-4 w-4" />
          New Chat
        </Button>

        {/* Chat List */}
        <SidebarGroup className="flex-1">
          <SidebarGroupLabel>Chats</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {chats.map((chat) => (
                <Link key={chat.id} to={`/chat/${chat.id}`}>
                  <SidebarMenuItem className={chatId === chat.id ? 'bg-white/10' : ''}>
                    <MessagesSquare className="mr-2 h-4 w-4" />
                    {chat.title}
                  </SidebarMenuItem>
                </Link>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Footer */}
        <SidebarFooter className="mt-auto">
          <Button className="w-full justify-start bg-transparent text-sidebar-primary-foreground hover:bg-white/10">
            <ArrowUpRight className="mr-2 h-4 w-4" />
            Updates and Faqs
          </Button>
          <Button className="w-full justify-start bg-transparent text-sidebar-primary-foreground hover:bg-white/10">
            <Sun className="mr-2 h-4 w-4" />
            Switch to Light mode
          </Button>
          <Button className="w-full justify-start bg-transparent text-red-500 hover:bg-white/10">
            <Power className="mr-2 h-4 w-4" />
            Sign out
          </Button>
        </SidebarFooter>
      </SidebarContent>
    </Sidebar>
  );
};

export default AppSidebar;
