$(function(){
        $(document).on('blur', function(){
           if($("#inputEmail").val()!==''){  //assuming the form doesn't have some fields populated by default.
          
         	$("#inputEmail").attr("id", "filled");
           } else {
             
           }
        });
  });