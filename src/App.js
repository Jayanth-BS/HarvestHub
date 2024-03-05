import React from 'react';
import './App.css'; // Import your CSS file for styling
import TypingAnimation from './TypingAnimation';
function App() {
  return (
    <div className="App">

<nav className="navbar">
        <a href="#hero" className="nav-link">Home</a>
        <a href="#about" className="nav-link">About Us</a>
        <a href="#benefits" className="nav-link">Benefits</a>
        <a href="#how-it-works" className="nav-link">How It Works</a>
        <a href="#testimonials" className="nav-link">Testimonials</a>
        <a href="#contact" className="nav-link">Contact Us</a>
      </nav>  
      {/* Hero Section */}
      <section id="hero" className="hero">
        <div className=""></div>
        <div className="hero-content">
          <h1 className="shivam"><TypingAnimation text="Welcome to Our Agricultural Trading Platform" delay={100} loop={true} speed={120} className="shivam" />
        </h1>
          <p>Connecting farmers and buyers for sustainable agriculture</p>
          <div className="hero-buttons">
            <button className="login-btn">Login</button>
            <button className="signup-btn">SignUp</button>
          </div>
        </div> 
      </section>
      
          {/* About Us Section */}
      <section id="about" className="about">
        <h2>About Us</h2>
        <p>We are dedicated to revolutionizing the agricultural industry by providing a platform where farmers can directly sell their produce to buyers.</p>
      </section>

      {/* Benefits Section */}
      <section className="benefits">
        <h2>Benefits</h2>
        <div className="benefit">
          <img src="/iconn1.png" alt="Icon 1" />
          <p>Direct from Farm: Buy fresh produce directly from local farmers.</p>
        </div>
        <div className="benefit">
          <img src="/icon2.png" alt="Icon 2" />
          <p>Wide Variety: Explore a diverse range of agricultural products.</p>
        </div>
        <div className="benefit">
          <img src="/icon3.png" alt="Icon 3" />
          <p>Secure Transactions: Safe and reliable payment processing.</p>
        </div>
      </section>



      {/* How it Works Section */}
      <section id="how-it-works" className="how-it-works">
        <h2>How It Works</h2>
        <div className="steps">
          <div className="step">
            <img src="./images/step1.jpg" alt="Step 1" />
            <p>Step 1: Farmers list their products on our platform.</p>
          </div>
          <div className="step">
            <img src="./images/step2.jpeg" alt="Step 2" />
            <p>Step 2: Buyers browse products and make purchases.</p>
          </div>
          <div className="step">
            <img src="./images/step3.png" alt="Step 3" />
            <p>Step 3: Secure transactions and delivery.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="testimonials">
        <h2>Testimonials</h2>
        <div className="testimonial">
          <p>"The platform helped me sell my farm produce directly to customers, increasing my profits."</p>
          <cite>- John Doe</cite>
        </div>
        <div className="testimonial">
          <p>"I love the convenience of buying fresh vegetables from local farmers. Great initiative!"</p>
          <cite>- Jane Smith</cite>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <h2>Contact Us</h2>
        <p>Have questions or feedback? Reach out to us!</p>
        <form>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>

      {/* Footer */}
      <footer>
        <p>&copy; 2024 Agricultural Trading System. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;