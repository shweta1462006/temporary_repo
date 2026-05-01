import React from 'react'

export default function Home() {
  return (
    <>
      {/* HERO */}
      <div className="bg-dark text-white text-center d-flex align-items-center hero-section">
        <div className="container">
          <h1 className="display-3 fw-bold">🎬 MovieHub</h1>
          <p className="lead">Stream latest movies anytime, anywhere</p>
          <button className="btn btn-danger btn-lg">Watch Now</button>
        </div>
      </div>

      {/* TRENDING */}
      <div className="container my-5">
        <h2 className="text-white mb-4">🔥 Trending Movies</h2>

        <div className="row g-4">
          
          {/* CARD 1 */}
          <div className="col-md-3">
            <div className="card bg-dark text-white border-0 shadow movie-hover">
              <img src="https://via.placeholder.com/300x400" className="card-img-top" alt="" />
              <div className="card-body text-center">
                <h5 className="card-title">Avengers</h5>
              </div>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="col-md-3">
            <div className="card bg-dark text-white border-0 shadow movie-hover">
              <img src="https://via.placeholder.com/300x400" className="card-img-top" alt="" />
              <div className="card-body text-center">
                <h5 className="card-title">Batman</h5>
              </div>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="col-md-3">
            <div className="card bg-dark text-white border-0 shadow movie-hover">
              <img src="https://via.placeholder.com/300x400" className="card-img-top" alt="" />
              <div className="card-body text-center">
                <h5 className="card-title">KGF</h5>
              </div>
            </div>
          </div>

          {/* CARD 4 */}
          <div className="col-md-3">
            <div className="card bg-dark text-white border-0 shadow movie-hover">
              <img src="https://via.placeholder.com/300x400" className="card-img-top" alt="" />
              <div className="card-body text-center">
                <h5 className="card-title">Jawan</h5>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}