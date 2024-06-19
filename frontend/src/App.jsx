import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import { LoginPage } from "./pages/Login/LoginPage";
import { SignupPage } from "./pages/Signup/SignupPage";
import { Cupboard } from "./pages/Cupboard/Cupboard";
import { Recipe } from "./pages/Recipe/Recipe";
import CookBook from "./pages/CookBook/CookBook"; // Corrected import
import { LandingPage } from "./pages/Landing/LandingPage";
import { Footer } from "./components/Footer/Footer";

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

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
      <Footer />
    </>
  );
};

export default App;
