//Phone
$(function()
{	
    $(document)
    	
	    .on('click', '.btn-add', function(e)
	    {
	        e.preventDefault();
	        
	        var controlForm = $('.controls form:first'),
	            currentEntry = $(this).parents('.entry:first'),
	            newEntry = $(currentEntry.clone()).appendTo(controlForm);
	        	
	        newEntry.find('input').val('');
	        controlForm.find('.entry:not(:last) .btn-add')
	            .removeClass('btn-add').addClass('btn-remove')
	            .removeClass('btn-success').addClass('btn-danger')
	            .html('<span class="icon_minus"></span>');
	        	$("#green-round").prop('id', 'red-round');
	    	}      
	    )
	    
    .on('click', '.btn-remove', function(e){		
	    $(this).parents('.entry:first').remove();
		e.preventDefault();
		return false;		
	});

});

//Harga
//Senin
$(function()
		{	
		    $(document)
		    	
			    .on('click', '.btn-add_2', function(e)
			    {
			        e.preventDefault();
			        var konForm = $('.kon form:first'),
			            curEntry = $(this).parents('.entry:first'),
			            nEntry = $(curEntry.clone()).appendTo(konForm);
	
			        nEntry.find('input').val('');
			        konForm.find('.entry:not(:last) .btn-add_2')
			            .removeClass('btn-add_2').addClass('btn-remove')
			            .removeClass('btn-success').addClass('btn-danger')
			            .html('<span class="icon_minus" ></span>');
			       	$("#green-round_2").prop('id', 'red-round_2');
			    	}
			    )    
		    .on('click', '.btn-remove', function(e){		
			    $(this).parents('.entry:first').remove();
				e.preventDefault();
				return false;		
			});

		});

