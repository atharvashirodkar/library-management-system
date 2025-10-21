package com.project.lms.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter

@AllArgsConstructor
@NoArgsConstructor
public class BookRequestDto {
	private Long isbn;
	private String urlToImage;
	private String title;
	private String author;
	private String description;
	private String genre;
	private Double price;
}
