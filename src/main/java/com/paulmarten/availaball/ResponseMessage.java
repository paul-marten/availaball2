package com.paulmarten.availaball;

import com.fasterxml.jackson.annotation.JsonView;
import org.springframework.data.jpa.datatables.mapping.DataTablesOutput;

/**
 * Created by paulms on 7/18/2017.
 */
public class ResponseMessage {
	private String code;
	private String message;
    private int currentPage;
    private int totalPage;
    private Object object;
    
    @JsonView(ViewJSON.Base.class)
    public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	@JsonView(ViewJSON.Base.class)
    public int getCurrentPage() {
        return currentPage;
    }

    public void setCurrentPage(int currentPage) {
        this.currentPage = currentPage;
    }

    @JsonView(ViewJSON.Base.class)
    public int getTotalPage() {
        return totalPage;
    }

    public void setTotalPage(int totalPage) {
        this.totalPage = totalPage;
    }

    @JsonView(ViewJSON.Base.class)
    public Object getObject() {
        return object;
    }

    public void setObject(Object object) {
        this.object = object;
    }
    
    @JsonView(ViewJSON.Base.class)
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
}
