
$(function()
{	 
    $(document).on('click', '.btn-add', function(e)
    {
    	var btn = $('.in').length
        e.preventDefault();

        var controlForm = $('.controls form:first'),
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
    	var controlForm = $('.controls form:first'),
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
			            curEntry = $(this).parents('#entry form:first '),
			            nEntry = $(Form1.clone()).appendTo(curEntry);
						console.log(Form1);

			         if ($('#entry :not(:last-child)')) {

			         	$('#entry:not(:last-child)').remove();
			         }
			        

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
			      
			        var Form2= $('.selasa form:first'),
			            current_selasa = $(this).parents('.entry:first'),
			            new_selasa = $(current_selasa.clone()).appendTo(Form2);
	
			        new_selasa.find('input').val('');
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

				$(document).on('change', '#selasa', function(){

			    if($('#selasa').prop('checked')){
			       $('#start_selasa').removeAttr('disabled');
			            $('#end_selasa').removeAttr('disabled');
			                 $('#selasa-round').removeAttr('disabled');
			                 $('#green-round_3').removeAttr('disabled');
			                 $('#red-round_3').removeAttr('disabled');
			    } else {
			       
			   			var Form2 = $('#entry_selasa form:not(:last)'),
			            current_selasa = $(this).parents('#entry_selasa form:first '),
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

			           		    }
			});


		});

/*--------------------------------------rabu--------------------------------------------*/
$(function()
		{	
		    $(document)
		    	
			    .on('click', '.btn-add_4', function(e)
			    {
			      
			        var Form3= $('.rabu form:first'),
			            current_rabu = $(this).parents('.entry:first'),
			            new_rabu = $(current_rabu.clone()).appendTo(Form3);
	
			        new_rabu.find('input').val('');
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

				$(document).on('change', '#rabu', function(){

			    if($('#rabu').prop('checked')){
			       $('#start_rabu').removeAttr('disabled');
			            $('#end_rabu').removeAttr('disabled');
			                 $('#rabu-round').removeAttr('disabled');
			                 $('#green-round_4').removeAttr('disabled');
			                 $('#red-round_4').removeAttr('disabled');
			    } else {
			       
			   			var Form3 = $('#entry_rabu form:not(:last)'),
			            current_rabu = $(this).parents('#entry_rabu form:first'),
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

			           		    }
			});


		});

/*-----------------------------------------kamis----------------------------------------------------*/
$(function()
		{	
		    $(document)
		    	
			    .on('click', '.btn-add_5', function(e)
			    {
			      
			        var Form4= $('.kamis form:first'),
			            current_kamis = $(this).parents('.entry:first'),
			            new_kamis = $(current_kamis.clone()).appendTo(Form4);
	
			        new_kamis.find('input').val('');
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

				$(document).on('change', '#kamis', function(){

			    if($('#kamis').prop('checked')){
			       $('#start_kamis').removeAttr('disabled');
			            $('#end_kamis').removeAttr('disabled');
			                 $('#kamis-round').removeAttr('disabled');
			                 $('#green-round_5').removeAttr('disabled');
			                 $('#red-round_5').removeAttr('disabled');
			    } else {
			       
			   			var Form4 = $('#entry_kamis form:not(:last)'),
			            current_kamis = $(this).parents('#entry_kamis form:first'),
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

			           		    }
			});


		});
/*--------------------------------jumat---------------------------------------------*/
$(function()
		{	
		    $(document)
		    	
			    .on('click', '.btn-add_6', function(e)
			    {
			      
			        var Form5= $('.jumat form:first'),
			            current_jumat = $(this).parents('.entry:first'),
			            new_jumat = $(current_jumat.clone()).appendTo(Form5);
	
			        new_jumat.find('input').val('');
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

				$(document).on('change', '#jumat', function(){

			    if($('#jumat').prop('checked')){
			       $('#start_jumat').removeAttr('disabled');
			            $('#end_jumat').removeAttr('disabled');
			                 $('#jumat-round').removeAttr('disabled');
			                 $('#green-round_6').removeAttr('disabled');
			                 $('#red-round_6').removeAttr('disabled');
			    } else {
			       
			   			var Form5 = $('#entry_jumat form:not(:last)'),
			            current_jumat = $(this).parents('#entry_jumat form:first'),
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

			           		    }
			});


		});

/*-----------------------------------sabtu--------------------------------------------------*/
$(function()
		{	
		    $(document)
		    	
			    .on('click', '.btn-add_7', function(e)
			    {
			      
			        var Form5= $('.sabtu form:first'),
			            current_sabtu = $(this).parents('.entry:first'),
			            new_sabtu = $(current_sabtu.clone()).appendTo(Form5);
	
			        new_sabtu.find('input').val('');
			        Form5.find('.entry:not(:last) .btn-add_7')
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

				$(document).on('change', '#sabtu', function(){

			    if($('#sabtu').prop('checked')){
			       $('#start_sabtu').removeAttr('disabled');
			            $('#end_sabtu').removeAttr('disabled');
			                 $('#sabtu-round').removeAttr('disabled');
			                 $('#green-round_7').removeAttr('disabled');
			                 $('#red-round_7').removeAttr('disabled');
			    } else {
			       
			   			var Form5 = $('#entry_sabtu form:not(:last)'),
			            current_sabtu = $(this).parents('#entry_sabtu form:first'),
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

			           		    }
			});


		});
/*-------------------minggu----------------------------------------*/
$(function()
		{	
		    $(document)
		    	
			    .on('click', '.btn-add_8', function(e)
			    {
			      
			        var Form6= $('.minggu form:first'),
			            current_minggu = $(this).parents('.entry:first'),
			            new_minggu = $(current_minggu.clone()).appendTo(Form6);
	
			        new_minggu.find('input').val('');
			        Form6.find('.entry:not(:last) .btn-add_8')
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

				$(document).on('change', '#minggu', function(){

			    if($('#minggu').prop('checked')){
			       $('#start_minggu').removeAttr('disabled');
			            $('#end_minggu').removeAttr('disabled');
			                 $('#minggu-round').removeAttr('disabled');
			                 $('#green-round_8').removeAttr('disabled');
			                 $('#red-round_8').removeAttr('disabled');
			    } else {
			       
			   			var Form6 = $('#entry_minggu form:not(:last)'),
			            current_minggu = $(this).parents('#entry_minggu form:first'),
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

			           		    }
			});


		});
/*---------------------------------Price Validation-----------------------------------*/
$(document).ready(function(){
  $('input.field-harga').keyup(function(event){
      // skip for arrow keys
      if(event.which >= 10 && event.which <= 10){
          event.preventDefault();
      }
      var $this = $(this);
      var num = $this.val().replace(/,/gi, "").split("").reverse().join("");
      
      var num2 = RemoveRougeChar(num.replace(/(.{3})/g,"$1,").split("").reverse().join(""));
      
      console.log(num2);
      
      
      // the following line has been simplified. Revision history contains original.
      $this.val(num2);
  });
});

function RemoveRougeChar(convertString){
    
    
    if(convertString.substring(0,1) == ","){
        
        return convertString.substring(1, convertString.length)            
        
    }
    return convertString;
    
}


$(document).ready(function(){
    // Based off of http://stackoverflow.com/questions/9156390/add-commas-for-a-number-in-input-field-while-typing
    
    function RemoveRougeChar(convertString){
        if(convertString.substring(0,1) == ","){
            return convertString.substring(1, convertString.length)                  
        }
        return convertString; 
    }
    
    $('input.field-harga')
  
    .on("focus",function(e){
        var $this = $(this);
        var num = $this.val().replace(/,/g,"");
        $this.val(num);
        
    }).on("blur", function(e){
        var $this = $(this);
        var num = $this.val().replace(/[^0-9]+/g, '').replace(/,/gi, "").split("").reverse().join("");     
        var num2 = RemoveRougeChar(num.replace(/(.{3})/g,"$1,").split("").reverse().join(""));
        $this.val(num2);
    });
    
});

/*---------------------------Jam--------------------------------------------------*/
/*$('.time').on('change', function(e) {
var from_time = Date.parse($(this).val());

var from_time_adj = new Date();
from_time_adj.setTime(from_time.getTime() + (60 * 60 * 1000));

var from_time_adj = new Date();
from_time_adj.setTime(from_time.getTime() + (60 * 60 * 1000));

>>>>>>> 4fe264e6fbb1ab93fc6ee4f6cd0660a71d984bc5
$('.time option').each(function(index, el) {
var to_time = Date.parse($(el).val());
  if (to_time < from_time_adj) {
      $(el).attr('disabled', true);
   }

});
console.log(this)
});
$('.timed').on('change', function(e) {
var to_time = Date.parse($(this).val());
var to_time_adj = new Date();


});
console.log(this)
});

$('.timed').on('change', function(e) {

var to_time = Date.parse($(this).val());
var to_time_adj = new Date();


to_time_adj.setTime(to_time.getTime() - (60 * 60 * 1000));
$('.timed option').each(function(index, el) {
var from_time = Date.parse($(el).val());
  if (from_time > to_time_adj) {
      $(el).attr('disabled', true);
   }
});
});
*/

$("#start_senin").change(function(){
    alert("The text has been changed.");
});