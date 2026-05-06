import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [data, setData] = useState([]);
  let api = axios.create({
    baseURL:"https://turbo-space-pancake-wr4r5px97w7pc5qwg-3000.app.github.dev"
  })

  // FETCH MOVIES
  useEffect(() => {
    api.get("/popular")
      .then((res) => {
        console.log("dataaaa",res);

        // Ensure results exists
        setData(res.data || []);
      })
      // .catch((err) => {
      //   console.error("API Error:", err);
      // });
  }, []);

  return (
    <>
      <div
        id="movieCarousel"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {data.length > 0 ? (
            data.map((item, index) => (
              <div
                className={`carousel-item ${
                  index === 0 ? "active" : ""
                }`}
                key={item.id}
              >
                {/* IMAGE */}
                <img
                  src={
                    item.backdrop_path
                      ? `https://image.tmdb.org/t/p/original${item.backdrop_path}`
                      : "https://via.placeholder.com/1200x500"
                  }
                  className="d-block w-100 carousel-img"
                  alt={item.title}
                />

                {/* CONTENT */}
                <div className="carousel-caption d-flex flex-column justify-content-center h-100 text-start">
                  <h1 className="display-2 fw-bold">
                    {item.title}
                  </h1>

                  <p className="lead w-50">
                    {item.overview}
                  </p>

                  <div className="mt-3">
                    <button className="btn btn-danger btn-lg me-3">
                      ▶ Watch Now
                    </button>

                    <button className="btn btn-light btn-lg">
                      More Info
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center text-white p-5">
              Loading movies...
            </div>
          )}
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#movieCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#movieCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>

    </>

  )
}