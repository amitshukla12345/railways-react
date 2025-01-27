import './App.css';
import Navbar from './Components/RailwaysBookingSystem/Navbar';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Register from './Components/Register/Register';
import AddTrain from './Components/AddTrain/AddTrain';
import TrainList from './Components/Train/TrainList';
import TrainAdmin from './Components/TrainAdmin/TrainAdmin';


const routes = createBrowserRouter([
  {
    path: "/", // Default route (e.g., Home or Navbar)
    element: <Navbar />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/train",
    element: <TrainList />,
  },
  {
    path: "/addtrain",
    element: <TrainAdmin/>, 
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
