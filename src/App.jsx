import { RouterProvider } from "react-router-dom";
import router from "./routes/Router";
import './style.css'


const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App;

