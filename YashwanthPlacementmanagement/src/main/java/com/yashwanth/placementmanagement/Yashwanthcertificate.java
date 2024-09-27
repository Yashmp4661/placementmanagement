package com.yashwanth.placementmanagement;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="certificate")
public class Yashwanthcertificate {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer id;
	@Column(name="year")
	private Integer year;
	@Column(name="name")
	 private String name;
	@Column(name="description")
	 private String descripton;
	 
	 
	public Yashwanthcertificate() {
		super();
	}



	public Yashwanthcertificate(Integer year, String name, String descripton) {
		super();
		this.year = year;
		this.name = name;
		this.descripton = descripton;
	}



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
