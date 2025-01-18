import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeLayout from "./Layout/HomeLayout";
import { SidebarProvider } from "./components/ui/sidebar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
  },
]);

const App = () => {
  return (
    <SidebarProvider>
      <RouterProvider router={router} />
    </SidebarProvider>
  );
};

export default App;
