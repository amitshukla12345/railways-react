import './App.css';
import Navbar from './Components/RailwaysBookingSystem/Navbar';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Register from './Components/Register/Register';
import AddTrain from './Components/AddTrain/AddTrain';
import TrainList from './Components/Train/TrainList';
import TrainAdmin from './Components/TrainAdmin/TrainAdmin';
import Login from './Components/Login/Login';
import Footer from './Components/RailwaysBookingSystem/Footer';
import BhartiyRail from './Components/RailwaysBookingSystem/BhartiyRail';
import Category from './Components/Category/Category';
import Passenger from './Components/Passenger/Passenger';
import RailwayItemAdmin from './Components/RailwayAdmin/RailwayItemAdmin';
import RailwayListAdmin from './Components/RailwayAdmin/RailwayListAdmin';
import RailwayFormAdmin from './Components/RailwayAdmin/RailwayFormAdmin';
import User from './Components/User/User';
import { getTrain } from './Components/Train/TrainService';
import GetTrain from './Components/GetTrain/GetTrain';
import Booking from './Components/Booking/Booking';



// Layout Component with Footer at the Bottom
const Layout = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <header>
        <Navbar /> {/* Navbar at the top */}
      </header>
      <main style={{ flex: 1 }}>
        <Outlet /> {/* This renders the child routes */}
      </main>
      <footer>
        <Footer /> {/* Footer at the bottom */}
      </footer>
    </div>
  );
};

// Define Routes
const routes = createBrowserRouter([
  {
    path: "/", // Wrap all routes with Layout
    element: <Layout />,
    children: [
      {
        path: "/", // Default route
        element: <BhartiyRail />, // Render Home Page Component
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
        element: <TrainAdmin />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path:"/category",
        element:<Category/>
      },
      {
        path:"/passenger",
        element:<Passenger/>
      },
      {
        path:"/railway-admin",
        element:<><RailwayListAdmin/></>
      },

      {
        path:"/user",
        element:<User/>
      },
      {
        path:"/gettrain",
        element:<GetTrain/>
      },

      {
        path:"/booking",
        element:<Booking/>
      }

     
      
    ],
  },
]);

// App Component
function App() {
  return (
    <RouterProvider router={routes} />
  );
}

export default App;
