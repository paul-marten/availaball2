package com.paulmarten.availaball.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.datatables.repository.DataTablesRepository;
import org.springframework.stereotype.Repository;

import com.paulmarten.availaball.model.DetailPrice;

/**
 * Created by paulms on 7/4/2017.
 */
@Repository("detailPriceRepository")
public interface DetailPriceRepository extends DataTablesRepository<DetailPrice, Integer> {
}

