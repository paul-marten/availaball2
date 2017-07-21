package com.paulmarten.availaball.model;

import com.fasterxml.jackson.annotation.JsonView;
import com.paulmarten.availaball.ViewJSON;
import com.paulmarten.availaball.validators.PasswordMatch;
import org.hibernate.validator.constraints.NotEmpty;
import org.springframework.data.jpa.datatables.mapping.DataTablesOutput;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

/**
 * Created by paulms on 6/14/2017.
 */

@Entity
@Table(name = "account")
public class Account implements Serializable {
	private static final long serialVersionUID = 1L;

	private int id;
	private String username;
	private String password;
	private String role;
	private Set<FutsalField> futsalFields = new HashSet<FutsalField>(0);
	private String plainPassword;
	private String repeatPassword;
	private String name;
	private String phone;
	private String totalField;
	private Date latestUpdate;

	public Account() {
		super();
	}
	

	public Account(int id, String username, String password, String role, Set<FutsalField> futsalFields,
			String plainPassword, String repeatPassword, String name, String phone, String totalField,
			Date latestUpdate) {
		super();
		this.id = id;
		this.username = username;
		this.password = password;
		this.role = role;
		this.futsalFields = futsalFields;
		this.plainPassword = plainPassword;
		this.repeatPassword = repeatPassword;
		this.name = name;
		this.phone = phone;
		this.totalField = totalField;
		this.latestUpdate = latestUpdate;
	}



	@JsonView(DataTablesOutput.View.class)
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "id", unique = true, nullable = false)
	public int getId() {
		return id;
	}

	public void setId(int idSurveyer) {
		this.id = idSurveyer;
	}

	@JsonView(DataTablesOutput.View.class)
	@NotEmpty
	@Column(name = "username", unique = true)
	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	@JsonView(DataTablesOutput.View.class)
	@NotEmpty
	@Column(name = "password")
	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "account")
	public Set<FutsalField> getFutsalFields() {
		return futsalFields;
	}

	public void setFutsalFields(Set<FutsalField> futsalFields) {
		this.futsalFields = futsalFields;
	}

	@Column(name = "role")
	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	@Transient
	public String getPlainPassword() {
		return plainPassword;
	}

	public void setPlainPassword(String plainPassword) {
		this.password = new BCryptPasswordEncoder().encode(plainPassword);
		this.plainPassword = plainPassword;
	}

	@Transient
	public String getRepeatPassword() {
		return repeatPassword;
	}

	public void setRepeatPassword(String repeatPassword) {
		this.repeatPassword = repeatPassword;
	}

	@JsonView(DataTablesOutput.View.class)
	@NotEmpty
	@Column(name = "name", unique = true)
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	@JsonView(DataTablesOutput.View.class)
	@NotEmpty
	@Column(name = "phone", unique = true)
	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	@JsonView(DataTablesOutput.View.class)
	@Column(name = "total_field", unique = true)
	public String getTotalField() {
		return totalField;
	}

	public void setTotalField(String totalField) {
		this.totalField = totalField;
	}

	@JsonView(DataTablesOutput.View.class)
	@NotEmpty
	@Column(name = "latest_update", unique = true)
	public Date getLatestUpdate() {
		return latestUpdate;
	}

	public void setLatestUpdate(Date latestUpdate) {
		this.latestUpdate = latestUpdate;
	}
}