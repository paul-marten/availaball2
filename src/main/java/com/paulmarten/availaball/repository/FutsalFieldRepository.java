package com.paulmarten.availaball.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.datatables.repository.DataTablesRepository;
import org.springframework.stereotype.Repository;

import com.paulmarten.availaball.model.FutsalField;

/**
 * Created by paulms on 7/4/2017.
 */
@Repository("futsalfieldRepository")
public interface FutsalFieldRepository extends DataTablesRepository<FutsalField, Integer> {
	
//	@Query("select f from FutsalField f where idFutsalField < ? order by idFutsalField")
//	List<FutsalField> findTop10ByOrderByIdFutsalFieldDesc(int id);
	
	List<FutsalField>findTop10ByIdFutsalFieldLessThanOrderByIdFutsalFieldDesc(int id);
	Page<FutsalField>findAllByOrderByIdFutsalFieldDesc(Pageable pageable);
}

