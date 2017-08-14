package com.paulmarten.availaball.service;

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

    
    public List<DetailPrice> findByIdFutsalField(FutsalField futsalField){
    	return detailPriceRepository.findByFutsalField(futsalField);
    }

}
