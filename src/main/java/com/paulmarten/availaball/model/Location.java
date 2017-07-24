package com.paulmarten.availaball.model;

import java.io.Serializable;

import javax.persistence.*;

import org.springframework.data.jpa.datatables.mapping.DataTablesOutput;

import com.fasterxml.jackson.annotation.JsonView;

@Entity
@Table(name = "location")
public class Location implements Serializable {
	private int id;
	private String location;
	
	@JsonView(DataTablesOutput.View.class)
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	
	@JsonView(DataTablesOutput.View.class)
	@Column(name = "location")
	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}
	
	
}
