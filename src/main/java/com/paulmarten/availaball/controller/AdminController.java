package com.paulmarten.availaball.controller;

import java.security.Principal;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.paulmarten.availaball.model.Account;
import com.paulmarten.availaball.service.AccountService;
import com.paulmarten.availaball.service.FutsalFieldService;

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
	
    @RequestMapping(path="/index", method= RequestMethod.GET)
    public String goIndex(Model model,Principal principal, HttpSession session){
    	Account account = accountService.findAccountByUsername(principal.getName());
    	DateTimeFormatter dtf = DateTimeFormatter.ofPattern("dd MMMM yyyy");
    	LocalDate localDate = LocalDate.now();
    	session.setAttribute("mySessionAttributeAccount", account);
    	session.setAttribute("mySessionAttributeTime", dtf.format(localDate));
//    	model.addAttribute("account", account);
//    	model.addAttribute("time", dtf.format(localDate));
        return "/admin/page/index";
    }

    @RequestMapping(path="/user", method= RequestMethod.GET)
    public String goUser(Model model,Principal principal){
    	Account account = accountService.findAccountByUsername(principal.getName());
    	DateTimeFormatter dtf = DateTimeFormatter.ofPattern("d MMMM y");
    	LocalDate localDate = LocalDate.now();
    	model.addAttribute("account", account);
    	model.addAttribute("time", dtf.format(localDate));
        return "/admin/page/user";
    }
    
    @RequestMapping(path="/map", method= RequestMethod.GET)
    public String goMap(Model model,Principal principal){
    	Account account = accountService.findAccountByUsername(principal.getName());
    	DateTimeFormatter dtf = DateTimeFormatter.ofPattern("d MMMM y");
    	LocalDate localDate = LocalDate.now();
    	model.addAttribute("account", account);
    	model.addAttribute("time", dtf.format(localDate));
    	return "/admin/page/map";
    }
    
    //create user 
    @RequestMapping(path="/create/user", method = RequestMethod.POST)
    String createUser(@ModelAttribute Account account){
    	String password = new BCryptPasswordEncoder().encode(account.getPlainPassword());
    	account.setPassword(password);
    	account.setTotalField(0);
    	account.setRole("ROLE_SURVEYER");
    	accountService.saveUser(account);
    	return "redirect:/admin/user";
    }
    
    //edit user
    @RequestMapping(path="/edit/user", method = RequestMethod.POST)
    String editUser(@ModelAttribute Account account, @ModelAttribute Account accountSave){
    	System.out.println(account.getId());
//    	accountSave = new Account(accountService.findAccountById(account.getId()));
//    	accountService.saveUser(account);
//    	accountService.saveUser(account);
    	return "redirect:/admin/user";
    }
    
    @RequestMapping(value = {"/logout"}, method = RequestMethod.POST)
    public String logout(){
        return "redirect:/";
    }
    
    @RequestMapping(value = "/view-lapangan/{id}")
    public String viewField(@PathVariable int id, Model model){
        model.addAttribute("view",futsalFieldService.findFutsalFieldById(id));
        return "/admin/page/view-lapangan";
    }

    @RequestMapping(value = "/edit-field/{id}")
    public String editField(@PathVariable int id, Model model){
        model.addAttribute("view",futsalFieldService.findFutsalFieldById(id));
        return "/admin/page/edit-field";
    }
    @RequestMapping(value = "/current-map/{id}")
    public String viewMap(@PathVariable int id, Model model){
        model.addAttribute("edit",futsalFieldService.findFutsalFieldById(id));
        return "/admin/page/current-map";
    }


}
