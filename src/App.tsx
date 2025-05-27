import { createBrowserRouter, RouterProvider } from "react-router-dom"
// Pages
import Homepage from "./pages/Homepage"
import RootLayout from "./layout/RootLayout"
import About from "./pages/About"


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Homepage />
        },
        {
          path: 'about',
          element: <About />
        }
      ]
    }
  ])

  return <RouterProvider router={router}></RouterProvider>
}

export default App
