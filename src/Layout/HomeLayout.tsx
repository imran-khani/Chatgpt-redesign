import AppSidebar from "@/components/AppSidebar";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <div className="flex flex-row min-h-screen w-full bg-[#222222] text-[#E5E5E5]">
      <div className="max-w-[600px]">
        <AppSidebar />
      </div>
         <div className="flex-1">
            <Outlet />
         </div>
    </div>
  );
};

export default HomeLayout;
