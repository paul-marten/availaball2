package com.paulmarten.availaball.service;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.datatables.mapping.DataTablesInput;
import org.springframework.data.jpa.datatables.mapping.DataTablesOutput;
import org.springframework.stereotype.Service;

import com.paulmarten.availaball.model.Account;
import com.paulmarten.availaball.model.FutsalField;
import com.paulmarten.availaball.repository.AccountRepository;
import com.paulmarten.availaball.repository.FutsalFieldRepository;

/**
 * Created by paulms on 7/4/2017.
 */
@Service("futsalFieldService")
public class FutsalFieldService {

	@Autowired
	private FutsalFieldRepository futsalFieldRepository;
	
	@Autowired
	private AccountRepository accountRepository;
	
	public DataTablesOutput<FutsalField> findAllFutsalFieldAdmin(@Valid DataTablesInput input) {
		return futsalFieldRepository.findAll(input);
	}

	public FutsalField findFutsalFieldById(int id) {
		return futsalFieldRepository.findOne(id);
	}

	public Page<FutsalField> findAllFutsalField(int page) {
		return futsalFieldRepository.findAllByOrderByIdFutsalFieldDesc(new PageRequest(page - 1, 10));
	}

	public void deleteFutsalField(int id) {
		futsalFieldRepository.delete(id);
	}
	
	public void saveField(FutsalField futsalField){
		java.util.Date today = new java.util.Date();
		
		FutsalField futsalFieldSave = new FutsalField();
		futsalFieldSave.setFieldName(futsalField.getFieldName());
		futsalFieldSave.setDetailLocation(futsalField.getDetailLocation());
		futsalFieldSave.setPhone(futsalField.getPhone());
		futsalFieldSave.setNumberOfField(futsalField.getNumberOfField());
		futsalFieldSave.setOpeningHours(futsalField.getOpeningHours());
		futsalFieldSave.setClosingHours(futsalField.getClosingHours());
		futsalFieldSave.setPrice(futsalField.getPrice());
		futsalFieldSave.setAccount(futsalField.getAccount());
		futsalFieldSave.setLocation(futsalField.getLocation());
		futsalFieldSave.setLatestUpdate(new java.sql.Timestamp(today.getTime()));
		
		Account accountSaveFutsalField = new Account();
		accountSaveFutsalField = accountRepository.findOne(futsalField.getAccount().getId());
		if(futsalFieldRepository.save(futsalFieldSave)!= null){
			int totalFutsalField = accountSaveFutsalField.getTotalField() + 1;
			accountSaveFutsalField.setTotalField(totalFutsalField);
			accountRepository.save(accountSaveFutsalField);
		}
	}
}
