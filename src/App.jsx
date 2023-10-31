import {RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Values from "./pages/Values";

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
      path: '/values',
      element: <Values />,
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
