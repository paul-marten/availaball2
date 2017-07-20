package com.paulmarten.availaball;

import com.fasterxml.jackson.annotation.JsonView;
import org.springframework.data.jpa.datatables.mapping.DataTablesOutput;

/**
 * Created by paulms on 7/18/2017.
 */
public class ResponseMessage {
    private int currentPage;
    private int totalPage;
    private Object object;

    @JsonView(DataTablesOutput.View.class)
    public int getCurrentPage() {
        return currentPage;
    }

    public void setCurrentPage(int currentPage) {
        this.currentPage = currentPage;
    }

    @JsonView(DataTablesOutput.View.class)
    public int getTotalPage() {
        return totalPage;
    }

    public void setTotalPage(int totalPage) {
        this.totalPage = totalPage;
    }

    @JsonView(DataTablesOutput.View.class)
    public Object getObject() {
        return object;
    }

    public void setObject(Object object) {
        this.object = object;
    }
}
