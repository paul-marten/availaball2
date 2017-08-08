package com.paulmarten.availaball.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.datatables.repository.DataTablesRepository;
import org.springframework.stereotype.Repository;

import com.paulmarten.availaball.model.Account;
import com.paulmarten.availaball.model.FutsalField;
import com.paulmarten.availaball.model.FutsalFieldMap;

/**
 * Created by paulms on 7/4/2017.
 */
@Repository("futsalFieldRepository")
public interface FutsalFieldRepository extends DataTablesRepository<FutsalField, Integer> {
	List<FutsalField>findTop10ByIdFutsalFieldLessThanOrderByIdFutsalFieldDesc(int id);
	Page<FutsalField>findAllByOrderByIdFutsalFieldDesc(Pageable pageable);
	FutsalField findTopByAccountOrderByIdFutsalFieldDesc(Account account);
	List<FutsalFieldMap>findAllByOrderByIdFutsalField();
}

