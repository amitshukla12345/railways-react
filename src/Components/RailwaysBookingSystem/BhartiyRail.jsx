import React from 'react'
import { Link } from 'react-router-dom';


function BhartiyRail() {
  return (
    
        // Hero Section -->
<div class="hero">  
      
    <h1>Welcome to भारतीय रेल</h1>
    <p>Book your train tickets with ease and travel across the country.</p>
    <Link to="/register">
        <button class="hero-btn">Login to Book Tickets</button>
    </Link>
    </div>
  )
}

export default BhartiyRail