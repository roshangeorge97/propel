import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";

const Header = () => {
  const user = useContext(UserContext);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      alert("Successfully signed out");
    } catch (err) {
      console.error("Sign-out error:", err);
      alert("Failed to sign out: " + err.message);
    }
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <img src="/logo.png" alt="Logo" className="logo-image" />
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search" />
          <button>
            <i className="fas fa-search"></i>
          </button>
        </div>
        <nav>
          <ul className="nav-links">
            <li><a href="#investments">Explore</a></li>
            <li><a href="#start-investing">Invest</a></li>
            <li><a href="#pre-ipo-deals">Pre-IPO</a></li>
            <li><a href="#learn">Learn</a></li>
            <li><a href="#earn-bonus-shares">Bonus</a></li>
            <li><a href="#for-founders">Founders</a></li>
            {user ? (
              <>
                <li className="user-welcome">
                  <span>{user.displayName || user.email}</span>
                </li>
                <li>
                  <button onClick={handleSignOut}>Sign Out</button>
                </li>
              </>
            ) : (
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
        </nav>
      </div>
    </header>
  );
};

export default Header;