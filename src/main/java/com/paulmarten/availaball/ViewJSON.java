package com.paulmarten.availaball;

import org.springframework.data.jpa.datatables.mapping.DataTablesOutput;

/**
 * Created by paulms on 6/16/2017.
 */
public class ViewJSON {
    public interface AccountInFutsalFieldView{}
    public interface FutsalField extends Base,ListFutsalFieldAndroid{}
    public interface ListFutsalFieldAndroid extends Base{}
    public interface DetailAccount extends Account{}
    public interface DetailFutsalField extends Base,Account,ListFutsalFieldAndroid,DataTablesOutput.View{}
    public interface Base{}
    public interface Location extends Base{}
    public interface Account extends DataTablesOutput.View{}
    public interface DetailPrice extends Base{}
}
