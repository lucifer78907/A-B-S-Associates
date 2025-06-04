import { createBrowserRouter, RouterProvider } from "react-router-dom"
// Pages
import Homepage from "./pages/Homepage"
import RootLayout from "./layout/RootLayout"
import About from "./pages/About"
import FoundingMembers from "./pages/FoundingMembers"
import Contact from "./pages/Contact"
import PracticeAreas from "./pages/PracticeAreas"
import Services from "./pages/Services"
import CoreStaff from "./pages/CoreStaff"


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
              path: 'core-team',
              element: <CoreStaff />
            }
          ]
        },
        {
          path: 'contact',
          element: <Contact />
        },
        {
          path: 'practice-areas',
          element: <PracticeAreas />
        },
        {
          path: 'services',
          element: <Services />
        }
      ]
    }
  ])

  return <RouterProvider router={router}></RouterProvider>
}

export default App


// 1.) ABS mai space dena A B S
// 2.) Footer details