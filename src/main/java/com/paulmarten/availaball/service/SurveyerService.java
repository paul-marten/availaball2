package com.paulmarten.availaball.service;

import com.paulmarten.availaball.model.Account;
import com.paulmarten.availaball.repository.SurveyerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by paulms on 6/14/2017.
 */
@Service
public class SurveyerService {

    @Autowired
    private SurveyerRepository surveyerRepository;


    public Account getAccount(int idAccount) {
        return surveyerRepository.findOne(idAccount);
    }

    public void deleteActivity(int idAccount) {
        surveyerRepository.delete(idAccount);
    }

    public Account saveOrUpdateActivity(Account activity) {
        return surveyerRepository.save(activity);
    }

    public String checkAccount(String username, String password) {
        return "Sukses";
    }
}
