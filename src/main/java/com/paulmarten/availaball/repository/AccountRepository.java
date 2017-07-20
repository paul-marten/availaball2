package com.paulmarten.availaball.repository;

import com.paulmarten.availaball.model.Account;

import org.springframework.data.jpa.datatables.repository.DataTablesRepository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Created by paulms on 7/5/2017.
 */
@Repository
public interface AccountRepository extends DataTablesRepository<Account, Integer> {
    Account findByUsername(String username);
    Account findByRole(String role);
}
