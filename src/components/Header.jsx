import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";

const Header = () => {
  const user = useContext(UserContext); // Access the user from context

  const handleSignOut = async () => {
    try {
      await signOut(auth); // Sign the user out
      alert("Successfully signed out");
    } catch (err) {
      console.error("Sign-out error:", err);
      alert("Failed to sign out: " + err.message);
    }
  };

  return (
    <header className="header">
      <nav>
        <div className="logo">
          <img src="/logo.png" alt="Logo" />
        </div>
        <ul>
          <li><a href="#investments">Explore Investments</a></li>
          <li><a href="#start-investing">Start Investing</a></li>
          <li><a href="#pre-ipo-deals">Pre-IPO Deals</a></li>
          <li><a href="#learn">Learn</a></li>
          <li><a href="#earn-bonus-shares">Earn Bonus Shares</a></li>
          <li><a href="#for-founders">For Founders</a></li>
          {user ? (
            // If user is logged in, display their name or email
            <>
              <li>
                <span>Welcome, {user.displayName || user.email}</span>
              </li>
              <li>
                <button onClick={handleSignOut}>Sign Out</button>
              </li>
            </>
          ) : (
            // If no user is logged in, show separate signup and login buttons
            <>
              <li>
                <Link to="/signup">
                  <button>Sign Up</button>
                </Link>
              </li>
              <li>
                <Link to="/login">
                  <button>Log In</button>
                </Link>
              </li>
            </>
          )}
        </ul>
        <div className="search-bar">
          <input type="text" placeholder="Search" />
          <button>
            <i className="fas fa-search"></i>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
