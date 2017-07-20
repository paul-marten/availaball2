package com.paulmarten.availaball.controller;

import com.fasterxml.jackson.annotation.JsonView;
import com.paulmarten.availaball.ViewJSON;
import com.paulmarten.availaball.model.Account;
import com.paulmarten.availaball.model.FutsalField;
import com.paulmarten.availaball.repository.AccountRepository;
import com.paulmarten.availaball.repository.FutsalFieldRepository;
import com.paulmarten.availaball.service.AccountService;
import com.paulmarten.availaball.service.FutsalFieldService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.datatables.mapping.DataTablesInput;
import org.springframework.data.jpa.datatables.mapping.DataTablesOutput;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.PostConstruct;
import javax.validation.Valid;
import java.util.ArrayList;
import java.util.List;

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

  @JsonView(DataTablesOutput.View.class)
  @RequestMapping(value = "/futsalfields", method = RequestMethod.GET)
  public DataTablesOutput<FutsalField> getFutsalFields(@Valid DataTablesInput input) {
    return futsalFieldService.findAllFutsalFieldAdmin(input);
  }

  @JsonView(DataTablesOutput.View.class)
  @RequestMapping(value = "/surveyers", method = RequestMethod.GET)
  public DataTablesOutput<Account> getAllSurveyer(@Valid DataTablesInput input) {
    return accountService.findAllSurveyer(input);
  }

  @JsonView(DataTablesOutput.View.class)
  @RequestMapping(value = "/delete-field", method = RequestMethod.POST,
  headers = "Accept=application/json")
  public void deletefield(@ModelAttribute FutsalField futsalField) {
    System.out.println(futsalField);
    futsalFieldService.deleteFutsalField(futsalField.getIdFutsalField());
  }
  //@formatter:off

  //@formatter:on
  
}
