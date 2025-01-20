import AppSidebar from "@/components/AppSidebar";
import { Outlet } from "react-router-dom";
import { useChat } from "@/hooks/useChat";

const HomeLayout = () => {
  const { messages, isLoading, sendMessage, createNewChat } = useChat()

  return (
    <div className="flex flex-row min-h-screen w-full bg-[#222222] text-[#E5E5E5]">
      <div className="max-w-[600px]">
        <AppSidebar />
      </div>
      <div className="flex-1">
        <Outlet context={{ messages, isLoading, sendMessage, createNewChat }} />
      </div>
    </div>
  );
};

export default HomeLayout;
