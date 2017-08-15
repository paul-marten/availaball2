package com.paulmarten.availaball.controller;

import java.security.Principal;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.paulmarten.availaball.model.Account;
import com.paulmarten.availaball.model.DetailPrice;
import com.paulmarten.availaball.model.FutsalField;
import com.paulmarten.availaball.model.FutsalFieldMap;
import com.paulmarten.availaball.model.Location;
import com.paulmarten.availaball.service.AccountService;
import com.paulmarten.availaball.service.DetailPriceService;
import com.paulmarten.availaball.service.FutsalFieldService;
import com.paulmarten.availaball.service.LocationService;

/**
 * Created by paulms on 6/14/2017.
 */
@Controller
@RequestMapping("/admin")
public class AdminController {

	@Autowired
	private FutsalFieldService futsalFieldService;

	@Autowired
	private AccountService accountService;
	
	@Autowired
	private DetailPriceService detailPriceService;
	
	@Autowired
	private LocationService locationService;
	
    @RequestMapping(path="/index", method= RequestMethod.GET)
    public String goIndex(Model model,Principal principal, HttpSession session){
    	Account account = accountService.findAccountByUsername(principal.getName());
    	DateTimeFormatter dtf = DateTimeFormatter.ofPattern("dd MMMM yyyy");
    	LocalDate localDate = LocalDate.now();
    	session.setAttribute("mySessionAttributeAccount", account);
    	session.setAttribute("mySessionAttributeTime", dtf.format(localDate));
        return "/admin/page/index";
    }

    @RequestMapping(path="/user", method= RequestMethod.GET)
    public String goUser(){
        return "/admin/page/user";
    }
        
    @RequestMapping(path="/map", method= RequestMethod.GET)
    public String goMap(Model model){
    	List<FutsalFieldMap> futsalFieldMap = futsalFieldService.findAllFutsalFieldMap();
    	model.addAttribute("futsalField",futsalFieldMap);
//    	for (FutsalFieldMap ff : futsalFieldMap) {
//			System.out.println(ff.getFieldName());
//			System.out.println(ff.getLatitude());
////			System.out.println(ff.getDetailLocation());
//		}
    	return "/admin/page/map";
    }
    
    //create user 
    @RequestMapping(path="/create/user", method = RequestMethod.POST)
    String createUser(@ModelAttribute Account account){
    	accountService.saveUser(account);
    	return "redirect:/admin/user";
    }
  //create user 
    @RequestMapping(path="/create/field", method = RequestMethod.POST)
    String createField(@ModelAttribute FutsalField futsalField){
    	futsalFieldService.saveField(futsalField);
    	return "redirect:/admin/user";
    }
    
    //edit field
    @RequestMapping(path="/edit-field", method = RequestMethod.POST)
    String editUser(@ModelAttribute Account account){
    	accountService.saveUser(account);
    	return "redirect:/admin/page/view-lapangan";
    }
    
    @RequestMapping(value = {"/logout"}, method = RequestMethod.POST)
    public String logout(){
        return "redirect:/";
    }
    
    @RequestMapping(value = "/view-lapangan/{id}", method = RequestMethod.GET)
    public String viewField(@PathVariable int id, Model model){
    	FutsalField futsalFieldView = futsalFieldService.findFutsalFieldById(id);
        model.addAttribute("view",futsalFieldView);
        String number = futsalFieldView.getPhone();
        String[] result = number.split(",");
        model.addAttribute("phone", result);
        return "/admin/page/view-lapangan";
    }

    @RequestMapping(value = "/edit-field/{id}", method = RequestMethod.GET)
    public String editField(@PathVariable int id, Model model){
    	FutsalField futsalFieldEdit = futsalFieldService.findFutsalFieldById(id);
        model.addAttribute("view",futsalFieldEdit);
        
        List<DetailPrice> detailPrices = detailPriceService.findByFutsalField(futsalFieldEdit);
        model.addAttribute("detailPrice", detailPrices);
        model.addAttribute("futsalField", new FutsalField());
        String number = futsalFieldEdit.getPhone();
        String[] result = number.split(",");
        model.addAttribute("phone", result);
        
        model.addAttribute("location",locationService.viewAllField());

        
//        List<Location> listLocation = locationService.viewAllField();
//        model.addAttribute("location", listLocation);
        return "/admin/page/edit-field";
    }

}