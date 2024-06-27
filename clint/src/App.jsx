import RootLayout from "./layouts/RootLayout"
import Admission from "./pages/Admission"
import Home from "./pages/Home"
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from "react-router-dom"
import Salary from "./pages/Salary"

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="admission" element={<Admission />} />
        <Route path="salary" element={<Salary />} />
      </Route>
    )
  )
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
