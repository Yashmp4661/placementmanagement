package com.yashwanth.placementmanagement;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Yashwanthcertificate {
	
	private Integer id;
	private Integer year;
	 private String name;
	 private String descripton;
	 
	 
	public Yashwanthcertificate() {
		super();
	}


	public Yashwanthcertificate(Integer id, Integer year, String name, String descripton) {
		super();
		this.id = id;
		this.year = year;
		this.name = name;
		this.descripton = descripton;
	}


	@Id
	public Integer getId() {
		return id;
	}


	public void setId(Integer id) {
		this.id = id;
	}


	public Integer getYear() {
		return year;
	}


	public void setYear(Integer year) {
		this.year = year;
	}


	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


	public String getDescripton() {
		return descripton;
	}


	public void setDescripton(String descripton) {
		this.descripton = descripton;
	}


	@Override
	public String toString() {
		return "Yashwanthcertificate [id=" + id + ", year=" + year + ", name=" + name + ", descripton=" + descripton
				+ ", getId()=" + getId() + ", getYear()=" + getYear() + ", getName()=" + getName()
				+ ", getDescripton()=" + getDescripton() + ", getClass()=" + getClass() + ", hashCode()=" + hashCode()
				+ ", toString()=" + super.toString() + "]";
	}
	 
	
	 

}
