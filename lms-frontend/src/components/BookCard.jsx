import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getBookById } from "../services/BookService";

const BookCard = ({ book, onDelete }) => {
    const [urlToImage, setUrlToImage] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        getBookById(book.id).then((res) => {
            setUrlToImage(res.data.urlToImage);
        }).catch(err => console.error("Error fetching image:", err));
    }, [book.id]);
    return (
        <div
            style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                gap: "20px",
            }}
        >

            <div
                key={book.id}
                className="card shadow-sm"
                style={{
                    borderRadius: "10px",
                    overflow: "hidden",
                    backgroundColor: "#fff",
                }}
            >
                {urlToImage ?
                    (
                        <img
                            src={urlToImage}
                            alt={book.title}
                            style={{
                                width: "100%",
                                height: "200px",
                                objectFit: "cover",
                            }}
                        />
                    ) : (
                        <div
                            style={{
                                width: "100%",
                                height: "200px",
                                backgroundColor: "#e9ecef",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                fontSize: "14px",
                                color: "#6c757d",
                            }}
                        >
                            No Image Available
                        </div>
                    )
                }

                <div className="card-body">
                    <h5 className="card-title">{book.title}</h5>
                    <p className="card-text">
                        <strong>Author:</strong> {book.author}
                    </p>
                    <p className="card-text">
                        <strong>Genre:</strong> {book.genre}
                    </p>

                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            marginTop: "15px",
                        }}
                    >
                        <button
                            className="btn btn-warning btn-sm"
                            onClick={() => navigate(`/book/${book.id}`)}
                        >
                            Edit
                        </button>
                        <button
                            className="btn btn-danger btn-sm"
                            onClick={() => onDelete(book.id)}
                        >
                            Delete
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default BookCard;
