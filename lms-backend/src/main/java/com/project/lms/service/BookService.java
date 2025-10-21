package com.project.lms.service;

import java.util.List;

import com.project.lms.dto.BookRequestDto;
import com.project.lms.dto.BookResponseDto;
import com.project.lms.dto.BookUpdateResponseDto;

public interface BookService {
	BookResponseDto createBook(BookRequestDto dto);
	BookUpdateResponseDto updateBook(Long id, BookRequestDto dto);
	BookUpdateResponseDto viewBookById(Long id);
	List<BookResponseDto> viewAllBooks();
	void deleteBook(Long id);
	List<BookResponseDto> searchBooks(String query, String filter);
}
