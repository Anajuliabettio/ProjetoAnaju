document.getElementById('Formulariodecontato').addEventListener('submit', function(event) {  //pegando no meu html o valor contido no meu formula rio com id = Formulariodecontato, ao clicar no botão que tem a ação 'submit' (submeter / enviar)
    event.preventDefault();

    var nome = document.getElementById('nome').value; //pegando no meu html o valor escrito no campo com id = nome

    var email = document.getElementById('email').value; //pegando no meu html o valor escrito no campo com id = email

    var mensagem = document.getElementById('mensagem').value;  //pegando no meu html o valor escrito no campo com id = mensagem

    var textoEnviar = `Meu nome é ${nome}, meu email é ${email}. ${mensagem}`; //montando a mensagem que vou enviar pro wpp

    var linkWpp = `https://wa.me/5567993455044?text=${textoEnviar}`; //montando o link que direciona para o wpp com o texto digitado pelo usuário

    console.log(nome) //exbindo  no console
    console.log(email) //exbindo  no console
    console.log(mensagem) //exbindo  no console
    console.log(textoEnviar) //exbindo  no console

    
    alert('Mensagem enviada com sucesso!'); //exibindo pro usuário que a mensagem foi enviada

    window.open(linkWpp, '_blank') //abrindo em outra janela o aplicativo / url do wpp
});