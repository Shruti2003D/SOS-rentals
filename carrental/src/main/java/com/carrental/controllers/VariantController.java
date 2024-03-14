package com.carrental.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.carrental.models.VariantDTO;
import com.carrental.services.VariantService;
import org.springframework.web.multipart.MultipartFile;

import javax.mail.Multipart;

@CrossOrigin
@RestController
@RequestMapping("/api/variants")
public class VariantController {

	@Autowired private VariantService vservice;
	
	@PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
	public ResponseEntity<?> save(@ModelAttribute VariantDTO dto) {
		vservice.saveVariant(dto);
		return ResponseEntity.ok("Variant registered successfully");
	}
	
	@PutMapping("{id}")
	public ResponseEntity<?> save(@PathVariable("id") int id,@ModelAttribute VariantDTO dto) {
		vservice.updateVariant(id,dto);
		return ResponseEntity.ok("Variant updated successfully");
	}
	
	@GetMapping
	public ResponseEntity<?> findAll() {		
		return ResponseEntity.ok(vservice.listall());
	}
	
	@GetMapping("company/{id}")
	public ResponseEntity<?> findAll(@PathVariable("id") int id) {		
		return ResponseEntity.ok(vservice.listByCompany(id));
	}
	
	@GetMapping("{id}")
	public ResponseEntity<?> findById(@PathVariable("id") int id) {		
		return ResponseEntity.ok(vservice.findById(id));
	}
	
	@DeleteMapping("{id}")
	public ResponseEntity<?> deleteById(@PathVariable("id") int id) {
		vservice.deleteVariant(id);
		return ResponseEntity.ok("Deleted successfully");
	}
}
