package com.paulmarten.availaball.model;

import org.springframework.data.jpa.datatables.mapping.DataTablesOutput;

import com.fasterxml.jackson.annotation.JsonView;

public class EditField {
	int id;	
	String phoneNumber;
	
	@JsonView(DataTablesOutput.View.class)
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	
	@JsonView(DataTablesOutput.View.class)
	public String getPhoneNumber() {
		return phoneNumber;
	}
	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}
	
}
