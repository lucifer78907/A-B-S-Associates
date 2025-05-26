import { createBrowserRouter, RouterProvider } from "react-router-dom"
// Pages
import Homepage from "./pages/Homepage"
import RootLayout from "./layout/RootLayout"


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Homepage />
        }
      ]
    }
  ])

  return <RouterProvider router={router}></RouterProvider>
}

export default App
