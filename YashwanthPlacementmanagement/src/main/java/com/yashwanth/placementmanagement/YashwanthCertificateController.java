package com.yashwanth.placementmanagement;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;





@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class YashwanthCertificateController {
	
	@Autowired
	private YashwanthCertificateService service;
	
	//Retrieval
	@GetMapping("/certificates")
	public List<Yashwanthcertificate> list(){
		return service.listAll();
	}
	
	//Retrieve by id
	@GetMapping("/certificates/{id}")
	public ResponseEntity<Yashwanthcertificate> get(@PathVariable Integer id){
		try {
			Yashwanthcertificate certificate= service.get(id);
			return new ResponseEntity<Yashwanthcertificate>(certificate,HttpStatus.OK);
		} catch (Exception e) {
			
			return new ResponseEntity<Yashwanthcertificate>(HttpStatus.NOT_FOUND);
		}
		
	}
	//Create
	@PostMapping("/certificates")
	public void add(@RequestBody Yashwanthcertificate certificate) {
		service.save(certificate);
		
	}
	//Update
	@PutMapping("/certificates/{id}")
	public ResponseEntity<?> update(@RequestBody Yashwanthcertificate certificate,@PathVariable Integer id){
	 try {
	    Yashwanthcertificate existcertificate=service.get(id);
		 service.save(certificate);
		 return new ResponseEntity<>(HttpStatus.OK);
	} catch (Exception e) {
		// TODO Auto-generated catch block
		return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	}
}
	//Delete
	@DeleteMapping("/certificates/{id}")
	//public void delete(@PathVariable Integer id) {
		//service.delete(id);
	//}
	public ResponseEntity<?> delete(@PathVariable Integer id){
		 try {
			 Yashwanthcertificate existcertificate=service.get(id);
			 service.delete(id);
			 return new ResponseEntity<>(HttpStatus.OK);
		} catch (Exception e) {
			
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	@GetMapping("/certificates/name/{name}")
    public ResponseEntity<List<Yashwanthcertificate>> findByName(@PathVariable String name) {
        try {
            List<Yashwanthcertificate> certificates = service.findByName(name);
            if (certificates.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND); // No certificates found
            }
            return new ResponseEntity<>(certificates, HttpStatus.OK); // Return found certificates
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR); // Handle any other exceptions
        }
    }
	
}
