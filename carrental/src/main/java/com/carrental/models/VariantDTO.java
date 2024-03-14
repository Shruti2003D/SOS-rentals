package com.carrental.models;

import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.media.Schema;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import com.carrental.entities.Company;

import javax.validation.constraints.NotEmpty;

public class VariantDTO {
	@NotEmpty
	private String title;
	private int price;
	private int company;
	private MultipartFile photo;
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public int getPrice() {
		return price;
	}
	public void setPrice(int price) {
		this.price = price;
	}

	public int getCompany() {
		return company;
	}

	public void setCompany(int company) {
		this.company = company;
	}

	public MultipartFile getPhoto() {
		return photo;
	}
	public void setPhoto(MultipartFile photo) {
		this.photo = photo;
	}
	@Override
	public String toString() {
		return "VariantDTO [title=" + title + ", price=" + price + ", company_id=" + company + ", photo=" + photo
				+ "]";
	}

}
