//Phone
$(function()
{	 
	var max_button = 3; 
	var x=1;
    $(document)
    	
	    .on('click', '.btn-add', function(e)
	    {
	        e.preventDefault();
	        console.log(x);
				var controlForm = $('.controls form:first'),
				currentEntry = $(this).parents('.entry:first');
	            
	        if(x<2){

	            var newEntry = $(currentEntry.clone()).appendTo(controlForm);

		        newEntry.find('input').val('');
		        controlForm.find('.entry:not(:last) .btn-add')
	            .removeClass('btn-add').addClass('btn-remove')
	            .removeClass('btn-success').addClass('btn-danger')
	            .html('<span class="icon_minus"></span>');
	        	$("#green-round").prop('id', 'red-round');
	        

	        	x++;
	        	console.log(x);
	        }
	        else if( x < max_button){
	        
	        	var lastEntry = $(currentEntry.clone()).appendTo(controlForm);
	        	lastEntry.find('input').val('');
	        	controlForm.find('.entry:not(:last) .btn-add')
	            .removeClass('btn-add').addClass('btn-remove')
	            .removeClass('btn-success').addClass('btn-danger')
	            .html('<span class="icon_minus"></span>');
	        	$("#green-round").prop('id', 'red-round');

	        	console.log(x);
	        	if(x = 2){
	        		controlForm.find('.entry:last .btn-add')
		            .removeClass('btn-add').addClass('btn-remove')
		            .removeClass('btn-success').addClass('btn-danger')
		            .html('<span class="icon_minus"></span>');
		        	$("#green-round").prop('id', 'red-round');
	        	}
	        	x++;
	        }
	       
	        	
	    	}      
	    )
	    
    .on('click', '.btn-remove', function(e){
    	var controlForm = $('.controls form:first'),
		currentEntry = $(this).parents('.entry:first');
    	if(x == 3){
    		x--;
    		$(this).parents('.entry:first').remove();

    		controlForm.find('.entry:not(:first) .btn-remove')
    		.removeClass('btn-remove').addClass('btn-add')
		    .removeClass('btn-danger').addClass('btn-success')
            .html('<span class="icon_add"></span>');
         	$("#green-round").prop('id', 'red-round');
    	}
    	else{	
    		x--;
	    	$(this).parents('.entry:first').remove();

	    }
		e.preventDefault();
		console.log(x);	
		return false;		
	});

});





/*--------------------------------------senin--------------------------------------------*/
$(function()
		{	
		    $(document)
		    	
			    .on('click', '.btn-add_2', function(e)
			    {
			      
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

				$(document).on('change', '#senin', function(){

			    if($('#senin').prop('checked')){
			       $('#start_senin').removeAttr('disabled');
			            $('#end_senin').removeAttr('disabled');
			                 $('#fields-round').removeAttr('disabled');
			                 $('#green-round_2').removeAttr('disabled');
			                 $('#red-round_2').removeAttr('disabled');
			    } else {
			       
			   			var Form1 = $('#entry form:not(:last)'),
			            curEntry = $(this).parents('#entry form:first'),
			            nEntry = $(Form1.clone()).appendTo(curEntry);
						console.log(Form1);

			            $('#entry input:not(:first)').remove();	
			            $('#entry input:not(:last)').remove();

			       		$('#start_senin').attr('disabled','disabled');
			            $('#end_senin').attr('disabled','disabled');
			                 $('#fields-round').attr('disabled','disabled');
			                 $('#green-round_2').attr('disabled','disabled');
			                 $('#red-round_2').attr('disabled','disabled');

			           		    }
			});


		});

/*
$('.time').on('change', function(e) {
var from_time = Date.parse($(this).val());

var from_time_adj = new Date();
from_time_adj.setTime(from_time.getTime() + (60 * 60));

$('.to option').each(function(index, el) {
var to_time = Date.parse($(el).val());
  if (to_time < from_time_adj) {
      $(el).attr('disabled', true);
   }
});
});

$('.timed').on('change', function(e) {

var to_time = Date.parse($(this).val());
var to_time_adj = new Date();

to_time_adj.setTime(to_time.getTime() - (60 * 60 * 1000));
$('.from option').each(function(index, el) {
var from_time = Date.parse($(el).val());
  if (from_time > to_time_adj) {
      $(el).attr('disabled', true);
   }
});
});*/

/*--------------------------------------selasa--------------------------------------------*/
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

/*--------------------------------------rabu--------------------------------------------*/
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



