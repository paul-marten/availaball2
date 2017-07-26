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
			        var Form1 = $('.senin form:first'),
			            curEntry = $(this).parents('.entry:first'),
			            nEntry = $(curEntry.clone()).appendTo(Form1);
	
			        nEntry.find('input').val('');
			        Form1.find('.entry:not(:last) .btn-add_2')
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

$(function()
		{	
		    $(document)
		    	
			    .on('click', '.btn-add_3', function(e)
			    {
			        e.preventDefault();
			        var Form2 = $('.selasa form:first'),
			            curEntry = $(this).parents('.entry:first'),
			            nEntry = $(curEntry.clone()).appendTo(Form2);
	
			        nEntry.find('input').val('');
			       Form2.find('.entry:not(:last) .btn-add_3')
			            .removeClass('btn-add_3').addClass('btn-remove')
			            .removeClass('btn-success').addClass('btn-danger')
			            .html('<span class="icon_minus" ></span>');
			       	$("#green-round_3").prop('id', 'red-round_3');
			    	}
			    )    
		    .on('click', '.btn-remove', function(e){		
			    $(this).parents('.entry:first').remove();
				e.preventDefault();
				return false;		
			});

		});


$(function()
		{	
		    $(document)
		    	
			    .on('click', '.btn-add_4', function(e)
			    {
			        e.preventDefault();
			        var Form3 = $('.rabu form:first'),
			            curEntry = $(this).parents('.entry:first'),
			            nEntry = $(curEntry.clone()).appendTo(Form3);
	
			        nEntry.find('input').val('');
			       Form3.find('.entry:not(:last) .btn-add_4')
			            .removeClass('btn-add_4').addClass('btn-remove')
			            .removeClass('btn-success').addClass('btn-danger')
			            .html('<span class="icon_minus" ></span>');
			       	$("#green-round_4").prop('id', 'red-round_4');
			    	}
			    )    
		    .on('click', '.btn-remove', function(e){		
			    $(this).parents('.entry:first').remove();
				e.preventDefault();
				return false;		
			});

		});

$(function()
		{	
		    $(document)
		    	
			    .on('click', '.btn-add_5', function(e)
			    {
			        e.preventDefault();
			        var Form4 = $('.kamis form:first'),
			            curEntry = $(this).parents('.entry:first'),
			            nEntry = $(curEntry.clone()).appendTo(Form4);
	
			        nEntry.find('input').val('');
			       Form4.find('.entry:not(:last) .btn-add_5')
			            .removeClass('btn-add_5').addClass('btn-remove')
			            .removeClass('btn-success').addClass('btn-danger')
			            .html('<span class="icon_minus" ></span>');
			       	$("#green-round_5").prop('id', 'red-round_5');
			    	}
			    )    
		    .on('click', '.btn-remove', function(e){		
			    $(this).parents('.entry:first').remove();
				e.preventDefault();
				return false;		
			});

		});


$(function()
		{	
		    $(document)
		    	
			    .on('click', '.btn-add_6', function(e)
			    {
			        e.preventDefault();
			        var Form5 = $('.jumat form:first'),
			            curEntry = $(this).parents('.entry:first'),
			            nEntry = $(curEntry.clone()).appendTo(Form5);
	
			        nEntry.find('input').val('');
			       Form5.find('.entry:not(:last) .btn-add_6')
			            .removeClass('btn-add_6').addClass('btn-remove')
			            .removeClass('btn-success').addClass('btn-danger')
			            .html('<span class="icon_minus" ></span>');
			       	$("#green-round_6").prop('id', 'red-round_6');
			    	}
			    )    
		    .on('click', '.btn-remove', function(e){		
			    $(this).parents('.entry:first').remove();
				e.preventDefault();
				return false;		
			});

		});


$(function()
		{	
		    $(document)
		    	
			    .on('click', '.btn-add_7', function(e)
			    {
			        e.preventDefault();
			        var Form6 = $('.sabtu form:first'),
			            curEntry = $(this).parents('.entry:first'),
			            nEntry = $(curEntry.clone()).appendTo(Form6);
	
			        nEntry.find('input').val('');
			       Form6.find('.entry:not(:last) .btn-add_7')
			            .removeClass('btn-add_7').addClass('btn-remove')
			            .removeClass('btn-success').addClass('btn-danger')
			            .html('<span class="icon_minus" ></span>');
			       	$("#green-round_7").prop('id', 'red-round_7');
			    	}
			    )    
		    .on('click', '.btn-remove', function(e){		
			    $(this).parents('.entry:first').remove();
				e.preventDefault();
				return false;		
			});

		});

$(function()
		{	
		    $(document)
		    	
			    .on('click', '.btn-add_8', function(e)
			    {
			        e.preventDefault();
			        var Form7 = $('.minggu form:first'),
			            curEntry = $(this).parents('.entry:first'),
			            nEntry = $(curEntry.clone()).appendTo(Form7);
	
			        nEntry.find('input').val('');
			       Form7.find('.entry:not(:last) .btn-add_8')
			            .removeClass('btn-add_8').addClass('btn-remove')
			            .removeClass('btn-success').addClass('btn-danger')
			            .html('<span class="icon_minus" ></span>');
			       	$("#green-round_8").prop('id', 'red-round_8');
			    	}
			    )    
		    .on('click', '.btn-remove', function(e){		
			    $(this).parents('.entry:first').remove();
				e.preventDefault();
				return false;		
			});

		});