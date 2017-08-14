package com.paulmarten.availaball.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.datatables.repository.DataTablesRepository;
import org.springframework.stereotype.Repository;

import com.paulmarten.availaball.model.DetailPrice;
import com.paulmarten.availaball.model.FutsalField;

/**
 * Created by paulms on 7/4/2017.
 */
@Repository("detailPriceRepository")
public interface DetailPriceRepository extends DataTablesRepository<DetailPrice, Integer> {
	
	List<DetailPrice>findAllByFutsalField(FutsalField futsalField);

	List<DetailPrice>findByFutsalField(FutsalField futsalField);
//	List<DetailPrice>findDistinctDayByFutsalField(FutsalField futsalField);

}

