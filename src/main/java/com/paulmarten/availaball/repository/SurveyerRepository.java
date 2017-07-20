package com.paulmarten.availaball.repository;

import com.paulmarten.availaball.model.Account;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

/**
 * Created by paulms on 6/14/2017.
 */
@Repository
public interface SurveyerRepository extends CrudRepository<Account, Integer> {
}
