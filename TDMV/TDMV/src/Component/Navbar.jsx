import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg px-4 py-3"
        style={{
          background: "rgba(10,10,10,0.95)",
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          position: "sticky",
          top: 0,
          zIndex: 1000,
        }}
      >
        <div className="container-fluid">
          
          {/* Logo */}
          <a
            className="navbar-brand fw-bold fs-3 d-flex align-items-center gap-2"
            href="#"
            style={{
              color: "#fff",
              letterSpacing: "1px",
            }}
          >
            <span style={{ fontSize: "2rem" }}>🎬</span>

            <span
              style={{
                background: "linear-gradient(90deg,#ff4d4d,#ffcc00)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              MovieHub
            </span>
          </a>

          {/* Toggle Button */}
          <button
            className="navbar-toggler bg-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar Content */}
          <div className="collapse navbar-collapse" id="navbarNav">

            {/* Nav Links */}
            <ul className="navbar-nav mx-auto gap-lg-3 text-center">
              {["Home", "Movies", "Series", "Trending", "New Releases"].map(
                (item, index) => (
                  <li className="nav-item" key={index}>
                    <a
                      className={`nav-link ${
                        item === "Home" ? "active" : ""
                      }`}
                      href="#"
                      style={{
                        color: "#ddd",
                        fontWeight: "500",
                        transition: "0.3s",
                      }}
                      onMouseEnter={(e) =>
                        (e.target.style.color = "#ff4d4d")
                      }
                      onMouseLeave={(e) =>
                        (e.target.style.color = "#ddd")
                      }
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>

            {/* Right Side */}
            <div className="d-flex align-items-center gap-3 mt-3 mt-lg-0 flex-wrap">


      

              {/* Login Button */}
              <Link to="/login" className="btn btn-outline-light rounded-pill px-4">
                Login
              </Link>

              {/* Register Button */}
               
            <Link to="/register" className="btn btn-outline-light rounded-pill px-4">
                Register
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}