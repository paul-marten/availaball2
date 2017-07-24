package com.paulmarten.availaball.model;

import com.fasterxml.jackson.annotation.JsonView;
import org.springframework.data.jpa.datatables.mapping.DataTablesOutput;

import javax.persistence.*;
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
    private String price;
    private String photo;
    private Date latestUpdate;
    private Account account;
    private Set<FutsalFieldPhone> futsalFieldPhones = new HashSet<FutsalFieldPhone>(0);
    private Set<DetailPrice> detailPrices = new HashSet<DetailPrice>(0);
    private String latitude;
    private String longitud;
    
    public FutsalField() {
        super();
    }
    

	public FutsalField(int idFutsalField, String fieldName, String location, String detailLocation, int numberOfField,
			Time openingHours, Time closingHours, String price, String photo, Date latestUpdate, Account account,
			Set<FutsalFieldPhone> futsalFieldPhones, Set<DetailPrice> detailPrices, String latitude, String longitud) {
		super();
		this.idFutsalField = idFutsalField;
		this.fieldName = fieldName;
		this.location = location;
		this.detailLocation = detailLocation;
		this.numberOfField = numberOfField;
		this.openingHours = openingHours;
		this.closingHours = closingHours;
		this.price = price;
		this.photo = photo;
		this.latestUpdate = latestUpdate;
		this.account = account;
		this.futsalFieldPhones = futsalFieldPhones;
		this.detailPrices = detailPrices;
		this.latitude = latitude;
		this.longitud = longitud;
	}



	@JsonView(DataTablesOutput.View.class)
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    public int getIdFutsalField() {
        return idFutsalField;
    }

    public void setIdFutsalField(int idFutsalField) {
        this.idFutsalField = idFutsalField;
    }

    @JsonView(DataTablesOutput.View.class)
    @Column (name = "field_name")
    public String getFieldName() {
        return fieldName;
    }

    public void setFieldName(String fieldName) {
        this.fieldName = fieldName;
    }

    @JsonView(DataTablesOutput.View.class)
    @Column (name = "location")
    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }
    
    @JsonView(DataTablesOutput.View.class)
    @Column (name = "detailLocation")
	public String getDetailLocation() {
		return detailLocation;
	}


	public void setDetailLocation(String detailLocation) {
		this.detailLocation = detailLocation;
	}


	@JsonView(DataTablesOutput.View.class)
    @Column (name = "number_of_field")
    public int getNumberOfField() {
        return numberOfField;
    }

    public void setNumberOfField(int numberOfField) {
        this.numberOfField = numberOfField;
    }

    @JsonView(DataTablesOutput.View.class)
    @Column (name = "opening_hours")
    public Time getOpeningHours() {
        return openingHours;
    }

    public void setOpeningHours(Time openingHours) {
        this.openingHours = openingHours;
    }

    @JsonView(DataTablesOutput.View.class)
    @Column (name = "closing_hours")
    public Time getClosingHours() {
        return closingHours;
    }

    public void setClosingHours(Time closingHours) {
        this.closingHours = closingHours;
    }

    @JsonView(DataTablesOutput.View.class)
    @Column (name = "price")
    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }

    @JsonView(DataTablesOutput.View.class)
    @Column (name = "photo")
    public String getPhoto() {
        return photo;
    }

    public void setPhoto(String photo) {
        this.photo = photo;
    }

    @JsonView(DataTablesOutput.View.class)
    @Column (name = "lates_update")
    public Date getLatestUpdate() {
        return latestUpdate;
    }

    public void setLatestUpdate(Date latestUpdate) {
        this.latestUpdate = latestUpdate;
    }

    @JsonView(DataTablesOutput.View.class)
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
    
//    @JsonView(DataTablesOutput.View.class)
    @OneToMany(fetch = FetchType.LAZY, mappedBy = "futsalField")
    public Set<FutsalFieldPhone> getFutsalFieldPhones() {
		return futsalFieldPhones;
	}

	public void setFutsalFieldPhones(Set<FutsalFieldPhone> futsalFieldPhones) {
		this.futsalFieldPhones = futsalFieldPhones;
	}

	@JsonView(DataTablesOutput.View.class)
	@Column (name = "latitude")
	public String getLatitude() {
		return latitude;
	}


	public void setLatitude(String latitude) {
		this.latitude = latitude;
	}

	@JsonView(DataTablesOutput.View.class)
	@Column (name = "longitude")
	public String getLongitud() {
		return longitud;
	}


	public void setLongitud(String longitud) {
		this.longitud = longitud;
	}
	
	
}
