package com.paulmarten.availaball.controller;

import com.paulmarten.availaball.ResponseMessage;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.model;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.datatables.mapping.DataTablesOutput;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.annotation.JsonView;
import com.paulmarten.availaball.ViewJSON;
import com.paulmarten.availaball.model.Account;
import com.paulmarten.availaball.model.FutsalField;
import com.paulmarten.availaball.service.FutsalFieldService;
import com.paulmarten.availaball.service.SurveyerService;

/**
 * Created by paulms on 6/14/2017.
 */
@RestController
@RequestMapping("/surveyer")
public class SurveyerController {
	@Autowired
	private SurveyerService surveyerService;

	@Autowired
	private FutsalFieldService futsalFieldService;

	@JsonView(ViewJSON.AccountView.class)
	@RequestMapping(value = "/getid/{id}", method = RequestMethod.POST)
	public Account getId(@PathVariable int id) {
		return surveyerService.getAccount(id);
	}

	@ResponseBody
	@RequestMapping(value = "/login/{username}/{password}", method = RequestMethod.POST)
	public String loginAccount(@PathVariable String username, @PathVariable String password) {
		return surveyerService.checkAccount(username, password);
	}

	// @JsonView(DataTablesOutput.View.class)
	// @RequestMapping(value="/get-all-futsal-field", method = RequestMethod.GET
	// , headers="Accept=application/json")
	// public ResponseMessage getAllFutsalField(@RequestParam(required = false,
	// defaultValue = "1") int page){
	// ResponseMessage responseMessage = new ResponseMessage();
	// Page <FutsalField> futsalField =
	// futsalFieldService.findAllFutsalField(page);
	// responseMessage.setObject(futsalField.getContent());
	// responseMessage.setCurrentPage(futsalField.getNumber()+1);
	// responseMessage.setTotalPage(futsalField.getTotalPages());
	// return responseMessage;
	// }

	@JsonView(DataTablesOutput.View.class)
	@RequestMapping(value = "/get-all-futsal-field", method = RequestMethod.GET, headers = "Accept=application/json")
	public ResponseMessage getAllFutsalField(@RequestParam(required = false, defaultValue = "1") int page) {
		ResponseMessage responseMessage = new ResponseMessage();
		Page<FutsalField> futsalField = futsalFieldService.findAllFutsalField(page);
		responseMessage.setObject(futsalField.getContent());
		responseMessage.setCurrentPage(futsalField.getNumber() + 1);
		responseMessage.setTotalPage(futsalField.getTotalPages());
		return responseMessage;
	}

	@JsonView(DataTablesOutput.View.class)
	@RequestMapping(value = "/view-id", method = RequestMethod.POST)
	public Account viewId(@ModelAttribute Account account) {
		System.out.println(account.getId());
		return surveyerService.getAccount(account.getId());
	}
	
	@JsonView(DataTablesOutput.View.class)
	@RequestMapping(value = "/create-futsal-field", method = RequestMethod.POST)
	public void createField(@ModelAttribute FutsalField futsalField) {
		futsalFieldService.saveField(futsalField);
	}
}
