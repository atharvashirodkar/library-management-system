package com.project.lms.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.project.lms.dto.BookRequestDto;
import com.project.lms.dto.BookResponseDto;
import com.project.lms.dto.BookUpdateResponseDto;
import com.project.lms.service.BookService;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/books")
public class BookController {
	
	@Autowired
	private BookService service;
	
	@PostMapping("/add-book")
	public BookResponseDto create(@RequestBody BookRequestDto dto) {
		return service.createBook(dto);
		
	}
	
	@PutMapping("/{id}")
	public BookUpdateResponseDto update(@PathVariable Long id, @RequestBody BookRequestDto dto) {
		return service.updateBook(id, dto);
		
	}
	
	@GetMapping("/{id}")
	public BookUpdateResponseDto getById(@PathVariable Long id) {
		return service.viewBookById(id);
	}
	
	@GetMapping("")
	public List<BookResponseDto> getAll() {
		return service.viewAllBooks();
	}
	
	@DeleteMapping("/{id}")
	public String delete(@PathVariable Long id) {
		service.deleteBook(id);
		return "Book Record Has Been Deleted!";
	}
	
	@GetMapping("/search")
	public List<BookResponseDto> searchBy(
			@RequestParam("query") String keyword,
			@RequestParam(value = "filter", defaultValue = "title") String filter1
			) {
		return service.searchBooks(keyword, filter1);
	}
	
}
