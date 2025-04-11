import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="logo">My Dashboard</div>
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Careers</a></li>
        </ul>
      </header>

      <main className="content">
        <h1>Welcome to the Dashboard</h1>
        <p>This is your main content area.</p>
      </main>

      <footer className="footer">
        &copy; {new Date().getFullYear()} Abinesh. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
