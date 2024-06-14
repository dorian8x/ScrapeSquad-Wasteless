import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import { LoginPage } from "./pages/Login/LoginPage";
import { SignupPage } from "./pages/Signup/SignupPage";
import Cupboard from "./pages/Cupboard/Cupboard";
import { LandingPage } from "./pages/Landing/LandingPage";
import  Recipe  from "./pages/Recipe/Recipe";
import CookbookPage from "./pages/CookBook/CookbookPage";


// docs: https://reactrouter.com/en/main/start/overview
const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
  {
    path: "/landing",
    element: <LandingPage />,
  },
  {
    path: "/cupboard",
    element: <Cupboard />,
  },
  {
    path: "/recipe",
    element: <Recipe />,
  },
  {
    path: "/cookbook",
    element: <CookbookPage />,
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
