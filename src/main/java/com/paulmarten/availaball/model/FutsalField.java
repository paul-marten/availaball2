package com.paulmarten.availaball.model;

import java.io.Serializable;
import java.sql.Time;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Transient;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonView;
import com.paulmarten.availaball.ViewJSON;

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
    private List<DetailPrice> detail;
    private String latitude;
    private String longitude;
    
    public FutsalField() {
        super();
    }

	@JsonView(ViewJSON.ListFutsalFieldAndroid.class)
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    public int getIdFutsalField() {
        return idFutsalField;
    }

    public void setIdFutsalField(int idFutsalField) {
        this.idFutsalField = idFutsalField;
    }

    @JsonView(ViewJSON.ListFutsalFieldAndroid.class)
    @Column (name = "field_name")
    public String getFieldName() {
        return fieldName;
    }

    public void setFieldName(String fieldName) {
        this.fieldName = fieldName;
    }

    @JsonView(ViewJSON.ListFutsalFieldAndroid.class)
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
    
    
    @Transient
	public List<DetailPrice> getDetail() {
		return detail;
	}

	public void setDetail(List<DetailPrice> detail) {
		this.detail = detail;
	}

	@JsonView(ViewJSON.FutsalField.class)
	@Column (name = "latitude")
	public String getLatitude() {
		return latitude;
	}


	public void setLatitude(String latitude) {
		this.latitude = latitude;
	}

	@JsonView(ViewJSON.FutsalField.class)
	@Column (name = "longitude")
	public String getLongitude() {
		return longitude;
	}


	public void setLongitude(String longitud) {
		this.longitude = longitud;
	}
	
	@JsonView(ViewJSON.FutsalField.class)
	@JsonInclude(JsonInclude.Include.NON_DEFAULT)
	@Transient
	public String getDays() {
		return days;
	}


	public void setDays(String days) {
		this.days = days;
	}
	
	
	
}
