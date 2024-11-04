package com.yashwanth.placementmanagement;



import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface YashwanthCertificateRepository extends JpaRepository<Yashwanthcertificate,Integer>{
	List<Yashwanthcertificate> findByName(String name);
	 

}
