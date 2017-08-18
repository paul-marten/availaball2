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


  


    
    public void deleteDetailFutsalPrice(FutsalField futsalField){
    	List<DetailPrice> detailPrices = detailPriceRepository.findByFutsalField(futsalField);
    	for(int indexDetailPrice = 0; indexDetailPrice < detailPrices.size(); indexDetailPrice ++){
    		detailPriceRepository.delete(detailPrices.get(indexDetailPrice));
    	}
    }
    
    public String saveDetailPrice(FutsalField futsalField){
    	String message = "";
    	for(int indexDetailPrice = 0; indexDetailPrice < futsalField.getDetail().size(); indexDetailPrice ++){
    		DetailPrice detailPrice = new DetailPrice();
    		detailPrice.setDay(futsalField.getDetail().get(indexDetailPrice).getDay());
    		detailPrice.setStartTime(futsalField.getDetail().get(indexDetailPrice).getStartTime());
    		detailPrice.setEndTime(futsalField.getDetail().get(indexDetailPrice).getEndTime());
    		detailPrice.setPrice(futsalField.getDetail().get(indexDetailPrice).getPrice());
    		detailPrice.setFutsalField(futsalField);
    		if(detailPriceRepository.save(detailPrice)!= null){
    			message = "Success status 200 OK";
    		}
    	}
    	
    	return message;
    }
    
    public List<DetailPrice> findByDayAndIdFutsalField(String day, FutsalField futsalField){
    	return detailPriceRepository.findByDayAndFutsalField(day, futsalField);
    }

}
