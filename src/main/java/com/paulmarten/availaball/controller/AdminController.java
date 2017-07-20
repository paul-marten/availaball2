package com.paulmarten.availaball.controller;

import java.io.Console;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.view.RedirectView;

import com.paulmarten.availaball.model.Account;
import com.paulmarten.availaball.model.FutsalField;
import com.paulmarten.availaball.service.FutsalFieldService;

/**
 * Created by paulms on 6/14/2017.
 */
@Controller
@RequestMapping("/admin")
public class AdminController {
	
	@Autowired
	private FutsalFieldService futsalFieldService;
	
    @RequestMapping(path="/index", method= RequestMethod.GET)
    public String goIndex(){
        return "/admin/index";
    }

    @RequestMapping(path="/user", method= RequestMethod.GET)
    public String goUser(Model model){
    	model.addAttribute("account", new Account());
        return "/admin/user";
    }

    @RequestMapping(value = {"/logout"}, method = RequestMethod.POST)
    public String logout(){
        return "redirect:/";
    }
    
    @RequestMapping(value = "/view-lapangan/{id}")
    public String viewField(@PathVariable int id, Model model){
        model.addAttribute("view",futsalFieldService.findFutsalFieldById(id));
        return "/admin/view-lapangan";
    }
    
//    @RequestMapping(value = "/delete-field/{id}")
//    public String editField(@PathVariable int id, Model model){
//    	futsalFieldService.deleteFutsalField(id);
//        return "/admin/index";
////    	return "redirect:admin/index";
//    }
}
