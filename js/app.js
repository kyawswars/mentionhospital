$(document).ready(function(){
	// console.log("I am working");

	// Start Info Section
	$(window).scroll(function(){
		let getscrollpoint = $(this).scrollTop();
		// console.log(getscrollpoint);

		if (getscrollpoint >= 416) {
			$(".infotexts").addClass("fromlefts");
			$(".infopics").addClass("fromrights");
		}else{
			$(".infotexts").removeClass("fromlefts");
			$(".infopics").removeClass("fromrights");
		}
	});
	// End Info Section

	// Start Adv Section

	$("#videos").click(function(){
		var getmodal = $(this).data("bs-target");
		var getvideosrc = $(this).data("video");
		var videourlwithauto = getvideosrc+"?autoplay=1";

		$(getmodal + " iframe").attr("src",videourlwithauto);

		$(getmodal + " button.btn-close").click(function(){
			$(getmodal+ " iframe").attr("src",getvideosrc);
		});

		$(getmodal).click('hidden.bs.modal',function(){
			$(getmodal+ " iframe").attr("src",getvideosrc);
		})
	});

	// End Adv Section

	// Start Premises Section
	$("#lightslider").lightSlider({
		auto:true,
		item:4,
		loop:true,
		slideMove:1,
		speed:600,
	});
	// End Premises Section

	// Start Pricing Section
		$(window).scroll(function(){
			let getscroll=$(this).scrollTop();
			// console.log(getscroll);

			if (getscroll >= 2513) {
				$(".cardones").addClass("movelefts");
				$(".cardtwos").addClass("movebottom");
				$(".cardthrees").addClass("moverights");
			}else{
				$(".cardones").removeClass("movelefts");
				$(".cardtwos").removeClass("movebottom");
				$(".cardthrees").removeClass("moverights");
			}
		});
	// End Pricing Section

	// Start Join Us Section
	$("#accordion").accordion();
	// End Join Us Section  

	// Start Footer Section
	$("#getyear").text(new Date().getUTCFullYear());
	// End Footer Section

	// Start Progress
	$(window).scroll(function(){
		var getprogress = $("#progresses");
		var getprogressval = $("#progressvalues");
		var getscrolltop = $(this).scrollTop();
		// console.log(getscrolltop);

		var getscrollheight = $(document).height();
		// console.log(getscrollheight);
		var getsclientheight = $(window).height();
		// console.log(getsclientheight);
		var calcheight = getscrollheight - getsclientheight;
		var getfinalheight = Math.round(getscrolltop * 100 / calcheight);
		// console.log(getfinalheight);

		getprogressval.text(`${getfinalheight}%`);
		getprogress.css({
			"background":`conic-gradient(steelblue ${getfinalheight}%,#eee ${getfinalheight}%)`
		})

	});
	// End Progress
})