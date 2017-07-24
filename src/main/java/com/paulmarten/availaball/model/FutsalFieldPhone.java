package com.paulmarten.availaball.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.springframework.data.jpa.datatables.mapping.DataTablesOutput;

import com.fasterxml.jackson.annotation.JsonView;

@Entity
@Table(name = "futsal_field_phone")
public class FutsalFieldPhone implements Serializable {
	
	private static final long serialVersionUID = 1L;
	
	private int idFutsalFieldPhone;
    private FutsalField futsalField;
    private String phones;
    
    public FutsalFieldPhone() {
		super();
		// TODO Auto-generated constructor stub
	}
    
    
	public FutsalFieldPhone(int idFutsalFieldPhone, FutsalField futsalField, String phones) {
		super();
		this.idFutsalFieldPhone = idFutsalFieldPhone;
		this.futsalField = futsalField;
		this.phones = phones;
	}


	@Id
    @JsonView(DataTablesOutput.View.class)
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column (name = "id")
	public int getIdFutsalFieldPhone() {
		return idFutsalFieldPhone;
	}
	public void setIdFutsalFieldPhone(int idFutsalFieldPhone) {
		this.idFutsalFieldPhone = idFutsalFieldPhone;
	}	
	
	@JsonView(DataTablesOutput.View.class)
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_futsal_field")
	public FutsalField getFutsalField() {
		return futsalField;
	}
	public void setFutsalField(FutsalField futsalField) {
		this.futsalField = futsalField;
	}
	
	@JsonView(DataTablesOutput.View.class)
	@Column (name = "phone_numbers")
	public String getPhones() {
		return phones;
	}
	public void setPhones(String phones) {
		this.phones = phones;
	}
    
    
}
