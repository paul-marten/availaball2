package com.paulmarten.availaball;

import org.springframework.data.jpa.datatables.mapping.DataTablesOutput;

/**
 * Created by paulms on 6/16/2017.
 */
public class ViewJSON {
    public interface AccountInFutsalFieldView{}
    public interface FutsalField extends Account{}
    public interface FutsalFieldMap{}
    public interface DetailAccount extends Account{}
    public interface Base extends FutsalField{}
    public interface Account{}
}
