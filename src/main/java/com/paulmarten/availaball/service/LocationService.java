package com.paulmarten.availaball.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.paulmarten.availaball.model.Location;
import com.paulmarten.availaball.repository.LocationRepository;

@Service("locationService")
public class LocationService {
	
	@Autowired
	private LocationRepository locationRepository;
	
	public List<Location> viewAllField(){
		return locationRepository.findAll();
	}
}
