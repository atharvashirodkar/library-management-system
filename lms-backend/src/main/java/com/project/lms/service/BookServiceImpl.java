package com.project.lms.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.lms.dto.BookRequestDto;
import com.project.lms.dto.BookResponseDto;
import com.project.lms.dto.BookUpdateResponseDto;
import com.project.lms.entity.Book;
import com.project.lms.repository.BookRepository;

@Service
public class BookServiceImpl implements BookService {

	@Autowired
	private BookRepository repository;

	@Override
	public BookResponseDto createBook(BookRequestDto dto) {
		Book book = new Book();
		book.setTitle(dto.getTitle());
		book.setAuthor(dto.getAuthor());
		book.setDescription(dto.getDescription());
		book.setGenre(dto.getGenre());
		book.setIsbn(dto.getIsbn());
		book.setPrice(dto.getPrice());

		Book saved = repository.save(book);
		return mapToResponseDto(saved);
	}

	@Override
	public BookUpdateResponseDto updateBook(Long id, BookRequestDto dto) {
		Book book = repository.findById(id).orElseThrow(() -> new RuntimeException("Book not found"));

		book.setUrlToImage(dto.getUrlToImage());
		book.setTitle(dto.getTitle());
		book.setAuthor(dto.getAuthor());
		book.setDescription(dto.getDescription());
		book.setGenre(dto.getGenre());
		book.setPrice(dto.getPrice());

		Book updated = repository.save(book);
		return mapToUpdateResponseDto(updated);
	}

	@Override
	public BookUpdateResponseDto viewBookById(Long id) {
		Book book = repository.findById(id).orElseThrow(() -> new RuntimeException("Book not found"));
		return mapToUpdateResponseDto(book);
	}

	@Override
	public List<BookResponseDto> viewAllBooks() {
		List<Book> book = repository.findAll();
		List<BookResponseDto> responseList = new ArrayList<>();

		for (Book b : book) {
			BookResponseDto dto = mapToResponseDto(b);
			responseList.add(dto);
		}
		return responseList;
	}

	@Override
	public void deleteBook(Long id) {
		repository.deleteById(id);
	}

	private BookResponseDto mapToResponseDto(Book e) {
		return new BookResponseDto(e.getId(), e.getTitle(), e.getAuthor(), e.getDescription(), e.getGenre(),
				e.getPrice());
	}
	private BookUpdateResponseDto mapToUpdateResponseDto(Book e) {
		return new BookUpdateResponseDto(e.getId(), e.getUrlToImage(), e.getTitle(), e.getAuthor(), e.getDescription(), e.getGenre(),
				e.getPrice());
	}

	@Override
	public List<BookResponseDto> searchBooks(String query, String filter) {
		List<Book> books;

		if ("author".equalsIgnoreCase(filter)) {
			books = repository.findByAuthorContainingIgnoreCase(query);
		} else if ("genre".equalsIgnoreCase(filter)) {
			books = repository.findByGenreContainingIgnoreCase(query);
		} else {
			// default search by title
			books = repository.findByTitleContainingIgnoreCase(query);
		}

		List<BookResponseDto> responseList = new ArrayList<>();
		for (Book b : books) {
			BookResponseDto dto = mapToResponseDto(b);
			responseList.add(dto);
		}

		return responseList;
	}
}
