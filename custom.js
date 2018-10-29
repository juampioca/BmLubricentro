$('nav a').click(function(e){
		e.preventDefault();
		var strAncla=$(this).attr('href');
			$('body,html').stop(true,true).animate({
				scrollTop: $(strAncla).offset().top
			},1000);

	});

$('#mecanica').hover(function(){
  $('#textoMecanica').slideToggle(500);
});

$('#lubricentro').hover(function(){
  $('#textoLubricentro').slideToggle(500);
});

$('#imgVelocidadCrucero').hover(function(){
  $('#textoVelocidadCrucero').css("display", "block");
});

$('#imgVelocidadCrucero').mouseout(function(){
  $('#textoVelocidadCrucero').css("display", "none");
});

$('#imgAbs').hover(function(){
  $('#textoAbs').css("display", "block");
});

$('#imgAbs').mouseout(function(){
  $('#textoAbs').css("display", "none");
});

$('#imgAireNeumaticos').hover(function(){
  $('#textoAireNeumaticos').css("display", "block");
});

$('#imgAireNeumaticos').mouseout(function(){
  $('#textoAireNeumaticos').css("display", "none");
});

$('#imgAlgoMotor').hover(function(){
  $('#textoAlgoMotor').css("display", "block");
});

$('#imgAlgoMotor').mouseout(function(){
  $('#textoAlgoMotor').css("display","none");
});

$('#imgCajaAutomatica').hover(function(){
  $('#textoCajaAutomatica').css("display","block");
});

$('#imgCajaAutomatica').mouseout(function(){
  $('#textoCajaAutomatica').css("display","none");
});

$('#imgCombustible').hover(function(){
  $('#textoCombustible').css("display", "block");
});

$('#imgCombustible').mouseout(function(){
  $('#textoCombustible').css("display","none");
});

$('#imgControlEstabilidad').hover(function(){
  $('#textoControlEstabilidad').css("display", "block");
});

$('#imgControlEstabilidad').mouseout(function(){
  $('#textoControlEstabilidad').css("display","none");
});

$('#imgEpc').hover(function(){
  $('#textoEpc').css("display", "block");
});

$('#imgEpc').mouseout(function(){
  $('#textoEpc').css("display","none");
});

$('#imgFiltroDiesel').hover(function(){
  $('#textoFiltroDiesel').css("display", "block");
});

$('#imgFiltroDiesel').mouseout(function(){
  $('#textoFiltroDiesel').css("display","none");
});

$('#imgLiquidoParabrisas').hover(function(){
  $('#textoLiquidoParabrisas').css("display", "block");
});

$('#imgLiquidoParabrisas').mouseout(function(){
  $('#textoLiquidoParabrisas').css("display","none");
});

$('#imgLlaveVehiculo').hover(function(){
  $('#textoLlaveVehiculo').css("display", "block");
});

$('#imgLlaveVehiculo').mouseout(function(){
  $('#textoLlaveVehiculo').css("display","none");
});

$('#imgLucesQuemadas').hover(function(){
  $('#textoLucesQuemadas').css("display", "block");
});

$('#imgLucesQuemadas').mouseout(function(){
  $('#textoLucesQuemadas').css("display","none");
});

$('#imgMotor').hover(function(){
  $('#textoMotor').css("display", "block");
});

$('#imgMotor').mouseout(function(){
  $('#textoMotor').css("display","none");
});

$('#imgNivelAceite').hover(function(){
  $('#textoNivelAceite').css("display", "block");
});

$('#imgNivelAceite').mouseout(function(){
  $('#textoNivelAceite').css("display","none");
});

$('#imgAirbag').hover(function(){
  $('#textoAirbag').css("display", "block");
});

$('#imgAirbag').mouseout(function(){
  $('#textoAirbag').css("display","none");
});

$('#imgBateria').hover(function(){
  $('#textoBateria').css("display", "block");
});

$('#imgBateria').mouseout(function(){
  $('#textoBateria').css("display","none");
});

$('#imgBaul').hover(function(){
  $('#textoBaul').css("display", "block");
});

$('#imgBaul').mouseout(function(){
  $('#textoBaul').css("display","none");
});

$('#imgCapot').hover(function(){
  $('#textoCapot').css("display", "block");
});

$('#imgCapot').mouseout(function(){
  $('#textoCapot').css("display","none");
});

$('#imgCinturonSeguridad').hover(function(){
  $('#textoCinturonSeguridad').css("display", "block");
});

$('#imgCinturonSeguridad').mouseout(function(){
  $('#textoCinturonSeguridad').css("display","none");
});

$('#imgFrenoDeMano').hover(function(){
  $('#textoFrenoDeMano').css("display", "block");
});

$('#imgFrenoDeMano').mouseout(function(){
  $('#textoFrenoDeMano').css("display","none");
});

$('#imgLiquidoHidraulico').hover(function(){
  $('#textoLiquidoHidraulico').css("display", "block");
});

$('#imgLiquidoHidraulico').mouseout(function(){
  $('#textoLiquidoHidraulico').css("display","none");
});

$('#imgPresionAceite').hover(function(){
  $('#textoPresionAceite').css("display", "block");
});

$('#imgPresionAceite').mouseout(function(){
  $('#textoPresionAceite').css("display","none");
});

$('#imgPuertasAbiertas').hover(function(){
  $('#textoPuertasAbiertas').css("display", "block");
});

$('#imgPuertasAbiertas').mouseout(function(){
  $('#textoPuertasAbiertas').css("display","none");
});


$('#imgTemperatura').hover(function(){
  $('#textoTemperatura').css("display", "block");
});

$('#imgTemperatura').mouseout(function(){
  $('#textoTemperatura').css("display","none");
});
