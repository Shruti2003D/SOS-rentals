package com.carrental.controllers;

import com.carrental.models.DashboardDTO;
import com.carrental.services.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.carrental.entities.Admin;
import com.carrental.models.LoginDTO;
import com.carrental.models.Response;

@CrossOrigin
@RestController
@RequestMapping("/api/admin")
public class AdminController {

	@Autowired private AdminService adminService;
	@Autowired private CustomerService custService;
	@Autowired private CompanyService cmpService;
	@Autowired private VariantService varService;
	@Autowired private BookingService bookService;
	@Autowired private CarService carService;

	@PostMapping("/validate")
	public ResponseEntity<?> validateUser(@RequestBody LoginDTO dto) {
		System.out.println(dto);
		Admin admin=adminService.validate(dto.getUserid(),dto.getPwd());
		if(admin!=null)
			return ResponseEntity.ok(admin);
		else
			return Response.status(HttpStatus.NOT_FOUND);
	}
	@PostMapping
	public ResponseEntity<?> updateProfile(@RequestBody Admin admin) {
		adminService.updateAdmin(admin);
		return ResponseEntity.status(HttpStatus.OK).build();
	}

	@GetMapping("dashboard")
	public ResponseEntity<?> dashboard(){
		DashboardDTO dto=new DashboardDTO();
		dto.setBookings(bookService.Count());
		dto.setUsers(custService.Count());
		dto.setCars(carService.Count());
		dto.setVariants(varService.Count());
		dto.setCompanies(cmpService.Count());
		return ResponseEntity.ok(dto);
	}
	
}
