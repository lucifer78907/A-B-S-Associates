import { createBrowserRouter, RouterProvider } from "react-router-dom"
// Pages
import Homepage from "./pages/Homepage"
import RootLayout from "./layout/RootLayout"
import About from "./pages/About"
import FoundingMembers from "./pages/FoundingMembers"
import Contact from "./pages/Contact"


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
        },
        {
          path: 'team',
          children: [
            {
              path: 'founding-members',
              element: <FoundingMembers />
            },
            {
              path: 'key-staff',
              element: <div>Key Staff Page</div>
            }
          ]
        },
        {
          path: 'contact',
          element: <Contact />
        }
      ]
    }
  ])

  return <RouterProvider router={router}></RouterProvider>
}

export default App
