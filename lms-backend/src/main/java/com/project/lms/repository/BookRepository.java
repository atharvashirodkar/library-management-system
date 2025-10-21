package com.project.lms.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.lms.entity.Book;

public interface BookRepository extends JpaRepository<Book, Long> {

	List<Book> findByTitleContainingIgnoreCase(String keyword);
	List<Book> findByAuthorContainingIgnoreCase(String keyword);
	List<Book> findByGenreContainingIgnoreCase(String keyword);

}
