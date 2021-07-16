$(document).ready(function(){
	$(window).scroll(function(){
		//função para a barra de navegação vermelha aparecer ou ser ocultada se o scroll da página passar de 20px
		if (this.scrollY > 20) {
			$('.barra-navegacao').addClass("posicao-original");
		}else{
			$('.barra-navegacao').removeClass("posicao-original");
		}
		//função para apresentar botão de voltar ao topo quando o scroll da página passar de 500px
		if (this.scrollY > 500) {
			$('.botao-subir-inicio').addClass("mostrar");
		}else {
			$('.botao-subir-inicio').removeClass("mostrar");
		}
	});

	//função para deslizar a página para o topo
	$('.botao-subir-inicio').click(function(){
		$('html').animate({scrollTop: 0});
	});

	//função para apresentar ou ocultar o menu de navegação
	$('.menu-botao').click(function(){
		$('.barra-navegacao .menu').toggleClass("ativo");
		$('.menu-botao i').toggleClass("ativo");
	});

	//função para animação das palavras digitadas SEÇÃO "HOME"
	var typed = new Typed(".digitando", {
		strings: ["Desenvolvimento", "Requisitos", "Testes", "Projetos"],
		typeSpeed: 60,
		backSpeed: 40,
		loop: true
	});

	//função para animação das palavras digitadas SEÇÃO "SOBRE"
	var typed = new Typed(".digitando2", {
		strings: ["Desenvolvimento", "Requisitos", "Testes", "Projetos"],
		typeSpeed: 60,
		backSpeed: 40,
		loop: true
	});

	//função para o carrossel
	$('.carrossel').owlCarousel({
		margin: 20,
		loop: true,
		autoplayTimeOut: 2000,
		autoplayHoverPause: true,
		responsive: {
			0: {
				items: 1,
				nav: false
			},
			600: {
				items: 2,
				nav: false
			},
			1000: {
				items: 3,
				nav: false
			}
		}
	});
});

