package com.paulmarten.availaball.model;

import com.fasterxml.jackson.annotation.JsonView;
import org.hibernate.validator.constraints.NotEmpty;
import org.springframework.data.jpa.datatables.mapping.DataTablesOutput;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

/**
 * Created by paulms on 7/10/2017.
 */
@Entity
@Table(name="detail_account")
public class DetailAccount implements Serializable {
    private static final long serialVersionUID = 1L;

    private int idDetailAccount;
    private String name;
    private String phone;
    private String email;
    private String totalField;
    private Date latestUpdate;

    public DetailAccount() {
    }

    public DetailAccount(int idDetailAccount, String name, String phone, String email, String totalField, Date latestUpdate) {
        this.idDetailAccount = idDetailAccount;
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.totalField = totalField;
        this.latestUpdate = latestUpdate;
    }

    @JsonView(DataTablesOutput.View.class)
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column (name = "id",unique = true, nullable = false)
    public int getId() {
        return idDetailAccount;
    }

    public void setId(int id) {
        this.idDetailAccount = id;
    }

    @JsonView(DataTablesOutput.View.class)
    @NotEmpty
    @Column (name = "name" , unique = true)
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @JsonView(DataTablesOutput.View.class)
    @NotEmpty
    @Column (name = "phone" , unique = true)
    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    @JsonView(DataTablesOutput.View.class)
    @NotEmpty
    @Column (name = "email" , unique = true)
    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    @JsonView(DataTablesOutput.View.class)
    @NotEmpty
    @Column (name = "total_field" , unique = true)
    public String getTotalField() {
        return totalField;
    }
    
    public void setTotalField(String totalField) {
        this.totalField = totalField;
    }

    @JsonView(DataTablesOutput.View.class)
    @NotEmpty
    @Column (name = "latest_update" , unique = true)
    public Date getLatestUpdate() {
        return latestUpdate;
    }

    public void setLatestUpdate(Date latestUpdate) {
        this.latestUpdate = latestUpdate;
    }
    
}
