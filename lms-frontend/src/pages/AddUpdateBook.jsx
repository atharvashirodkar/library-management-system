import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { addBook, getBookById, updateBook } from "../services/BookService";

const AddUpdateBook = () => {

    const { id } = useParams();

    const [isbn, setIsbn] = useState("");
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [description, setDescription] = useState("");
    const [genre, setGenre] = useState("");
    const [price, setPrice] = useState("");
    const [urlToImage, setUrlToImage] = useState("");

    const navigator = useNavigate();

    useEffect(() => {
        if (id) {
            getBookById(id).then((response) => {
                const book = response.data;
                setUrlToImage(book.urlToImage)
                setTitle(book.title);
                setAuthor(book.author);
                setDescription(book.description);
                setGenre(book.genre);
                setPrice(book.price);
                console.log(book);
            }).catch((error) => {
                console.error("Error fetching book details:", error);
            });
        }
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const book = { isbn, urlToImage, title, author, description, genre, price };
        if (id) {
            updateBook(id, book).then(() => {
                navigator("/books");
            });
        } else {
            addBook(book).then(() => {
                navigator("/books");
            });
        }
    }

    return (
        <>
            <div className="container"
                style={{
                    marginTop: "20px",
                    marginBottom: "20px",
                    padding: "20px",
                    borderRadius: "10px",
                    maxWidth: "60%"
                }}
            >
                <div className="card shadow-lg border-0">
                    <div className="card-body p-4">
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center"
                            }}
                        >
                            <button
                                className="btn btn-secondary"
                                onClick={() => navigator(-1)}
                            >
                                Back
                            </button>

                            <h1
                                className="text-center text-primary"
                                style={{
                                    flex: 1,
                                    marginBottom: "20px",
                                    marginTop: "20px"
                                }}>
                                {id ? "Update Book" : "Add New Book"}
                            </h1>
                        </div>
                        <form onSubmit={handleSubmit}>
                            {!id && (<div className="mb-3">
                                <label className="form-label fw-bold">ISBN</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter book ISBN"
                                    value={isbn}
                                    onChange={(e) => setIsbn(e.target.value)}
                                    required
                                />
                            </div>)}
                            <div className="mb-3">
                                <label className="form-label fw-bold">Image Url</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter book Image Url"
                                    value={urlToImage}
                                    onChange={(e) => setUrlToImage(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label fw-bold">Title</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter book title"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label fw-bold">Author</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter author's name"
                                    value={author}
                                    onChange={(e) => setAuthor(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label fw-bold">Description</label>
                                <textarea
                                    maxLength="300"
                                    rows="3"
                                    className="form-control"
                                    placeholder="Enter book description"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    required
                                ></textarea>
                            </div>

                            <div className="mb-3">
                                <label className="form-label fw-bold">Genre</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter book genre"
                                    value={genre}
                                    onChange={(e) => setGenre(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label fw-bold">Price</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Enter book price"
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                    required
                                    step={0.01}
                                    min={0}
                                />
                            </div>

                            <div style={{ display: 'flex', justifyContent: "center" }}>

                                <button type="submit" className="btn btn-primary btn-lg">
                                    Add Book
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddUpdateBook