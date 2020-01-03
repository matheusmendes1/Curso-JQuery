let frase = $(".frase").text();
let numPalavras = frase.split(" ").length;
let tamanhoFrase = $("#tamanho-frase");

tamanhoFrase.text(numPalavras);

let campo = $(".campo-digitacao");
campo.on("input", function(){
	let conteudo = campo.val();

	$("#contador-palavras").text((conteudo.split(/\S+/).length -1));
	$("#contador-caracteres").text(conteudo.length);
});

let tempoRestante = $("#tempo-digitacao").text();

campo.on("focus", function(){

	setInterval(function(){
		tempoRestante--;
		console.log(tempoRestante);
	}, 1000);
})