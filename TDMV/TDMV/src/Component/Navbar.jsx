import React from 'react'

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg custom-nav px-4">
        <div className="container-fluid">
          
          {/* Logo */}
          <a className="navbar-brand logo" href="#">
            🎬 MovieHub
          </a>

          {/* Toggle button (mobile) */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Menu */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Movies</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Series</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Trending</a>
              </li>
            </ul>

            {/* Search */}
            <form className="d-flex ms-3">
              <input className="form-control me-2" type="search" placeholder="Search movies..." />
              <button className="btn btn-danger">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </>
  )
}