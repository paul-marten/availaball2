package com.paulmarten.availaball.model;

import com.fasterxml.jackson.annotation.JsonView;
import com.paulmarten.availaball.ViewJSON;

import org.springframework.data.jpa.datatables.mapping.DataTablesOutput;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

import java.io.Serializable;
import java.sql.Time;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

/**
 * Created by paulms on 6/15/2017.
 */
@Entity
@Table(name="futsal_field")
public class FutsalField implements Serializable {
    private static final long serialVersionUID = 1L;

    private int idFutsalField;
    private String fieldName;
    private String location;
    private String detailLocation;
    private int numberOfField;
    private Time openingHours;
    private Time closingHours;
    private String phone;
    private String price;
    private String photo;
    private Date latestUpdate;
    private Account account;
    private String days;
    private Set<DetailPrice> detailPrices = new HashSet<DetailPrice>(0);
    private String latitude;
    private String longitude;
    private Object objectField;
    
    public FutsalField() {
        super();
    }

	@JsonView(ViewJSON.FutsalFieldMap.class)
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    public int getIdFutsalField() {
        return idFutsalField;
    }

    public void setIdFutsalField(int idFutsalField) {
        this.idFutsalField = idFutsalField;
    }

    @JsonView(ViewJSON.FutsalFieldMap.class)
    @Column (name = "field_name")
    public String getFieldName() {
        return fieldName;
    }

    public void setFieldName(String fieldName) {
        this.fieldName = fieldName;
    }

    @JsonView(ViewJSON.FutsalField.class)
    @Column (name = "location")
    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }
    
    @JsonView(ViewJSON.FutsalField.class)
    @Column (name = "detailLocation")
	public String getDetailLocation() {
		return detailLocation;
	}


	public void setDetailLocation(String detailLocation) {
		this.detailLocation = detailLocation;
	}


	@JsonView(ViewJSON.FutsalField.class)
    @Column (name = "number_of_field")
    public int getNumberOfField() {
        return numberOfField;
    }

    public void setNumberOfField(int numberOfField) {
        this.numberOfField = numberOfField;
    }

    @JsonView(ViewJSON.FutsalField.class)
    @Column (name = "opening_hours")
    public Time getOpeningHours() {
        return openingHours;
    }

    public void setOpeningHours(Time openingHours) {
        this.openingHours = openingHours;
    }

    @JsonView(ViewJSON.FutsalField.class)
    @Column (name = "closing_hours")
    public Time getClosingHours() {
        return closingHours;
    }

    public void setClosingHours(Time closingHours) {
        this.closingHours = closingHours;
    }

    @JsonView(ViewJSON.FutsalField.class)
    @Column (name = "price")
    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }

    @JsonView(ViewJSON.FutsalField.class)
    @Column (name = "photo")
    public String getPhoto() {
        return photo;
    }

    public void setPhoto(String photo) {
        this.photo = photo;
    }

    @JsonView(ViewJSON.FutsalField.class)
    @Column (name = "lates_update")
	public Date getLatestUpdate() {
		return latestUpdate;
	}

	public void setLatestUpdate(Date latestUpdate) {
		this.latestUpdate = latestUpdate;
	}
    
    
    @JsonView(ViewJSON.FutsalField.class)
    @Column(name = "phone")
    public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}


	@JsonView(ViewJSON.Account.class)
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_account")
    public Account getAccount() {
        return account;
    }

    public void setAccount(Account account) {
        this.account = account;
    }
    
//    @JsonView(DataTablesOutput.View.class)
    @OneToMany(fetch = FetchType.LAZY,mappedBy = "futsalField")
    public Set<DetailPrice> getDetailPrices() {
        return detailPrices;
    }
    
    public void setDetailPrices(Set<DetailPrice> detailPrices) {
        this.detailPrices = detailPrices;
    }
    
	@JsonView(ViewJSON.FutsalFieldMap.class)
	@Column (name = "latitude")
	public String getLatitude() {
		return latitude;
	}


	public void setLatitude(String latitude) {
		this.latitude = latitude;
	}

	@JsonView(ViewJSON.FutsalFieldMap.class)
	@Column (name = "longitude")
	public String getLongitude() {
		return longitude;
	}


	public void setLongitude(String longitud) {
		this.longitude = longitud;
	}
	
	@JsonView(DataTablesOutput.View.class)
	@Transient
	public Object getObjectField() {
		return objectField;
	}


	public void setObjectField(Object objectField) {
		this.objectField = objectField;
	}
	
	@JsonView(ViewJSON.FutsalField.class)
	@Transient
	public String getDays() {
		return days;
	}


	public void setDays(String days) {
		this.days = days;
	}
	
	
	
}
