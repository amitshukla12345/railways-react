import './App.css';
import Navbar from './Components/RailwaysBookingSystem/Navbar';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Register from './Components/Register/Register';
import Train from './Components/Train.jsx/Train';
import TrainList from './Components/Train.jsx/TrainList';




const routes = createBrowserRouter([
  {
    path: "/", // Default route (e.g., Home or Navbar)
    element: <Navbar />,
  },
  {
    path:"/register",
    element:<Register/>
  },
  {
    path:"/train",
    element:<TrainList/>
  }

 

]);

function App() {
  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
