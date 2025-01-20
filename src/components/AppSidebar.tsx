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
  SidebarMenuButton,
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
      <SidebarContent className="px-3">
        <div className="p-5 bg-white/10 mx-5 my-2 rounded-md">
          <div className="flex gap-x-5">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            <div className="flex flex-col gap-2">
              <span className="text-sm font-semibold leading-none">
                Imran Khan
              </span>
              <span className="text-xs leading-none text-green-500">
                Free Account
              </span>
            </div>
          </div>
        </div>
        <SidebarGroup>
          <SidebarGroupLabel>Chats</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {chats.map((chat) => (
                <SidebarMenuItem key={chat.id}>
                  <SidebarMenuButton>
                    <Link to={`/chat/${chat.id}`}>
                      <MessagesSquare className="mr-2 h-4 w-4" />
                      {chat.title}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <Button
          onClick={createNewChat}
          className="w-full mb-4 bg-emerald-600 hover:bg-emerald-700"
        >
          <PlusCircle className="mr-2 h-4 w-4" />
          New Chat
        </Button>

        {/* put on bottom */}
        <div className="absolute bottom-20 right-0 left-0">
          <SidebarFooter>
            <div>
              <Button className="bg-transparent text-sidebar-primary-foreground shadow-none hover:bg-transparent">
                <ArrowUpRight />
                Updates and Faqs
              </Button>
            </div>
            <div>
              <Button className="bg-transparent text-sidebar-primary-foreground shadow-none hover:bg-transparent">
                <Sun />
                Switch to Light mode
              </Button>
            </div>
            <div>
              <Button className="bg-transparent text-red-500 shadow-none hover:bg-transparent">
                <Power />
                Sign out
              </Button>
            </div>
          </SidebarFooter>
        </div>
      </SidebarContent>
    </Sidebar>
  );
};

export default AppSidebar;
