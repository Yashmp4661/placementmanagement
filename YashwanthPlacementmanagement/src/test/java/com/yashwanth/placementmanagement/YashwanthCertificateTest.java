package com.yashwanth.placementmanagement;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Assumptions;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.ClassOrderer.OrderAnnotation;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.MethodOrderer;
import org.junit.jupiter.api.MethodOrderer.MethodName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInstance;
import org.junit.jupiter.api.TestMethodOrder;
import org.junit.jupiter.api.ClassOrderer.OrderAnnotation;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@TestInstance(TestInstance.Lifecycle.PER_CLASS)
@SpringBootTest
@TestMethodOrder(MethodName.class) 
public class YashwanthCertificateTest {
	
	@Autowired
	private YashwanthCertificateRepository repository;
	
	@Autowired
    private YashwanthCertificateService certificateService;
	
	@Autowired
	private YashwanthCertificateController controller;
	
	
	
	@BeforeAll
    void setUp() {


        // Save a test certificate
		Yashwanthcertificate certificate = new Yashwanthcertificate();
        certificate.setName("Java Certification");
        certificate.setYear(1998);
        certificate.setDescripton("good");
        repository.save(certificate);
    }
	
	
	@Test
	public void test() {
		
		Yashwanthcertificate certificate=repository.findById(1).get();
		assertTrue(!certificate.getName().isEmpty());
		Assumptions.assumeFalse("Certification"== certificate.getName());
		Assumptions.assumeFalse(2024==certificate.getYear());
		Assumptions.assumeFalse("description"== certificate.getDescripton());
			
	}
	@Test
	public void assertionTest() {
		assertNotNull( repository.findById(1).get());
		
	}
	
     @ParameterizedTest
     @CsvSource({ "1","2","3"})
	public void parTest(int id) {
    	 assertNotNull(repository.findById(id).get());
		
    }
   
     @Test
      public void withDeleteCertificateById_Success() {
         // Ensure the certificate is present before deletion
         Yashwanthcertificate foundCertificate = repository.findById(1).get();
         assertNotNull(foundCertificate);

         // Delete the certificate
         certificateService.delete(1);;

         // Check that the certificate is no longer present
         assertThrows(Exception.class, () -> {
             certificateService.get(1);
         });
     }
     @Test
     public void yadd() {
    	 Yashwanthcertificate certificate=new Yashwanthcertificate();
    	 certificate.setDescripton("hii");
    	 certificate.setName("hello");
    	 certificate.setYear(2004);
    	 controller.update(certificate, 1);
    	 Yashwanthcertificate updatedCertificate=certificateService.get(1);
    	 assertNotNull(updatedCertificate);
     }
    

}
