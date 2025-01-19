import {
  ArrowUpRight,
  LucideIcon,
  MessagesSquare,
  Moon,
  Plus,
  Power,
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
import { Button } from "./button";

const AppSidebar = () => {
  const [chats, setChats] = useState<SidebarProps[]>([
    {
      title: "How to get started...",
      url: "/",
      icon: MessagesSquare,
    },
    {
      title: "How to get started...",
      url: "/",
      icon: MessagesSquare,
    },
    {
      title: "How to get started...",
      url: "/",
      icon: MessagesSquare,
    },
  ]);
  return (
    <Sidebar>
      <SidebarContent className="px-3">
        <div className="p-5 bg-white mx-5 my-2 rounded-md">
          <div className="flex gap-x-5">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            <div className="flex flex-col gap-2">
              <span className="text-sm font-semibold leading-none">
                Imran Khan
              </span>
              <span className="text-xs leading-none text-muted-foreground">
                Free Account
              </span>
            </div>
          </div>
        </div>
        <SidebarGroup>
          <SidebarGroupLabel>Chats</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {chats.map((item, index) => (
                <SidebarMenuItem key={index}>
                  <SidebarMenuButton>
                    <item.icon className="mr-2 h-4 w-4" />
                    {item.title}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <Button className="items-cebter justify-start bg-green-600 hover:bg-green-900">
          <Plus />
          New Chat
        </Button>

        {/* put on bottom */}
        <div className="absolute bottom-20 right-0 left-0">
          <SidebarFooter>
            <div>
              <Button className="bg-transparent text-black shadow-none hover:bg-transparent">
                <ArrowUpRight />
                Updates and Faqs
              </Button>
            </div>
            <div>
              <Button className="bg-transparent text-black shadow-none hover:bg-transparent">
                <Moon />
                Switch to Night mode
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
