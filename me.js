		$(document).ready(function(){
			$("#skill").hide();
			$("#hire").hide();
			$("#project").hide();
			$("#tech").hide();
			$("#chat").hide();
			$("#contact").hide();
			$(".fa-chevron-circle-up").hide();
			$("#zombie").hide();
			$("#coming_soon").hide();
		//for the icon
		$("#nerd_pic").animate({
			height: "20%",
		},2500);

	});
			//icon hover effects 
			$("#skill_icon").hover(function(){
				$("#skill").show("slow");
			},function(){
				$("#skill").hide("slow");
			}
			);	

			$("#hire_icon").hover(function(){
				$("#hire").show("slow");
			},function(){
				$("#hire").hide("slow");
			}
			);	
			$("#project_icon").hover(function(){
				$("#project").show("slow");
			},function(){
				$("#project").hide("slow");
			}
			);

			$("#tech_icon").hover(function(){
				$("#tech").show("slow");
			},function(){
				$("#tech").hide("slow");
			}
			);	

			$("#chat_icon").hover(function(){
				$("#chat").show("slow");
			},function(){
				$("#chat").hide("slow");
			}
			);	
			$("#contact_icon").hover(function(){
				$("#contact").show("slow");
			},function(){
				$("#contact").hide("slow");
			}
			);	

			//click on skill icon
			$("#skill_icon").click(function(){
				$("#nerd").animate({
					marginTop: "-12%"
				},1000);

				$.ajax({url:"pages/skills.html",success:function(result){     //ajax call
                	$("#infoBox").html(result);                         //show result
                }});
			});
			//click on project icon
			$("#project_icon").click(function(){
				$("#nerd").animate({
					marginTop: "-12%"
				},1000);
				$("#zombie").show("slow");
				$("#zombie").animate({
					marginLeft: "38%"
				},7000);
				$("#coming_soon").show("slow");
			});
			//click on tech icon
			$("#tech_icon").click(function(){
				$("#nerd").animate({
					marginTop: "-12%"
				},1000);

				$("#zombie").show("slow");
				$("#zombie").animate({
					marginLeft: "38%"
				},7000);
				$("#coming_soon").show("slow");
			});
			//click on hire icon
			$("#hire_icon").click(function(){
				$("#nerd").animate({
					marginTop: "-12%"
				},1000);

				$("#zombie").show("slow");
				$("#zombie").animate({
					marginLeft: "38%"
				},7000);
				$("#coming_soon").show("slow");
			});
			//click on hire icon
			$("#contact_icon").click(function(){
				$("#nerd").animate({
					marginTop: "-12%"
				},1000);

				$("#zombie").show("slow");
				$("#zombie").animate({
					marginLeft: "38%"
				},7000);
				$("#coming_soon").show("slow");
			});
			//click on hire icon
			$("#chat_icon").click(function(){
				$("#nerd").animate({
					marginTop: "-12%"
				},1000);

				$("#zombie").show("slow");
				$("#zombie").animate({
					marginLeft: "38%"
				},7000);
				$("#coming_soon").show("slow");
			});
			// events for mobile touch devices
			//source: http://jsfiddle.net/c_kick/s9rB4/
			$('.rotate').on("touchstart",function(e){
				'use strict';
				//hide all
				$("h3").hide();
				var img=$(this);	
				var id=img.context.alt;
				if(img.hasClass('hover')){
					return true;
				}else{
					//console.log("hit");					//first touch
					$("#"+id).show("slow");
					img.addClass('hover');
					$('.rotate').not(this).removeClass('hover');
					e.preventDefault();
					return false;
				}
			});