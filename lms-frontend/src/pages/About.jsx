import React from 'react'

const About = () => {
    return (
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-12 col-md-10 col-lg-8 text-center">
                    
                    {/* Header */}
                    <div className="mb-4">
                        <h1 className="fw-bold text-primary mb-3">
                            About LMS
                        </h1>
                        <div className="mx-auto bg-primary" style={{ 
                            width: "60px", 
                            height: "3px", 
                            borderRadius: "2px" 
                        }}></div>
                    </div>

                    {/* Content - Fixed max-width */}
                    <div className="card border-0 shadow-sm p-3 p-md-4 mb-4 mx-auto" style={{ maxWidth: "800px" }}>
                        <p className="text-muted fs-6 lh-lg mb-0" style={{textAlign: "justify"}}>
                            The <strong className="text-primary">Library Management System (LMS)</strong> is a comprehensive solution designed to streamline the management of book collections. It allows users to easily add, update, and organize books, ensuring that all information is accurate and up-to-date. With features like search and filter options, users can quickly find the books they need, making it an essential tool for libraries and book enthusiasts alike.
                        </p>
                    </div>

                    {/* Features - Better wrapping */}
                    <div className="d-flex flex-wrap justify-content-center gap-2 gap-md-3">
                        <span className="badge bg-light text-dark border px-3 py-2 fs-6">
                            Book Management
                        </span>
                        <span className="badge bg-light text-dark border px-3 py-2 fs-6">
                            Search & Filter
                        </span>
                        <span className="badge bg-light text-dark border px-3 py-2 fs-6">
                            Easy Updates
                        </span>
                        <span className="badge bg-light text-dark border px-3 py-2 fs-6">
                            User Friendly
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About