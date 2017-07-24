package com.paulmarten.availaball.repository;

import org.springframework.data.jpa.datatables.repository.DataTablesRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.paulmarten.availaball.model.Account;

/**
 * Created by paulms on 7/5/2017.
 */
@Repository
public interface AccountRepository extends DataTablesRepository<Account, Integer> {
    Account findByUsername(String username);
    Account findByRole(String role);
    
 }
