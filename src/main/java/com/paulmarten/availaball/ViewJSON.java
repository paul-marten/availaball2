package com.paulmarten.availaball;

import org.springframework.data.jpa.datatables.mapping.DataTablesOutput;

/**
 * Created by paulms on 6/16/2017.
 */
public class ViewJSON {
    public interface AccountInFutsalFieldView{}
    public interface AccountView extends DataTablesOutput.View{}
    public interface FutsalFieldView{}
}
