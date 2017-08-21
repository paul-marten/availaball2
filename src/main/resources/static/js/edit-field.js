

$(function()
{	 
    $(document).on('click', '.btn-add', function(e)
    {
    	var btn = $('.in').length
        e.preventDefault();

        var controlForm = $('#multi-phone'),
            currentEntry = $(this).parents('.entry:first'),
            newEntry = $(currentEntry.clone()).appendTo(controlForm);	        
	     if (btn<2) {
			controlForm.find('.entry:not(:last) .btn-add')
		    .removeClass('btn-add').addClass('btn-remove')
		    .removeClass('btn-success').addClass('btn-danger remove')
		    .html('<span class="icon_minus"></span>');
		    $("#green-round").prop('id', 'red-round');
		    newEntry.find('input').val('');
	     }

	     else if(btn<3){
	     	controlForm.find('.entry .btn-add')
		    .removeClass('btn-add').addClass('btn-remove')
		    .removeClass('btn-success').addClass('btn-danger remove')
		    .html('<span class="icon_minus"></span>');
		    $("#green-round").prop('id', 'red-round');
		    newEntry.find('input').val('');
	     }
	     console.log(btn)

    }).on('click', '.btn-remove', function(e)

    {	
    	var remove = $('.in').length
    	var controlForm = $('#multi-phone'),
		currentEntry = $(this).parents('.entry:first');
		if(remove == 3){
    		
    		$(this).parents('.entry:first').remove();

    		controlForm.find('.entry:not(:first) .btn-remove')
    		.removeClass('btn-remove').addClass('btn-add')
		    .removeClass('btn-danger remove').addClass('btn-success')
            .html('<span class="icon_add"></span>');
         	$("#green-round").prop('id', 'red-round');
var inputValues = $('.input').map(function() {
    return $(this).val();
}).toArray();



   $('#output').val(inputValues)
    	}
    	else{	
    	
	    	$(this).parents('.entry:first').remove();
var inputValues = $('.input').map(function() {
    return $(this).val();
}).toArray();
console.log(inputValues)



   $('#output').val(inputValues)
	    }
	 
		return false;
	});



});


/*--------------------------------------senin--------------------------------------------*/
$(function()
{
    $(document).on('click', '.btn-add_2', function(e)
    {
        e.preventDefault();

        var controlForm = $(".senin"),
            currentEntry = $(this).parents('.entry:first'),
            newEntry = $(currentEntry.clone()).appendTo(controlForm);

        newEntry.find('input').val('');
        controlForm.find('.entry:not(:last) .btn-add_2')
            .removeClass('btn-add_2').addClass('btn-remove')
            .removeClass('btn-success').addClass('btn-danger')
              .html('<span class="icon_minus" ></span>');
			       		$("#green-round_3").prop('id', 'red-round_3');

			       							$('.field-harga').each(function(index){
				    $(this).attr('name','detail[' + (index ) + ']' +'.price');   
				     $(this).attr('id','detail[' + (index ) + ']' + '.price');  
				    index++;
				    });
				$('.time').each(function(index){
				    $(this).attr('name','detail[' + (index ) + ']' + '.startTime');   
				    $(this).attr('id','detail[' + (index ) + ']' + '.startTime');  
				    index++;
				    });
				$('.timed').each(function(index){
				    $(this).attr('name','detail[' + (index ) + ']' + '.endTime');   
				    $(this).attr('id','detail[' + (index ) + ']' + '.endTime'); 
				    index++;
				    });
				$('.detail').each(function(index){
				    $(this).attr('name','detail[' + (index) + ']' + '.day');   
				    $(this).attr('id','detail[' + (index ) + ']' + '.day'); 
				    index++;
				    });
        
    }).on('click', '.btn-remove', function(e)
    {
		$(this).parents('.entry:first').remove();
							$('.field-harga').each(function(index){
				    $(this).attr('name','detail[' + (index ) + ']' +'.price');   
				     $(this).attr('id','detail[' + (index ) + ']' + '.price');  
				    index++;
				    });
				$('.time').each(function(index){
				    $(this).attr('name','detail[' + (index ) + ']' + '.startTime');   
				    $(this).attr('id','detail[' + (index ) + ']' + '.startTime');  
				    index++;
				    });
				$('.timed').each(function(index){
				    $(this).attr('name','detail[' + (index ) + ']' + '.endTime');   
				    $(this).attr('id','detail[' + (index ) + ']' + '.endTime'); 
				    index++;
				    });
				$('.detail').each(function(index){
				    $(this).attr('name','detail[' + (index) + ']' + '.day');   
				    $(this).attr('id','detail[' + (index ) + ']' + '.day'); 
				    index++;
				    });
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
			       
			   			var Form1 = $('#entry_senin :not(:last)'),
			            current_senin = $(this).parents('#entry_senin :first'),
			            new_senin = $(Form1.clone()).appendTo(current_senin);
						console.log(Form1);

			         if ($('#entry_senin :not(:last-child)')) {

			         	$('#entry_senin:not(:last-child)').remove();
			         }
			        

			       		$('#start_senin').attr('disabled','disabled');
			            $('#end_senin').attr('disabled','disabled');
			                 $('#senin-round').attr('disabled','disabled');
			                 $('#green-round_2').attr('disabled','disabled');
			                 $('#red-round_2').attr('disabled','disabled');
			            $('.senin input[type=text]').val('')
			            $('.senin .timed').prop('selectedIndex',0);
			      		 $('.senin .time').prop('selectedIndex',0);
			           		    }
			});

});
/*--------------------------------------selasa--------------------------------------------*/

$(function()
		{	
		    $(document)
		    	
			    .on('click', '.btn-add_3', function(e)
			    {
			      
			        var Form2= $('.selasa '),
			            current_selasa = $(this).parents('.entry:first'),
			            new_selasa = $(current_selasa.clone()).appendTo(Form2);
	
			        new_selasa.find('input').val('');
			        Form2.find('.entry:not(:last) .btn-add_3')
			            .removeClass('btn-add_3').addClass('btn-remove')
			            .removeClass('btn-success').addClass('btn-danger')
			            .html('<span class="icon_minus" ></span>');
			       		$("#green-round_3").prop('id', 'red-round_3');
						
					$('.field-harga').each(function(index){
				    $(this).attr('name','detail[' + (index ) + ']' +'.price');   
				     $(this).attr('id','detail[' + (index ) + ']' + '.price');  
				    index++;
				    });
				$('.time').each(function(index){
				    $(this).attr('name','detail[' + (index ) + ']' + '.startTime');   
				    $(this).attr('id','detail[' + (index ) + ']' + '.startTime');  
				    index++;
				    });
				$('.timed').each(function(index){
				    $(this).attr('name','detail[' + (index ) + ']' + '.endTime');   
				    $(this).attr('id','detail[' + (index ) + ']' + '.endTime'); 
				    index++;
				    });
				$('.detail').each(function(index){
				    $(this).attr('name','detail[' + (index) + ']' + '.day');   
				    $(this).attr('id','detail[' + (index ) + ']' + '.day'); 
				    index++;
				    });
			    	}
			    )    
		    .on('click', '.btn-remove', function(e){		
			    $(this).parents('.entry:first').remove();
						
						
					$('.field-harga').each(function(index){
				    $(this).attr('name','detail[' + (index ) + ']' +'.price');   
				     $(this).attr('id','detail[' + (index ) + ']' + '.price');  
				    index++;
				    });
				$('.time').each(function(index){
				    $(this).attr('name','detail[' + (index ) + ']' + '.startTime');   
				    $(this).attr('id','detail[' + (index ) + ']' + '.startTime');  
				    index++;
				    });
				$('.timed').each(function(index){
				    $(this).attr('name','detail[' + (index ) + ']' + '.endTime');   
				    $(this).attr('id','detail[' + (index ) + ']' + '.endTime'); 
				    index++;
				    });
				$('.detail').each(function(index){
				    $(this).attr('name','detail[' + (index) + ']' + '.day');   
				    $(this).attr('id','detail[' + (index ) + ']' + '.day'); 
				    index++;
				    });
		    
				e.preventDefault();
				return false;		
			});

				$(document).on('change', '#selasa', function(){

			    if($('#selasa').prop('checked')){
			       $('#start_selasa').removeAttr('disabled');
			            $('#end_selasa').removeAttr('disabled');
			                 $('#selasa-round').removeAttr('disabled');
			                 $('#green-round_3').removeAttr('disabled');
			                 $('#red-round_3').removeAttr('disabled');
			    } else {
			       
			   			var Form2 = $('#entry_selasa :not(:last)'),
			            current_selasa = $(this).parents('#entry_selasa :first '),
			            new_selasa = $(Form2.clone()).appendTo(current_selasa);
						console.log(Form2);

			         if ($('#entry_selasa :not(:last-child)')) {

			         	$('#entry_selasa:not(:last-child)').remove();
			         }
			        

			       		$('#start_selasa').attr('disabled','disabled');
			            $('#end_selasa').attr('disabled','disabled');
			                 $('#selasa-round').attr('disabled','disabled');
			                 $('#green-round_3').attr('disabled','disabled');
			                 $('#red-round_3').attr('disabled','disabled');
			            $('.selasa input[type=text]').val('')
			            $('.selasa .timed').prop('selectedIndex',0);
			      		 $('.selasa .time').prop('selectedIndex',0);

			           		    }
			});


		});

/*--------------------------------------rabu--------------------------------------------*/
$(function()
		{	
		    $(document)
		    	
			    .on('click', '.btn-add_4', function(e)
			    {
			      
			        var Form3= $('.rabu '),
			            current_rabu = $(this).parents('.entry:first'),
			            new_rabu = $(current_rabu.clone()).appendTo(Form3);
	
			        new_rabu.find('input').val('');
			        Form3.find('.entry:not(:last) .btn-add_4')
			            .removeClass('btn-add_4').addClass('btn-remove')
			            .removeClass('btn-success').addClass('btn-danger')
			            .html('<span class="icon_minus" ></span>');
			       		$("#green-round_4").prop('id', 'red-round_4');
						
					$('.field-harga').each(function(index){
				    $(this).attr('name','detail[' + (index ) + ']' +'.price');   
				     $(this).attr('id','detail[' + (index ) + ']' + '.price');  
				    index++;
				    });
				$('.time').each(function(index){
				    $(this).attr('name','detail[' + (index ) + ']' + '.startTime');   
				    $(this).attr('id','detail[' + (index ) + ']' + '.startTime');  
				    index++;
				    });
				$('.timed').each(function(index){
				    $(this).attr('name','detail[' + (index ) + ']' + '.endTime');   
				    $(this).attr('id','detail[' + (index ) + ']' + '.endTime'); 
				    index++;
				    });
				$('.detail').each(function(index){
				    $(this).attr('name','detail[' + (index) + ']' + '.day');   
				    $(this).attr('id','detail[' + (index ) + ']' + '.day'); 
				    index++;
				    });

			    	}
			    )    
		    .on('click', '.btn-remove', function(e){		
			    $(this).parents('.entry:first').remove();
						
						
					$('.field-harga').each(function(index){
				    $(this).attr('name','detail[' + (index ) + ']' +'.price');   
				     $(this).attr('id','detail[' + (index ) + ']' + '.price');  
				    index++;
				    });
				$('.time').each(function(index){
				    $(this).attr('name','detail[' + (index ) + ']' + '.startTime');   
				    $(this).attr('id','detail[' + (index ) + ']' + '.startTime');  
				    index++;
				    });
				$('.timed').each(function(index){
				    $(this).attr('name','detail[' + (index ) + ']' + '.endTime');   
				    $(this).attr('id','detail[' + (index ) + ']' + '.endTime'); 
				    index++;
				    });
				$('.detail').each(function(index){
				    $(this).attr('name','detail[' + (index) + ']' + '.day');   
				    $(this).attr('id','detail[' + (index ) + ']' + '.day'); 
				    index++;
				    });

				e.preventDefault();
				return false;		
			});

				$(document).on('change', '#rabu', function(){

			    if($('#rabu').prop('checked')){
			       $('#start_rabu').removeAttr('disabled');
			            $('#end_rabu').removeAttr('disabled');
			                 $('#rabu-round').removeAttr('disabled');
			                 $('#green-round_4').removeAttr('disabled');
			                 $('#red-round_4').removeAttr('disabled');

			    } else {
			       
			   			var Form3 = $('#entry_rabu :not(:last)'),
			            current_rabu = $(this).parents('#entry_rabu :first'),
			            new_rabu = $(Form3.clone()).appendTo(current_rabu);
						console.log(Form3);

			         if ($('#entry_rabu :not(:last-child)')) {

			         	$('#entry_rabu:not(:last-child)').remove();
			         }
			        

			       		$('#start_rabu').attr('disabled','disabled');
			            $('#end_rabu').attr('disabled','disabled');
			                 $('#rabu-round').attr('disabled','disabled');
			                 $('#green-round_4').attr('disabled','disabled');
			                 $('#red-round_4').attr('disabled','disabled');
			            $('.rabu input[type=text]').val('')
			            $('.rabu .timed').prop('selectedIndex',0);
			      		 $('.rabu .time').prop('selectedIndex',0);
			           		    }
			});


		});

/*-----------------------------------------kamis----------------------------------------------------*/
$(function()
		{	
		    $(document)
		    	
			    .on('click', '.btn-add_5', function(e)
			    {
			      
			        var Form4= $('.kamis '),
			            current_kamis = $(this).parents('.entry:first'),
			            new_kamis = $(current_kamis.clone()).appendTo(Form4);
	
			        new_kamis.find('input').val('');
			        Form4.find('.entry:not(:last) .btn-add_5')
			            .removeClass('btn-add_5').addClass('btn-remove')
			            .removeClass('btn-success').addClass('btn-danger')
			            .html('<span class="icon_minus" ></span>');
			       		$("#green-round_5").prop('id', 'red-round_5');
						
						
					$('.field-harga').each(function(index){
				    $(this).attr('name','detail[' + (index ) + ']' +'.price');   
				     $(this).attr('id','detail[' + (index ) + ']' + '.price');  
				    index++;
				    });
				$('.time').each(function(index){
				    $(this).attr('name','detail[' + (index ) + ']' + '.startTime');   
				    $(this).attr('id','detail[' + (index ) + ']' + '.startTime');  
				    index++;
				    });
				$('.timed').each(function(index){
				    $(this).attr('name','detail[' + (index ) + ']' + '.endTime');   
				    $(this).attr('id','detail[' + (index ) + ']' + '.endTime'); 
				    index++;
				    });
				$('.detail').each(function(index){
				    $(this).attr('name','detail[' + (index) + ']' + '.day');   
				    $(this).attr('id','detail[' + (index ) + ']' + '.day'); 
				    index++;
				    });

			    	}
			    )    
		    .on('click', '.btn-remove', function(e){		
			    $(this).parents('.entry:first').remove();
						
					$('.field-harga').each(function(index){
				    $(this).attr('name','detail[' + (index ) + ']' +'.price');   
				     $(this).attr('id','detail[' + (index ) + ']' + '.price');  
				    index++;
				    });
				$('.time').each(function(index){
				    $(this).attr('name','detail[' + (index ) + ']' + '.startTime');   
				    $(this).attr('id','detail[' + (index ) + ']' + '.startTime');  
				    index++;
				    });
				$('.timed').each(function(index){
				    $(this).attr('name','detail[' + (index ) + ']' + '.endTime');   
				    $(this).attr('id','detail[' + (index ) + ']' + '.endTime'); 
				    index++;
				    });
				$('.detail').each(function(index){
				    $(this).attr('name','detail[' + (index) + ']' + '.day');   
				    $(this).attr('id','detail[' + (index ) + ']' + '.day'); 
				    index++;
				    });
				e.preventDefault();
				return false;		
			});

				$(document).on('change', '#kamis', function(){

			    if($('#kamis').prop('checked')){
			       $('#start_kamis').removeAttr('disabled');
			            $('#end_kamis').removeAttr('disabled');
			                 $('#kamis-round').removeAttr('disabled');
			                 $('#green-round_5').removeAttr('disabled');
			                 $('#red-round_5').removeAttr('disabled');
			    } else {
			       
			   			var Form4 = $('#entry_kamis :not(:last)'),
			            current_kamis = $(this).parents('#entry_kamis :first'),
			            new_kamis = $(Form4.clone()).appendTo(current_kamis);
						console.log(Form4);

			         if ($('#entry_kamis :not(:last-child)')) {

			         	$('#entry_kamis:not(:last-child)').remove();
			         }
			        

			       		$('#start_kamis').attr('disabled','disabled');
			            $('#end_kamis').attr('disabled','disabled');
			                 $('#kamis-round').attr('disabled','disabled');
			                 $('#green-round_5').attr('disabled','disabled');
			                 $('#red-round_5').attr('disabled','disabled');
			            $('.kamis input[type=text]').val('')
			            $('.kamis .timed').prop('selectedIndex',0);
			      		 $('.kamis .time').prop('selectedIndex',0);
			           		    }
			});


		});
/*--------------------------------jumat---------------------------------------------*/
$(function()
		{	
		    $(document)
		    	
			    .on('click', '.btn-add_6', function(e)
			    {
			      
			        var Form5= $('.jumat'),
			            current_jumat = $(this).parents('.entry:first'),
			            new_jumat = $(current_jumat.clone()).appendTo(Form5);
	
			        new_jumat.find('input').val('');
			        Form5.find('.entry:not(:last) .btn-add_6')
			            .removeClass('btn-add_6').addClass('btn-remove')
			            .removeClass('btn-success').addClass('btn-danger')
			            .html('<span class="icon_minus" ></span>');
			       		$("#green-round_6").prop('id', 'red-round_6');
						
						
					$('.field-harga').each(function(index){
				    $(this).attr('name','detail[' + (index ) + ']' +'.price');   
				     $(this).attr('id','detail[' + (index ) + ']' + '.price');  
				    index++;
				    });
				$('.time').each(function(index){
				    $(this).attr('name','detail[' + (index ) + ']' + '.startTime');   
				    $(this).attr('id','detail[' + (index ) + ']' + '.startTime');  
				    index++;
				    });
				$('.timed').each(function(index){
				    $(this).attr('name','detail[' + (index ) + ']' + '.endTime');   
				    $(this).attr('id','detail[' + (index ) + ']' + '.endTime'); 
				    index++;
				    });
				$('.detail').each(function(index){
				    $(this).attr('name','detail[' + (index) + ']' + '.day');   
				    $(this).attr('id','detail[' + (index ) + ']' + '.day'); 
				    index++;
				    });

			    	}
			    )   
		    .on('click', '.btn-remove', function(e){		
			    $(this).parents('.entry:first').remove();
						
						
					$('.field-harga').each(function(index){
				    $(this).attr('name','detail[' + (index ) + ']' +'.price');   
				     $(this).attr('id','detail[' + (index ) + ']' + '.price');  
				    index++;
				    });
				$('.time').each(function(index){
				    $(this).attr('name','detail[' + (index ) + ']' + '.startTime');   
				    $(this).attr('id','detail[' + (index ) + ']' + '.startTime');  
				    index++;
				    });
				$('.timed').each(function(index){
				    $(this).attr('name','detail[' + (index ) + ']' + '.endTime');   
				    $(this).attr('id','detail[' + (index ) + ']' + '.endTime'); 
				    index++;
				    });
				$('.detail').each(function(index){
				    $(this).attr('name','detail[' + (index) + ']' + '.day');   
				    $(this).attr('id','detail[' + (index ) + ']' + '.day'); 
				    index++;
				    });
	
				e.preventDefault();
				return false;		
			});

				$(document).on('change', '#jumat', function(){

			    if($('#jumat').prop('checked')){
			       $('#start_jumat').removeAttr('disabled');
			            $('#end_jumat').removeAttr('disabled');
			                 $('#jumat-round').removeAttr('disabled');
			                 $('#green-round_6').removeAttr('disabled');
			                 $('#red-round_6').removeAttr('disabled');
			    } else {
			       
			   			var Form5 = $('#entry_jumat :not(:last)'),
			            current_jumat = $(this).parents('#entry_jumat :first'),
			            new_jumat = $(Form5.clone()).appendTo(current_jumat);
						console.log(Form5);

			         if ($('#entry_jumat :not(:last-child)')) {

			         	$('#entry_jumat:not(:last-child)').remove();
			         }
			        

			       		$('#start_jumat').attr('disabled','disabled');
			            $('#end_jumat').attr('disabled','disabled');
			                 $('#jumat-round').attr('disabled','disabled');
			                 $('#green-round_6').attr('disabled','disabled');
			                 $('#red-round_6').attr('disabled','disabled');
			            $('.jumat input[type=text]').val('')
			            $('.jumat .timed').prop('selectedIndex',0);
			      		 $('.jumat .time').prop('selectedIndex',0);			                 
			           		    }
			});


		});

/*-----------------------------------sabtu--------------------------------------------------*/
$(function()
		{	
		    $(document)
		    	
			    .on('click', '.btn-add_7', function(e)
			    {
			      
			        var Form5= $('.sabtu'),
			            current_sabtu = $(this).parents('.entry:first'),
			            new_sabtu = $(current_sabtu.clone()).appendTo(Form5);
	
			        new_sabtu.find('input').val('');
			        Form5.find('.entry:not(:last) .btn-add_7')
			            .removeClass('btn-add_7').addClass('btn-remove')
			            .removeClass('btn-success').addClass('btn-danger')
			            .html('<span class="icon_minus" ></span>');
			       		$("#green-round_7").prop('id', 'red-round_7');
						
						
					$('.field-harga').each(function(index){
				    $(this).attr('name','detail[' + (index ) + ']' +'.price');   
				     $(this).attr('id','detail[' + (index ) + ']' + '.price');  
				    index++;
				    });
				$('.time').each(function(index){
				    $(this).attr('name','detail[' + (index ) + ']' + '.startTime');   
				    $(this).attr('id','detail[' + (index ) + ']' + '.startTime');  
				    index++;
				    });
				$('.timed').each(function(index){
				    $(this).attr('name','detail[' + (index ) + ']' + '.endTime');   
				    $(this).attr('id','detail[' + (index ) + ']' + '.endTime'); 
				    index++;
				    });
				$('.detail').each(function(index){
				    $(this).attr('name','detail[' + (index) + ']' + '.day');   
				    $(this).attr('id','detail[' + (index ) + ']' + '.day'); 
				    index++;
				    });

			    	}
			    )   
		    .on('click', '.btn-remove', function(e){		
			    $(this).parents('.entry:first').remove();
						
						
					$('.field-harga').each(function(index){
				    $(this).attr('name','detail[' + (index ) + ']' +'.price');   
				     $(this).attr('id','detail[' + (index ) + ']' + '.price');  
				    index++;
				    });
				$('.time').each(function(index){
				    $(this).attr('name','detail[' + (index ) + ']' + '.startTime');   
				    $(this).attr('id','detail[' + (index ) + ']' + '.startTime');  
				    index++;
				    });
				$('.timed').each(function(index){
				    $(this).attr('name','detail[' + (index ) + ']' + '.endTime');   
				    $(this).attr('id','detail[' + (index ) + ']' + '.endTime'); 
				    index++;
				    });
				$('.detail').each(function(index){
				    $(this).attr('name','detail[' + (index) + ']' + '.day');   
				    $(this).attr('id','detail[' + (index ) + ']' + '.day'); 
				    index++;
				    });
				e.preventDefault();
				return false;		
			});

				$(document).on('change', '#sabtu', function(){

			    if($('#sabtu').prop('checked')){
			       $('#start_sabtu').removeAttr('disabled');
			            $('#end_sabtu').removeAttr('disabled');
			                 $('#sabtu-round').removeAttr('disabled');
			                 $('#green-round_7').removeAttr('disabled');
			                 $('#red-round_7').removeAttr('disabled');
			    } else {
			       
			   			var Form5 = $('#entry_sabtu :not(:last)'),
			            current_sabtu = $(this).parents('#entry_sabtu :first'),
			            new_sabtu = $(Form5.clone()).appendTo(current_sabtu);
						console.log(Form5);

			         if ($('#entry_sabtu :not(:last-child)')) {

			         	$('#entry_sabtu:not(:last-child)').remove();
			         }
			        

			       		$('#start_sabtu').attr('disabled','disabled');
			            $('#end_sabtu').attr('disabled','disabled');
			                 $('#sabtu-round').attr('disabled','disabled');
			                 $('#green-round_7').attr('disabled','disabled');
			                 $('#red-round_7').attr('disabled','disabled');
			            $('.sabtu input[type=text]').val('')
			            $('.sabtu .timed').prop('selectedIndex',0);
			      		 $('.sabtu .time').prop('selectedIndex',0);
			           		    }
			});


		});
/*-------------------minggu----------------------------------------*/
$(function()
		{	
		    $(document)
		    	
			    .on('click', '.btn-add_8', function(e)
			    {
			      
			        var Form6= $('.minggu '),
			            current_minggu = $(this).parents('.entry:first'),
			            new_minggu = $(current_minggu.clone()).appendTo(Form6);
	
			        new_minggu.find('input').val('');
			        Form6.find('.entry:not(:last) .btn-add_8')
			            .removeClass('btn-add_8').addClass('btn-remove')
			            .removeClass('btn-success').addClass('btn-danger')
			            .html('<span class="icon_minus" ></span>');
			       		$("#green-round_8").prop('id', 'red-round_8');

					$('.field-harga').each(function(index){
				    $(this).attr('name','detail[' + (index ) + ']' +'.price');   
				     $(this).attr('id','detail[' + (index ) + ']' + '.price');  
				    index++;
				    });
				$('.time').each(function(index){
				    $(this).attr('name','detail[' + (index ) + ']' + '.startTime');   
				    $(this).attr('id','detail[' + (index ) + ']' + '.startTime');  
				    index++;
				    });
				$('.timed').each(function(index){
				    $(this).attr('name','detail[' + (index ) + ']' + '.endTime');   
				    $(this).attr('id','detail[' + (index ) + ']' + '.endTime'); 
				    index++;
				    });
				$('.detail').each(function(index){
				    $(this).attr('name','detail[' + (index) + ']' + '.day');   
				    $(this).attr('id','detail[' + (index ) + ']' + '.day'); 
				    index++;
				    });

			    	}
			    )   
		    .on('click', '.btn-remove', function(e){		
			    $(this).parents('.entry:first').remove();
						
						
					$('.field-harga').each(function(index){
				    $(this).attr('name','detail[' + (index ) + ']' +'.price');   
				     $(this).attr('id','detail[' + (index ) + ']' + '.price');  
				    index++;
				    });
				$('.time').each(function(index){
				    $(this).attr('name','detail[' + (index ) + ']' + '.startTime');   
				    $(this).attr('id','detail[' + (index ) + ']' + '.startTime');  
				    index++;
				    });
				$('.timed').each(function(index){
				    $(this).attr('name','detail[' + (index ) + ']' + '.endTime');   
				    $(this).attr('id','detail[' + (index ) + ']' + '.endTime'); 
				    index++;
				    });
				$('.detail').each(function(index){
				    $(this).attr('name','detail[' + (index) + ']' + '.day');   
				    $(this).attr('id','detail[' + (index ) + ']' + '.day'); 
				    index++;
				    });

				e.preventDefault();
				return false;		
			});

				$(document).on('change', '#minggu', function(){

			    if($('#minggu').prop('checked')){
			       $('#start_minggu').removeAttr('disabled');
			            $('#end_minggu').removeAttr('disabled');
			                 $('#minggu-round').removeAttr('disabled');
			                 $('#green-round_8').removeAttr('disabled');
			                 $('#red-round_8').removeAttr('disabled');
			    } else {
			       
			   			var Form6 = $('#entry_minggu :not(:last)'),
			            current_minggu = $(this).parents('#entry_minggu :first'),
			            new_minggu = $(Form6.clone()).appendTo(current_minggu);
						console.log(Form6);

			         if ($('#entry_minggu :not(:last-child)')) {

			         	$('#entry_minggu:not(:last-child)').remove();
			         }
			        

			       		$('#start_minggu').attr('disabled','disabled');
			            $('#end_minggu').attr('disabled','disabled');
			                 $('#minggu-round').attr('disabled','disabled');
			                 $('#green-round_8').attr('disabled','disabled');
			                 $('#red-round_8').attr('disabled','disabled');
			            $('.minggu input[type=text]').val('')
			            $('.minggu .timed').prop('selectedIndex',0);
			      		 $('.minggu .time').prop('selectedIndex',0);
			           		    }
			});


		});



/*----------------------------------element name ---------------------------------------------*/



/*----------------------------------------------------------------------------*/
/*$(document).ready(function(){
$('input:checkbox').change(function(){
    if($(this).is(":checked")) {
      $(this).parent().addClass("checked");

	$('.field-harga').each(function(index){
	    $(this).attr('name','detail[' + (index ) + ']' +'.price');   
	     $(this).attr('id','detail[' + (index ) + ']' + '.price');  
	    index++;
	    });
	$('.time').each(function(index){
	    $(this).attr('name','detail[' + (index ) + ']' + '.startTime');   
	    $(this).attr('id','detail[' + (index ) + ']' + '.startTime');  
	    index++;
	    });
	$('.timed').each(function(index){
	    $(this).attr('name','detail[' + (index ) + ']' + '.endTime');   
	    $(this).attr('id','detail[' + (index ) + ']' + '.endTime'); 
	    index++;
	    });
	$('.detail').each(function(index){
	    $(this).attr('name','detail[' + (index) + ']' + '.day');   
	    $(this).attr('id','detail[' + (index ) + ']' + '.day'); 
	    index++;
	    });
    } 
else {
        $(this).parent().removeClass("checked");
        $('.detail').each(function(index){
	    $('.detail').removeAttr('name','detail[' + (index) + ']' + '.day')  
	   	$('.detail').removeAttr('id','detail[' + (index) + ']' + '.day')
	    index++;
    });
    $('.field-harga').each(function(index){
    $(this).removeAttr('name','detail[' + (index ) + ']' +'.price');   
     $(this).removeAttr('id','detail[' + (index ) + ']' + '.price');  
    index++;
    });
$('.time').each(function(index){
    $(this).removeAttr('name','detail[' + (index ) + ']' + '.startTime');   
    $(this).removeAttr('id','detail[' + (index ) + ']' + '.startTime');  
    index++;
    });
$('.timed').each(function(index){
    $(this).removeAttr('name','detail[' + (index ) + ']' + '.endTime');   
    $(this).removeAttr('id','detail[' + (index ) + ']' + '.endTime'); 
    index++;
    }); 
    }
});

/*var hasClass = element.classList.contains('checked');*/




//})

$(document).ready(function(){
   //  $('.checked').each(function(index){
   //  $(".checked")[index].find("input .field-harga").each(function(index){
	  //   $(this).attr('name','detail[' + (index ) + ']' +'.price');   
	  //    $(this).attr('id','detail[' + (index ) + ']' + '.price');  
	  //   index++;
	  //   });
   // });
   var index = 0;  
   var checked = document.getElementsByClassName("checked");
   console.log(checked.length);
   console.log(checked[0].getElementsByClassName("field-harga").length);
   console.log("br");
   console.log(checked[1].getElementsByClassName("field-harga").length);
   console.log("br");
   console.log(checked[2].getElementsByClassName("field-harga").length);
   console.log("br");
   console.log(checked[3].getElementsByClassName("field-harga").length);
   for(var indexCheck = 0; indexCheck < checked.length; indexCheck ++){
   		for(var indexChild = 0 ; indexChild < checked[indexCheck].getElementsByClassName("field-harga").length ; indexChild++){
   			 checked[indexCheck].getElementsByClassName('field-harga')[indexChild].setAttribute('name' , 'detail['+(index)+']'+'.price');
   			 checked[indexCheck].getElementsByClassName('field-harga')[indexChild].setAttribute('id' , 'detail['+(index)+']'+'.price');
   			checked[indexCheck].getElementsByClassName('time')[indexChild].setAttribute('name' , 'detail['+index+']'+'.startTime');
   			checked[indexCheck].getElementsByClassName('time')[indexChild].setAttribute('id' , 'detail['+index+']'+'.startTime');
   			checked[indexCheck].getElementsByClassName('timed')[indexChild].setAttribute('name' , 'detail['+index+']'+'.endTime');
   			checked[indexCheck].getElementsByClassName('timed')[indexChild].setAttribute('id' , 'detail['+index+']'+'.endTime');
   			checked[indexCheck].getElementsByClassName('detail')[indexChild].setAttribute('name' , 'detail['+index+']'+'.day');
   			checked[indexCheck].getElementsByClassName('detail')[index].setAttribute('id' , 'detail['+index+']'+'.day');
   			console.log(index);
   			index++;
   			// console.log(index);
   		}
   }  
})