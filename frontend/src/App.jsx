import { Button } from "@/components/ui/button"
import Login from "./components/pages/login"
import HeroSection from "./components/pages/students/HeroSection"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import MainLayout from "./Layout/MainLayout"
import Courses from "./components/pages/students/Courses"
import MyLearning from "./components/pages/students/MyLearning"


const appRouter = createBrowserRouter([
  {
  path:"/",
  element:<MainLayout/>,
  children:[
    {
      path:"/",
      element:(
        <>
        <HeroSection/>
        <Courses/>
        </>
      ),
    },
    {
      path:"login",
      element:<Login/>
    },
     {
      path:"my-learning",
      element:<MyLearning/>
    }

  ],
},
]);

function App() {
  return (
    <main>
      <RouterProvider router={appRouter}/>
    </main>
  )
}

export default App
// password = 59AeSbeqBF9jT1ju