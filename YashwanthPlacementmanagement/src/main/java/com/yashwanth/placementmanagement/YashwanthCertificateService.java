package com.yashwanth.placementmanagement;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;



@Service
@Transactional
public class YashwanthCertificateService {
	
	
	@Autowired
	private YashwanthCertificateRepository repository;
	
	
	//retrieval
	public List<Yashwanthcertificate> listAll(){
		return repository.findAll();
	}
	
	//retrieval by id
	public Yashwanthcertificate get(Integer id) {
		return repository.findById(id).get();
		
	}
	
	
	//Create

	public void save(Yashwanthcertificate certificate) {
		repository.save(certificate);
	}
	
	
	//Delete
	public void delete(Integer id) {
		repository.deleteById(id);
	}
	
	
	

	
	

}
