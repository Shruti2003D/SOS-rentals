package com.carrental.controllers;

import java.security.SecureRandom;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.carrental.entities.Customer;
import com.carrental.models.ForgotPasswordDTO;
import com.carrental.models.LoginDTO;
import com.carrental.models.Response;
import com.carrental.services.CustomerService;
import com.carrental.services.EmailService;

@CrossOrigin
@RestController
@RequestMapping("/api/customers")
public class CustomerController {

	@Autowired CustomerService customerService;
	@Autowired EmailService email;
	
	@PostMapping
	public ResponseEntity<?> save(@RequestBody Customer cust) {
		if(customerService.verifyUserId(cust.getUserid())) {
			return ResponseEntity.badRequest().body("Email already registered");
		}
		customerService.registerCustomer(cust);
		return ResponseEntity.ok("Customer registered successfully");
	}
	
	@GetMapping
	public ResponseEntity<?> findAllCustomers() {
		List<Customer> result = customerService.allCustomers();
		return ResponseEntity.ok(result);
	}
	
	@PostMapping("/forgot")
	public ResponseEntity<?> resetPassword(@RequestBody ForgotPasswordDTO dto){
		Customer customer=customerService.findByUserId(dto.getEmail());
		if(customer!=null) {			
		    String generatedString = generateRandomPassword(7);
			email.sendSimpleMessage(dto.getEmail(), "Password resetted", 
					"Dear "+customer.getUname()+",<br>Your password has been changed."+
							"<br>Your new password is "+generatedString);
			customer.setPwd(generatedString);
			customerService.updateProfile(customer);
			return Response.success("New password sent to your registered email id");
		}
		return Response.error("Incorrect email provided");
	}
	
	@PostMapping("/validate")
	public ResponseEntity<?> validateUser(@RequestBody LoginDTO dto) {
		System.out.println(dto);
		Customer user=customerService.validate(dto.getUserid(),dto.getPwd());
		if(user!=null)
			return ResponseEntity.ok(user);
		else
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
	}
	
	@PostMapping("/update")
	public ResponseEntity<?> updateProfile(@RequestBody Customer cust) {
		customerService.updateProfile(cust);
		return ResponseEntity.status(HttpStatus.OK).build();
	}
	
	private String generateRandomPassword(int len)
    {
        // ASCII range – alphanumeric (0-9, a-z, A-Z)
        final String chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
 
        SecureRandom random = new SecureRandom();
        StringBuilder sb = new StringBuilder();
 
        // each iteration of the loop randomly chooses a character from the given
        // ASCII range and appends it to the `StringBuilder` instance
 
        for (int i = 0; i < len; i++)
        {
            int randomIndex = random.nextInt(chars.length());
            sb.append(chars.charAt(randomIndex));
        }
 
        return sb.toString();
    }
}
