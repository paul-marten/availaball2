package com.paulmarten.availaball.service;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.datatables.mapping.DataTablesInput;
import org.springframework.data.jpa.datatables.mapping.DataTablesOutput;
import com.paulmarten.availaball.model.Account;
import com.paulmarten.availaball.model.FutsalField;
import com.paulmarten.availaball.repository.AccountRepository;
import org.springframework.stereotype.Service;

/**
 * Created by paulms on 7/5/2017.
 */
@Service
public class AccountService {
	
	@Autowired
	private AccountRepository accountRepository;
	
	public DataTablesOutput<Account> findAllSurveyer(@Valid DataTablesInput input) {
        return accountRepository.findAll(input);
    }
}
