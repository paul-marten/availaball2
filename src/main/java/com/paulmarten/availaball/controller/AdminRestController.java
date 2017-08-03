package com.paulmarten.availaball.controller;

import java.util.ArrayList;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.datatables.mapping.DataTablesInput;
import org.springframework.data.jpa.datatables.mapping.DataTablesOutput;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.annotation.JsonView;
import com.paulmarten.availaball.ViewJSON;
import com.paulmarten.availaball.model.Account;
import com.paulmarten.availaball.model.FutsalField;
import com.paulmarten.availaball.repository.FutsalFieldRepository;
import com.paulmarten.availaball.service.AccountService;
import com.paulmarten.availaball.service.FutsalFieldService;

/**
 * Created by paulms on 7/4/2017.
 */

@RestController
public class AdminRestController {

	@Autowired
	private FutsalFieldRepository futsalFieldRepository;

	@Autowired
	private FutsalFieldService futsalFieldService;

	@Autowired
	private AccountService accountService;

	@JsonView(ViewJSON.FutsalField.class)
	@RequestMapping(value = "/futsalfields", method = RequestMethod.GET)
	public DataTablesOutput<FutsalField> getFutsalFields(@Valid DataTablesInput input) {
		return futsalFieldService.findAllFutsalFieldAdmin(input);
	}

	@JsonView(ViewJSON.DetailAccount.class)
	@RequestMapping(value = "/surveyers", method = RequestMethod.GET)
	public DataTablesOutput<Account> getAllSurveyer(@Valid DataTablesInput input) {
		return accountService.findAllSurveyer(input);
	}

	@JsonView(ViewJSON.FutsalField.class)
	@RequestMapping(value = "/delete-field", method = RequestMethod.POST, headers = "Accept=application/json")
	public void deletefield(@ModelAttribute FutsalField futsalField) {
		futsalFieldService.deleteFutsalField(futsalField.getIdFutsalField());
	}
	
	@JsonView(ViewJSON.FutsalFieldMap.class)
	@RequestMapping(value = "/maps", method = RequestMethod.GET)
	public Iterable<FutsalField> maps() {
		return futsalFieldService.findAllFutsalFieldMap();
	}
	
	@JsonView(ViewJSON.FutsalField.class)
	@RequestMapping(value = "/detail-field-map", method = RequestMethod.POST, headers = "Accept=application/json")
	public FutsalField detailfieldMap(@ModelAttribute FutsalField futsalField) {
		return futsalFieldService.findFutsalFieldById(futsalField.getIdFutsalField());
	}
	
	//@formatter:off

	//@formatter:on
}
