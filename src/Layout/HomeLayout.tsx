import AppSidebar from "@/components/ui/AppSidebar"
import { Sidebar, SidebarProvider } from "@/components/ui/sidebar"

const HomeLayout = () => {
  return (
    <div 
     className="flex flex-row min-h-screen w-full"
    >
      <div className="max-w-[600px]">
        <AppSidebar />
      </div>
    </div>
  )
}

export default HomeLayout