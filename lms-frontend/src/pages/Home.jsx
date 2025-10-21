import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    return (
        <div
            className="container py-5 d-flex flex-column align-items-center justify-content-center text-center"
            style={{ minHeight: "80vh" }}
        >
            <div className="mb-5">
                <h1 className="fw-bold display-4 text-primary">
                    📚 Library Management System
                </h1>
                <p
                    className="text-muted fs-5 mt-3"
                    style={{ maxWidth: "700px", margin: "0 auto" }}
                >
                    Manage your entire book collection effortlessly. Add new titles,
                    update existing ones, and keep track of every story in your library —
                    all in one place.
                </p>
            </div>

            <div className="row g-4 mb-5" style={{ maxWidth: "950px" }}>
                <div className="col-md-4">
                    <div className="p-4 border rounded shadow-sm h-100 bg-light hover-shadow transition">
                        <h5 className="fw-semibold">📖 Add & Organize</h5>
                        <p className="text-muted small mb-0">
                            Add new books with details like title, author, genre, price, and
                            ISBN.
                        </p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="p-4 border rounded shadow-sm h-100 bg-light hover-shadow transition">
                        <h5 className="fw-semibold">✏️ Update Records</h5>
                        <p className="text-muted small mb-0">
                            Edit and update book details anytime to keep your library
                            up-to-date.
                        </p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="p-4 border rounded shadow-sm h-100 bg-light hover-shadow transition">
                        <h5 className="fw-semibold">🔍 Search & Browse</h5>
                        <p className="text-muted small mb-0">
                            Find books quickly with search and filter options for a smooth
                            reading experience.
                        </p>
                    </div>
                </div>
            </div>

            <button
                className="btn btn-lg btn-primary px-4 shadow"
                onClick={() => navigate("/books")}
            >
                📚 View Book List
            </button>
        </div>
    );
};

export default Home;
