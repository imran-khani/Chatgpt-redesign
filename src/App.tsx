import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeLayout from "./Layout/HomeLayout";
import { SidebarProvider } from "./components/ui/sidebar";
import Main from "./components/main/Main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/chat/:chatId",
        element: <Main />
      }
    ]
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
