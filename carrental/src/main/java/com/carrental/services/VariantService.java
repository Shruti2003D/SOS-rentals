package com.carrental.services;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.stereotype.Service;

import com.carrental.daos.VariantRepository;
import com.carrental.entities.Variant;
import com.carrental.models.VariantDTO;
import com.carrental.utils.StorageService;

@Service
public class VariantService {

	@Autowired private VariantRepository repo;
	@Autowired private CompanyService cservice;
	@Autowired private StorageService storageService;
	@Autowired private ModelMapper mapper;
	
	public void saveVariant(VariantDTO dto) {
		Variant variant=new Variant();
		mapper.map(dto,variant);
		variant.setCompany(cservice.findById(dto.getCompany()));
		String photo=storageService.store(dto.getPhoto());
		variant.setPhoto(photo);		
		repo.save(variant);
	}
	
	public void updateVariant(int id,VariantDTO dto) {
		Variant variant=repo.getById(id);
		variant.setPrice(dto.getPrice());
		variant.setTitle(dto.getTitle());
		variant.setCompany(cservice.findById(dto.getCompany()));
		repo.save(variant);
	}
	
	public List<Variant> listall(){
		return repo.findAll(Sort.by(Direction.ASC, "price"));
	}
	
	public List<Variant> listByCompany(int id){
		return repo.findByCompanyIdOrderByPrice(id);
	}
	
	public void deleteVariant(int id) {
		repo.deleteById(id);
	}
	
	public Variant findById(int id) {
		return repo.findById(id).orElse(null);
	}

	public long Count(){
		return repo.count();
	}
}

