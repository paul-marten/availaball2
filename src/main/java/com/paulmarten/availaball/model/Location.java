package com.paulmarten.availaball.model;

import java.io.Serializable;

import javax.persistence.*;

import org.springframework.data.jpa.datatables.mapping.DataTablesOutput;

import com.fasterxml.jackson.annotation.JsonView;
import com.paulmarten.availaball.ViewJSON;

@Entity
@Table(name = "location")
public class Location implements Serializable {
	private int id;
	private String location;
	
	@JsonView(ViewJSON.Location.class)
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	
	@JsonView(ViewJSON.Location.class)
	@Column(name = "location")
	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}
	
	
}
