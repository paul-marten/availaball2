package com.paulmarten.availaball.controller;

import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.util.ArrayList;
import java.util.List;

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
import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.annotation.JsonView;
import com.paulmarten.availaball.ResponseMessage;
import com.paulmarten.availaball.ViewJSON;
import com.paulmarten.availaball.model.Account;
import com.paulmarten.availaball.model.DetailPrice;
import com.paulmarten.availaball.model.FutsalField;
import com.paulmarten.availaball.service.DetailPriceService;
import com.paulmarten.availaball.service.FutsalFieldService;
import com.paulmarten.availaball.service.LocationService;
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
	
	@Autowired
	private LocationService locationService;
	
	@Autowired
	private DetailPriceService detailPriceService;
	
	
	@JsonView(ViewJSON.Account.class)
	@RequestMapping(value = "/getid/{id}", method = RequestMethod.POST)
	public Account getId(@PathVariable int id) {
		return surveyerService.getAccount(id);
	}

	@ResponseBody
	@RequestMapping(value = "/login/{username}/{password}", method = RequestMethod.POST)
	public String loginAccount(@PathVariable String username, @PathVariable String password) {
		return surveyerService.checkAccount(username, password);
	}

	@JsonView(ViewJSON.ListFutsalFieldAndroid.class)
	@RequestMapping(value = "/get-all-futsal-field", method = RequestMethod.GET, headers = "Accept=application/json")
	public ResponseMessage getAllFutsalField(@RequestParam(required = false, defaultValue = "1") int page) {
		ResponseMessage responseMessage = new ResponseMessage();
		
		Page<FutsalField> futsalField = futsalFieldService.findAllFutsalField(page);
		responseMessage.setCode("600");
		responseMessage.setMessage("Success");
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
	
	@JsonView(ViewJSON.Base.class)
	@RequestMapping(value = "/create-futsal-field", method = RequestMethod.POST)
	public ResponseMessage createField(@ModelAttribute FutsalField futsalField) {
		ResponseMessage responseMessage = new ResponseMessage();


	/*	responseMessage.setMessage(futsalFieldService.saveField(futsalField));*/

		responseMessage.setCode("600");
		responseMessage.setMessage(futsalFieldService.saveField(futsalField));


		responseMessage.setCode("600");
		responseMessage.setMessage(futsalFieldService.saveField(futsalField));

	/*	responseMessage.setMessage(futsalFieldService.saveField(futsalField));*/


		return responseMessage;
	}
	
	@RequestMapping(value = "/upload-photo", method = RequestMethod.POST)
	private String uploadPhoto(@RequestParam("file") MultipartFile imageField){
		java.util.Date today = new java.util.Date();
		String name;
		String fullName;
		if (!imageField.isEmpty()) {
			Long date = today.getTime();
			name = imageField.getOriginalFilename();
			fullName = "D:/GVM/"+ date +"_"+ name;
			try {
				byte[] bytes = imageField.getBytes();
				BufferedOutputStream stream = new BufferedOutputStream(new FileOutputStream(new File(fullName)));
				stream.write(bytes);
				stream.close();
			} catch (Exception e) {
				e.printStackTrace();
				System.out.println("null");
			}
			return fullName;
		}
		else{
			return "null";
		}
	}
	
//	@JsonView(ViewJSON.FutsalField.class)
//	@RequestMapping(value = "/detail-field", method = RequestMethod.POST , headers = "Accept=application/json")
//	public FutsalField viewDetailFutsal(@ModelAttribute FutsalField futsalField) {
//		return futsalFieldService.findFutsalFieldById(futsalField.getIdFutsalField());
//	}
	
	@JsonView(ViewJSON.FutsalField.class)
	@RequestMapping(value = "/detail-field", method = RequestMethod.GET, headers = "Accept=application/json")
	public ResponseMessage viewDetailFutsal(@RequestParam int idFutsalField) {
		ResponseMessage responseMessage = new ResponseMessage();
		FutsalField futsalFieldSentObject =  new FutsalField();
		futsalFieldSentObject = futsalFieldService.findFutsalFieldById(idFutsalField);
		responseMessage.setObject(futsalFieldSentObject);
		responseMessage.setMessage("Success");
		responseMessage.setCode("600");
		return responseMessage;
	}
	
	@JsonView(ViewJSON.DetailPrice.class)
	@RequestMapping(value = "/detail-field-price", method = RequestMethod.GET, headers = "Accept=application/json")
	public ResponseMessage viewDetailFutsalPrice(@RequestParam int idFutsalField) {
		ResponseMessage responseMessage = new ResponseMessage();
		List<DetailPrice> detailPrices = new ArrayList<DetailPrice>();
		FutsalField futsalFieldSentObject = futsalFieldService.findFutsalFieldById(idFutsalField);
	//	detailPrices = detailPriceService.findByIdFutsalField(futsalFieldSentObject);
		responseMessage.setMessage("Success");
		responseMessage.setCode("600");
		responseMessage.setObject(detailPrices);
		return responseMessage;
	}
	
	@JsonView(ViewJSON.Location.class)
	@RequestMapping(value = "/location", method = RequestMethod.GET, headers = "Accept=application/json")
	public ResponseMessage viewAllLocation() {
		ResponseMessage responseMessage = new ResponseMessage();
		responseMessage.setObject(locationService.viewAllField());
		responseMessage.setMessage("Success");
		responseMessage.setCode("600");
		return responseMessage;
	}
	
	@JsonView(ViewJSON.FutsalField.class)
	@RequestMapping(value = "/maps", method = RequestMethod.GET, headers = "Accept=application/json")
	public List<FutsalField> maps() {
		return futsalFieldService.findAllFutsalFieldApi();
	}
	
	@JsonView(ViewJSON.Base.class)
	@RequestMapping(value = "/edit-futsal-field", method = RequestMethod.POST)
	public ResponseMessage editField(@ModelAttribute FutsalField futsalField) {
		ResponseMessage responseMessage = new ResponseMessage();

		responseMessage.setCode("600");
		responseMessage.setMessage(futsalFieldService.saveField(futsalField));

		return responseMessage;
	}
	
	@JsonView(ViewJSON.Base.class)
	@RequestMapping(value = "/edit-detail-price-futsal-field", method = RequestMethod.POST)
	public ResponseMessage editDetailField(@ModelAttribute FutsalField futsalField) {
		ResponseMessage responseMessage = new ResponseMessage();
		
		System.out.println(futsalField.getDetail().size());
		responseMessage.setCode("600");
//		responseMessage.setMessage(detailPriceService.saveDetailPrice(futsalField.getDetail()));

		return responseMessage;
	}
	
}
