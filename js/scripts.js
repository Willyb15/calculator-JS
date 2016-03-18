$(document).ready(function(){
	
	$('.operator, .number').click(function(){
		if($(this).hasClass('equal')){
			// alert('you hit the equal sign!!');
			doIt();
		}else if
		($(this).hasClass('clear')){
			$('.screen').val('');
			$('#calculator').removeClass("transform-calc1, transform-calc2, transform-calc");
		}else{
			var currentScreenVal = $('.screen').val();
			$('.screen').val(currentScreenVal + $(this).val());
		}
	
	});

	document.onkeyup = keyCheck;
	console.log(event);
	function keyCheck(){
		var keyID = event.keyCode;
		console.log(keyID);
		var currScreenVal = $('.screen').val();
		switch(keyID){
			case 48:
				$('.screen').val(currScreenVal + 0);
				break;
			case 49:
				$('.screen').val(currScreenVal + 1);
				break;
			case 50:
				$('.screen').val(currScreenVal + 2);	
				break;
			case 51:
				$('.screen').val(currScreenVal + 3);	
				break;
			case 52:
				$('.screen').val(currScreenVal + 4);	
				break;
			case 53:
				$('.screen').val(currScreenVal + 5);	
				break;
			case 54:
				$('.screen').val(currScreenVal + 6);	
				break;
			case 55:
				$('.screen').val(currScreenVal + 7);
				break;
			case 56:
				$('.screen').val(currScreenVal + 8);	
				break;
			case 57:
				$('.screen').val(currScreenVal + 9);
				break;
			case 88: 
				$('.screen').val(currScreenVal + '*');	
				break;			
			case 191: 
				$('.screen').val(currScreenVal + '/');	
				break;				
			case 189: 
				$('.screen').val(currScreenVal + '-');	
				break;
			case 187:
				$('.screen').val(currScreenVal + '+');	
				break;							
			// case 187:
			// 	//equal sign
			// 	doIt();
				break;
			case 67:
				$('.screen').val("");	
				break;		
			// case 8:
			// 	$('.screen').val(currScreenVal + 'clear');	
			// 	break;	
			case 13:
				//enter sign
				doIt();
				break;
			default:
				// alerD7+lt('huh?');
		}
	}
})

function doIt(){
	try{
		var total = eval($('.screen').val());
	} catch (e){
		console.log(e);
		if( e instanceof SyntaxError){
			alert("ERROR!! ERROR!! Numbers are required to computer... ERROR!!");
			return;
		}else if( e instanceof ReferenceError){
			alert("ERROR!! ERROR!! You cannot put two operators in a row!! ERROR!");
			return;			
		}
	}
	$('.screen').val(total);
	if(total == 42){
		$('#meaning').animate({left: '5000px'},5000);
	}else if(total===360){
		$('#calculator').addClass('transform-calc');
	}else if(total===720){
		$('#calculator').addClass('transform-calc1');
	}else if(total===07734){
		$('#calculator').addClass('transform-calc2');
	}else if(total===07734 + 5 ){
		$('#calculator').removeClass('transform-calc2').addClass('transform-calc1');
	}else if(total>1000000){
		window.open('https://www.google.com');	
	}
}
