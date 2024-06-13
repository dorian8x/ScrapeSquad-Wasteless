import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import { LoginPage } from "./pages/Login/LoginPage";
import { SignupPage } from "./pages/Signup/SignupPage";
import { Cupboard } from "./pages/Cupboard/Cupboard";
import { CookBook } from "./pages/CookBook/CookBook";
import { LandingPage } from "./pages/Landing/LandingPage";
import { SearchResults } from "./pages/SearchResults/SearchResults";


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
    path: "/cookbook",
    element: <CookBook />,
  },
  {
    path: "/cupboard",
    element: <Cupboard />,
  },
  {
    path: "/searchresults",
    element: <SearchResults />,
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
