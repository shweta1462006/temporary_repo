import React from "react";

export default function WhistedCard() {
  return (
    <div className="card bg-dark text-light border-0 shadow-lg rounded-4 overflow-hidden h-100">
      
      {/* Poster */}
      <div className="position-relative">
        <img
          src="https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg"
          className="card-img-top"
          alt="movie"
          style={{ height: "350px", objectFit: "cover" }}
        />

        {/* Wishlist Remove */}
        <button className="btn btn-danger position-absolute top-0 end-0 m-3 rounded-circle">
          ❤️
        </button>
      </div>

      {/* Content */}
      <div className="card-body">
        
        {/* Title + Rating */}
        <div className="d-flex justify-content-between align-items-center">
          <h5 className="card-title fw-bold mb-0">
            Avengers Endgame
          </h5>

          <span className="badge bg-warning text-dark">
            ⭐ 8.9
          </span>
        </div>

        {/* Genre */}
        <p className="text-secondary mt-2 mb-3">
          Action • Sci-Fi • 2019
        </p>

        {/* Buttons */}
        <div className="d-flex gap-2">
          <button className="btn btn-danger w-100">
            ▶ Watch
          </button>

          <button className="btn btn-outline-light w-100">
            Details
          </button>
        </div>
      </div>
    </div>
  );
}