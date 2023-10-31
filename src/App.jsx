import {RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/services',
      element: <Services />,
    },
    {
      path: '/about',
      element: <About />,
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
