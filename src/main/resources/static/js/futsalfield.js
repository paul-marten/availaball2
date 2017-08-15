function centerModal(id) {
       $(this).css('display', 'block');
	   var $dialog = $(this).find(".modal-dialog");
	   var offset = ($(window).height() - $dialog.height()) / 2;
	   $dialog.css("margin-top", offset);
       $('#button_delete').on('click', function(event){
    	   var futsalField = {};
    	   futsalField.idFutsalField = id;
    	   var idFutsalField = id;
    	   $.ajax({
    		   	 type: "POST",
	             url: "/delete-field",
	             data: futsalField,
	             timeout: 600000,
	             success: function (data) {
	                 console.log("sukses");
	                 window.location.href="/admin/index/";
	             },
	             error: function (e) {
	                 console.log("gagal");
	             }
		 });
       });				          
}

$(document).ready( function () {
    var table = $('#futsalfieldsTable').DataTable({
        "ajax": "/futsalfields",
        "destroy": true,
        "deferRender": true,
        "processing": true,
        'serverSide' : true,
        "responsive": true,
        "paging":true,
        "pageLength":10,
        "ordering":true,
        "columnDefs": [ {
            "searchable": false,
            "orderable": false,
            "targets": 0
        } ],
       
        columns : [
           {"data":null,
        	   "orderable": false,
        	  "sClass":"buts",
        	
           },
           {"data" : 'fieldName',
            "sClass":"lap heights",
            "orderable": false, 
            "createdCell" : function (td, cellData, rowData, row, col) {
            		  var link = $('<a>',{'href':'/admin/view-lapangan/'+rowData.idFutsalField}).append( rowData.fieldName+'</a>');
                      $(td).html(link);
     
                    }
            },
            {
                "data" : 'location',
                "sClass" : "loc",
                "orderable": false,
            },
            {
                "data" : 'numberOfField',
                "sClass": "text-center drops",
                "orderable": false,
            },
            {
                "data" : 'price',
                "sClass": "latest",
                "orderable": false,
            },
            {
                "data" : 'account.name',
                "sClass": "user",
                "orderable": false,
                render: function (data, type, row) {
                    if (row.account) {
                        return row.account.name;
                    }
                    return '';
                }
            },
//@formatter:off

            {
                "data" : 'idFutsalField',
                "sClass":"drop",
                "searchable":false,
                "orderable": false,
                "createdCell" : function (td, cellData, rowData, row, col) {
                	
			          var btngroup = $('<div>',{'class':'btn-group' });
			    	  var dropdowntoggle =$('<a>',{'class':'dropdown-toggle','data-toggle':'dropdown'});
			    	  var icon = $('<i>',{'class':'icon-gear '});
			    	  var dropdownmenu = $('<ul>',{'class':'dropdown-menu pull-right ', 'id':'dropdown_action'});
			          var edit = $('<a>',{'href':'/admin/edit-field/'+rowData.idFutsalField });
			          var li= $('<li>');
			          var deletes = $('<a>',{ 'data-toggle':'modal', 'data-target':'#myModal', 'onclick':"centerModal('"+rowData.idFutsalField+"')" });     
			          var drop = $(btngroup).append($(dropdowntoggle).append(icon))
			        		  .append($(dropdownmenu)
			        				  .append($(li)
			        						  .append($(edit)
			        								  .append('Edit')))
			        								  .append($(li).append($(deletes)
			        										  .append('Delete'))));
			          $(td).html(drop);
			          $('.modal').on('show.bs.modal', centerModal);
			          $(window).on("resize", function () {
			              $('.modal:visible').each(centerModal);
			          });
                }
            }]
    })
    
   
	table.on( 'draw.dt', function () {
		table.column(0).nodes().each( function (cell, i) {
	    // console.log(cell);
		cell.innerHTML = table.page.info().start + (i+1);
		} );
	} ).draw();
		
		 
	$('#searchName').on('keyup', function(){
		table
			.columns(1)
			.search(this.value)
			.draw();
	});
$("#lokasi").on('change', function() {
    //filter by selected value on second column
    table.column(2).search($(this).val()).draw();
});    
	
	$('#searchLocation').ready(function() {
		 $('#futsalFieldsTable').DataTable( {
		   initComplete: function () {
		   this.api().columns().every( function () {
		       var column = this;
		       var select = $('<select><option value=""></option></select>')
		                    .appendTo( $(column.footer()).empty() )
		                    .on( 'change', function () {
		                    var val = $.fn.dataTable.util.escapeRegex($(this).val());
		 
		                        column
		                            .search( val ? '^'+val+'$' : '', true, false )
		                            .draw();
		                    } );
		 
		                column.data().unique().sort().each( function ( d, j ) {
		                    select.append( '<option value="'+d+'">'+d+'</option>' )
		                } );
		            } );
		        }
		    } );
	});
});
//@formatter:on