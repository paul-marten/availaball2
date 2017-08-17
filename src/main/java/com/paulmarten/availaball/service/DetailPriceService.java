package com.paulmarten.availaball.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.paulmarten.availaball.model.DetailPrice;
import com.paulmarten.availaball.model.FutsalField;
import com.paulmarten.availaball.repository.DetailPriceRepository;

/**
 * Created by paulms on 6/14/2017.
 */


@Service("detailPriceService")


 
public class DetailPriceService {

    @Autowired
    private DetailPriceRepository detailPriceRepository;

    public List<DetailPrice> findByFutsalField(FutsalField futsalField){
    	return detailPriceRepository.findAllByFutsalField(futsalField);
    }


  


    
    public String saveDetailPrice(DetailPrice detailPrice){
    	String message = "";
    	List<DetailPrice> removeDetailPrice = new ArrayList<DetailPrice>();
    	return message;
    }
    
    public List<DetailPrice> findByDayAndIdFutsalField(String day, FutsalField futsalField){
    	return detailPriceRepository.findByDayAndFutsalField(day, futsalField);
    }

}
