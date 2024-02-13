import React from "react";
import "./Home.css"; // Import the CSS file for styling



function Home() {
  
    return (
      
      <div className="container">   
      <header>
        <h1>Welcome to My Blog</h1>
        <p>A place where thoughts come to life</p>
      </header>
      <section>
        <h2>Recent Posts</h2>
        <div className="post">
          <h3>Post Title</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="post">
          <h3>Another Post Title</h3>
          <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </section>
      <footer>
        <p>&copy; 2024 My Blog. All rights reserved.</p>
      </footer>
      </div>   
    
  );
}


export default Home;
