 
 window.onload = function(){
		setTimeout("switch_Image()", 3000);
		  }
		  var current = 1;
		  var num_image = 5;
		  function switch_Image(){
			  current++;
			  document.images['image'].src ='images/bt lon/anh-' + current + '.jpg';
			 if(current < num_image){
			   setTimeout("switch_Image()", 3000);
			 }else if(current == num_image){
			   current = 0;
			   setTimeout("switch_Image()", 3000);
			 }
		 }
		 $(document).ready(function(){
 			$("#go").hide();
			$(window).scroll(function () {
				if ($("html, body").scrollTop()>100)
						$("#go").show("slow");
				else
						$("#go").hide("slow");  //trar ve tinhs khoangr cach tu vi tri truot den dau trang
				});
				$("#go").click(function () {
				$("html,body").animate({scrollTop: 0}, 1000);
				});
			});
			
        function myfunction ()
        {
        };
        $(document).ready(function(){
            $('#mytab2').click(function(){
                $(".tab2").show();
                $(".tab1").hide();
            });
            $('#mytab1').click(function(){
                $(".tab1").show();
                $(".tab2").hide();
            });
           
            $("div.content-tab > div:not(:last-child)").hide();
        });     
   