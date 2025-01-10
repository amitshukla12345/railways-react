import logo from './logo.svg';
import './App.css';
import Navbar from './Components/RailwaysBookingSystem/Navbar';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';



const routes= createBrowserRouter([
  
 {
  path:"/",
  element:<Navbar/>
 }
 
]);

function App() {
  return (
    <div>
<RouterProvider router={routes}/>
      
    </div>
  );
}

export default App;
