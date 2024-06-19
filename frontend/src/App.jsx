import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import { LandingPage } from "./pages/Landing/LandingPage";
import { LoginPage } from "./pages/Login/LoginPage";
import { SignupPage } from "./pages/Signup/SignupPage";
import { Cupboard } from "./pages/Cupboard/Cupboard";
import { Recipe } from "./pages/Recipe/Recipe";
import CookBook from "./pages/CookBook/CookBook";

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
    path: "/cupboard",
    element: <Cupboard />,
  },
  {
    path: "/recipe/:id",
    element: <Recipe />,
  },
  {
    path: "/cookbook",
    element: <CookBook />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
