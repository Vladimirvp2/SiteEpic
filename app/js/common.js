
var pageScrollTime = 1000;
var showUpArrowOffset = 400;

$(function() {

	$(".toggle-mnu").click(function() {
		$(this).toggleClass("on");
		$(".hidden-menu").slideToggle();
		//$(this).parent().next().next().find(".main-mnu").slideToggle();
		return false;
	});

	var $nav_panel_opened = false; 
	$(".toggle-mnu-small").click(function() {
		//$(this).toggleClass("on");
		$(this).toggleClass("on");
		if (!$nav_panel_opened ){
			openNav();
			$nav_panel_opened = true;
		}
		else{
			closeNav();
			$nav_panel_opened = false;
		}
		//$(".hidden-menu-small").slideToggle();
		//$(this).parent().next().next().find(".main-mnu").slideToggle();
		return false;
	});	

	//main and hidden menu active
	var selector_menu_main = '.main-menu li a'
	var selector_menu_hidden = '.hidden-menu li a';
	var common_menu_selector = selector_menu_main + ', ' + selector_menu_hidden;
	var selector_selected_menu = "";
	$(common_menu_selector).on('click', function(){
	    $(common_menu_selector).removeClass('active');
	    var currClass = $(this).attr("class");
	    selector_selected_menu = selector_menu_main + "." + currClass + ', ' + selector_menu_hidden + "." + currClass;
	    //$(this).addClass('active');
	    $(selector_selected_menu).addClass('active');

	});	
		

	$(window).scroll(function() {
		if($(this).scrollTop() > $(this).height()) {
			$(".top").addClass("active");
		} else {
			$(".top").removeClass("active");
		}
	});


	$(".gallery-item").each(function(e) {
		var th = $(this);


		th.attr("href", "#gallery-img-" + e)
			.find(".gallery-popup")
				.attr("id", "gallery-img-" + e);

	});

  $('.gallery-item').magnificPopup({

  		type: 'inline',
  		closeBtnInside: true,
  		removalDelay: 300,
  		//mainClass: 'mfp-fade'
  		mainClass: 'mfp-with-zoom'
	});
	
  $('.item2').magnificPopup({
	//type:'image',
	//markup: '<div> 333 </div> '

	
	});


  //jstree
     // 6 create an instance when the DOM is ready
    $('#jstree').jstree();
    // 7 bind to events triggered on the tree
    $('#jstree').on("changed.jstree", function (e, data) {
      console.log(data.selected);
    });
    // 8 interact with the tree - either way is OK
    $('button').on('click', function () {
      $('#jstree').jstree(true).select_node('child_node_1');
      $('#jstree').jstree('select_node', 'child_node_1');
      $.jstree.reference('#jstree').select_node('child_node_1');
    }); 




     $('#jstree-small').jstree();
    // 7 bind to events triggered on the tree
    $('#jstree-small').on("changed.jstree", function (e, data) {
      console.log(data.selected);
    });

	//equal heights module
	function heightses() {
		$(".testimonials-desc").height('auto').equalHeights();
	}

	$(window).resize(function() {
		heightses();
	});

	heightses();


	// ==================================================  buttons press begin ==================================================
	$(".order-button, .order-button-hide").click(function() { 
		//console.log(1);
		var dial = $("#m-Form").clone();
		var str = "<span class='contacts-dialog'><span class='container'><span class='row'> <span class='col-sm-12' style='padding: 0px;'>" + dial.html() + "</span></span></span></span>";
		var content = $.parseHTML( str );
		
		if ($("#m-Form")[0]) {
			$.magnificPopup.open({
				items: {
					src: content[0].outerHTML
				},
				closeBtnInside: true,
				type: 'inline',
				removalDelay: 300,
				mainClass: 'mfp-with-zoom'
			});
		}		

	});	


	$(".leave-testimonial-button").click(function() { 
		var strTest = "<span class='testimonials-dialog'><span class='container'><span class='row'> <span class='col-sm-12 bootstrap-colomn-padding0'><img class='responsive-img' src='img/testemonials.png' alt='Alt'></span></span></span></span>";
		var contentTest = $.parseHTML( strTest );
		
		if ($("#m-Form")[0]) {
			$.magnificPopup.open({
				items: {
					src: contentTest[0].outerHTML
				},
				closeBtnInside: true,
				type: 'inline',
				removalDelay: 300,
				mainClass: 'mfp-with-zoom'
			});
		}		

	});	


	$(".info-button, .info-button-hide").click(function() { 
		offset = $(".services").offset().top - getHeaderHight();
		body.stop().animate({scrollTop:offset}, pageScrollTime, 'swing');		

	});	
	// ==================================================  buttons press end ==================================================		


	// ===================================================== menu scroll begin  =====================================================
	var body = $("html, body");
	var selector = '';
	var offset = 0;

	// main page menu large
	selector = '.main-menu li a.menu-main-page';
	$(selector).on('click', function(){
		body.stop().animate({scrollTop:0}, pageScrollTime, 'swing');	
	});

	// logo click
	selector = '.logo-header';
	$(selector).on('click', function(){
		body.stop().animate({scrollTop:0}, pageScrollTime, 'swing');	
	});	

	// main page menu small
	selector = '.hidden-menu li a.menu-main-page';
	$(selector).on('click', function(){
		body.stop().animate({scrollTop:0}, pageScrollTime, 'swing');	
		closeSmallMenu();
	});			

	// gallery page menu large
	selector = '.main-menu li a.menu-gallery';
	$(selector).on('click', function(){
		offset = $(".gallery").offset().top - getHeaderHight();
		console.log(offset);
		//alert(offset);
		body.stop().animate({scrollTop:offset}, pageScrollTime, 'swing');	
	});	

	// gallery page menu small
	selector = '.hidden-menu li a.menu-gallery';
	$(selector).on('click', function(){

		if ($( window ).width() >= 768){
			offset = $(".gallery").offset().top - getHeaderHight();
		}
		else{
			offset = $(".gallery-small").offset().top - getHeaderHight();
		}
		console.log(offset);
		//alert(offset);
		body.stop().animate({scrollTop:offset}, pageScrollTime, 'swing');	
		closeSmallMenu();
	});

	// services menu large
	selector = '.main-menu li a.menu-services';
	$(selector).on('click', function(){
		offset = $(".services").offset().top - getHeaderHight();
		body.stop().animate({scrollTop:offset}, pageScrollTime, 'swing');	
	});

	// services page menu small
	selector = '.hidden-menu li a.menu-services';
	$(selector).on('click', function(){
		offset = $(".services").offset().top - getHeaderHight();
		body.stop().animate({scrollTop:offset}, pageScrollTime, 'swing');		
		closeSmallMenu();
	});	

	// contacts menu large
	selector = '.main-menu li a.menu-contacts';
	$(selector).on('click', function(){
		offset = $(".contacts").offset().top - getHeaderHight();
		body.stop().animate({scrollTop:offset}, pageScrollTime, 'swing');	
	});

	// contacts page menu small
	selector = '.hidden-menu li a.menu-contacts';
	$(selector).on('click', function(){
		offset = $(".contacts").offset().top - getHeaderHight();
		body.stop().animate({scrollTop:offset}, pageScrollTime, 'swing');		
		closeSmallMenu();
	});	


	function closeSmallMenu(){
		$( ".toggle-mnu" ).trigger("click");
	}

	function getHeaderHight() {
		if ($( window ).width() >= 768){
			return 100;
		}
		else{
	    	return 200;
	    }
	}
	// ===================================================== menu scroll end  =====================================================


    // hide or show up arrow for return to the top
	var selector_arrow_up = "#arrow-up";
	$( window ).scroll(function() {
		if ($(document).scrollTop() > showUpArrowOffset) {
			$(selector_arrow_up).removeClass('hidden');
		}
		else{
			$(selector_arrow_up).addClass('hidden');
		}

		if (isScrolledIntoView(".services")){
			console.log("yes!!!");
		}
		
	});	

	// arrow up click
	$(selector_arrow_up).on('click', function(){
		body.stop().animate({scrollTop:0}, pageScrollTime, 'swing');	
	});	


});


function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}



function isScrolledIntoView(elem)
{
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    //return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    return ((docViewBottom >= elemTop + 200) && (docViewTop <= elemBottom - 200));
}
		