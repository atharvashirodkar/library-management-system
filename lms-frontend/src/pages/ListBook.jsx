import { useEffect, useState } from 'react'
import { deleteBook, getAllBooks, searchBooks } from '../services/BookService'
import { useNavigate } from 'react-router-dom';
import BookCard from '../components/BookCard';
const ListBook = () => {

    const [books, setBooks] = useState([])
    const [query, setQuery] = useState("");
    const [filter, setFilter] = useState("title");

    const getPlaceholder = () => {
        switch (filter) {
            case "author":
                return "Search books by author";
            case "genre":
                return "Search books by genre";
            default:
                return "Search books by title";
        }
    };

    const navigator = useNavigate();

    useEffect(() => {
        if (query) {
            searchBooks(query, filter)
                .then((res) => {
                    setBooks(res.data);
                })
                .catch((error) => {
                    console.error("Error searching books:", error);
                });
            return;
        }
        else {
            getAllBooks()
                .then((res) => {
                    setBooks(res.data)
                })
                .catch((error) => {
                    console.error("Error fetching books:", error);
                })

        }
    }, [query, filter]);

    const handleAddBook = () => {
        navigator('/add-book');
    }

    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this book?")) {
            deleteBook(id)
                .then(() => {
                    setBooks(books.filter(book => book.id !== id));
                    console.log(`Book deleted successfully with ID: ${id}`);
                })
                .catch(error => {
                    console.error("There was an error deleting the book!", error);
                });
        }
    }
    const handleOnSearch = (e) => {
        e.preventDefault();
        setQuery(e.target.value);
        setBooks([]);
    }

    const onFilter = (e) => {
        setFilter(e.target.value);
    }
    return (
        <>
            <div
                style={{
                    minHeight: "100vh",
                    padding: "20px",
                    backgroundColor: "#f8f9fa"
                }}
            >
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: "20px"
                    }}
                >
                    <button
                        className="btn btn-secondary"
                        onClick={() => navigator(-1)}
                    // onClick={() => navigator('/')}
                    >
                        Back
                    </button>
                    <h1 style={{
                        textAlign: "center",
                        flexGrow: 1
                    }}>Library Book List</h1>
                    <button className="btn btn-primary ms-3" onClick={handleAddBook}>
                        Add Book
                    </button>
                </div>

                <div
                    className="table-responsive"
                >
                    <div
                        style={{
                            display: "flex",
                            gap: "10px",
                            margin: "20px 0",
                        }}
                    >
                        <select
                            value={filter}
                            onChange={onFilter}
                            style={{
                                padding: "10px",
                                borderRadius: "6px",
                                border: "1px solid #ced4da",
                                backgroundColor: "#fff",
                                cursor: "pointer",
                                minWidth: "140px",
                            }}
                        >
                            <option value="title">Filter by Title</option>
                            <option value="author">Filter by Author</option>
                            <option value="genre">Filter by Genre</option>
                        </select>

                        <input
                            type="text"
                            value={query}
                            onChange={handleOnSearch}
                            placeholder={getPlaceholder()}
                            style={{
                                flex: 1,
                                padding: "10px",
                                borderRadius: "6px",
                                border: "1px solid #ced4da",
                            }}
                        />
                        <button
                            disabled
                        >
                            Search
                        </button>
                    </div>

                    <div className="books-container" style={{ padding: "20px" }}>
                        {books.length > 0 ? (
                            <div
                                className="books-grid"
                                style={{
                                    display: "grid",
                                    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                                    gap: "20px",
                                }}
                            >
                                {books.map((book) => (
                                    <BookCard
                                        key={book.id}
                                        book={book}
                                        onDelete={handleDelete}
                                    />
                                ))}
                            </div>
                        ) : (
                            <h2 style={{ textAlign: "center", marginTop: "50px", color: "#6c757d" }}>
                                No Books Found. Please Add a Book.
                            </h2>
                        )}
                    </div>

                </div>
            </div>

        </>
    )
}

export default ListBook