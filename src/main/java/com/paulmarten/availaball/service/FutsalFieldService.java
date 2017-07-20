package com.paulmarten.availaball.service;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.datatables.mapping.DataTablesInput;
import org.springframework.data.jpa.datatables.mapping.DataTablesOutput;
import org.springframework.stereotype.Service;

import com.paulmarten.availaball.model.FutsalField;
import com.paulmarten.availaball.repository.FutsalFieldRepository;

/**
 * Created by paulms on 7/4/2017.
 */
@Service("futsalfieldService")
public class FutsalFieldService {
	
	@Autowired
	private FutsalFieldRepository futsalFieldRepository;
	
	public DataTablesOutput<FutsalField> findAllFutsalFieldAdmin(@Valid DataTablesInput input) {
        return futsalFieldRepository.findAll(input);
    }
	
	public FutsalField findFutsalFieldById(int id) {	
		return futsalFieldRepository.findOne(id);
	}
	
	public Page<FutsalField> findAllFutsalField(int page){
	        return futsalFieldRepository.findAllByOrderByIdFutsalFieldDesc(new PageRequest(page-1,1));
	}
	
	public void deleteFutsalField(int id){
		futsalFieldRepository.delete(id);
	}
}
