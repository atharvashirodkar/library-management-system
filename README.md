# Library Management System

[![React](https://img.shields.io/badge/React-19.1.0-blue.svg)](https://reactjs.org/)
[![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.5.3-brightgreen.svg)](https://spring.io/projects/spring-boot)
[![Java](https://img.shields.io/badge/Java-17-orange.svg)](https://www.oracle.com/java/)
[![Vite](https://img.shields.io/badge/Vite-7.0.4-purple.svg)](https://vitejs.dev/)

A modern, full-stack Library Management System built with Spring Boot and React. This application provides a robust platform for managing library resources, including books, with a user-friendly interface and reliable backend services.

## Features

- 📚 Comprehensive book management (add, update, delete, list)
- 🎯 Intuitive and responsive user interface
- 🔍 Advanced search and filtering capabilities
- 🚀 RESTful API architecture
- 💾 MySQL database integration
- 🛠️ Modern tech stack (Spring Boot 3.5, React 19, Vite 7)

## Technology Stack

### Backend
- Java 17
- Spring Boot 3.5.3
- Spring Data JPA
- MySQL Database
- Lombok for boilerplate reduction
- Maven for dependency management

### Frontend
- React 19.1.0
- Vite 7.0.4
- Bootstrap 5.3.7
- Axios for API communication
- React Router v7
- ESLint for code quality

## Prerequisites

Before you begin, ensure you have met the following requirements:
- Java Development Kit (JDK) 17 or later
- Node.js 18.x or later
- MySQL 8.x
- Maven 3.6+

## Getting Started

### Backend Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/atharvashirodkar/library-management-system.git
   cd library-management-system/lms-backend
   ```

2. Configure MySQL database:
   - Create a database named 'library_db'
   - Update `src/main/resources/application.properties` with your MySQL credentials

3. Build and run the backend:
   ```bash
   ./mvnw clean install
   ./mvnw spring:run
   ```
   The backend server will start on http://localhost:8080

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd ../lms-frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```
   The frontend application will be available at http://localhost:5173

## API Documentation

The backend provides the following RESTful endpoints:

- `GET /api/books` - Retrieve all books
- `GET /api/books/{id}` - Get a specific book
- `POST /api/books` - Add a new book
- `PUT /api/books/{id}` - Update an existing book
- `DELETE /api/books/{id}` - Delete a book

## Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Support

If you need help or have questions:
- Open an issue in the GitHub repository
- Check the documentation in the `docs` folder
- Contact the maintainers

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Maintainers

- [@atharvashirodkar](https://github.com/atharvashirodkar) - Project Lead

## Acknowledgments

- Spring Boot team for the excellent framework
- React team for the powerful frontend library
- All contributors who help improve this project