package com.paulmarten.availaball.validators;

/**
 * Created by paulms on 7/5/2017.
 */

import com.paulmarten.availaball.model.Account;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

public class PasswordMatchValidator implements ConstraintValidator<PasswordMatch, Account>{
    @Override
    public void initialize(PasswordMatch constraintAnnotation) {
        // TODO Auto-generated method stub

    }

    @Override
    public boolean isValid(Account user, ConstraintValidatorContext context) {
        String plainPassword = user.getPlainPassword();
        String repeatPasword = user.getRepeatPassword();

        if(plainPassword == null || plainPassword.length() == 0){
            return true;
        }

        if(plainPassword==null || !plainPassword.equals(repeatPasword)){
            return false;
        }

        return true;
    }
}
