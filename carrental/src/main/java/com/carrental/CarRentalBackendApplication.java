package com.carrental;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Info;
import org.modelmapper.ModelMapper;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

import com.carrental.utils.FileUploadProperties;

@SpringBootApplication 
@EnableJpaAuditing
@EnableConfigurationProperties({
    FileUploadProperties.class
})
@OpenAPIDefinition(info = @Info(title = "Car Rental API",description = "Car Rental API List ",version = "1.0"))
public class CarRentalBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(CarRentalBackendApplication.class, args);
	}

	@Bean
	public ModelMapper ModelMapperConfig(){
		return new ModelMapper();
	}
}
