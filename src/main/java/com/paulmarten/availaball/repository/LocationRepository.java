package com.paulmarten.availaball.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.paulmarten.availaball.model.Location;

/**
 * Created by paulms on 6/14/2017.
 */
@Repository
public interface LocationRepository extends JpaRepository<Location, Integer> {
}
