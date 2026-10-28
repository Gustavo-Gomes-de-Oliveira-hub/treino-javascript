function hoppy(){
    alert("Seja bem-vindo ao Hoppy Happy");
    let confirmo = prompt("Você está indo para o Insano, certo? (apenas sim ou não)");
    let sim = "sim"
    if (confirmo === sim){
        alert("Ótimo, siga adiante");
    }
    else{
        alert("Foi mal carinha, só temos esse, vá para ele.");
    }
    let insano = Number(prompt("Antes de você poder ir ao Insano, confirme a sua altura: (ex:1.50)"));

    let confirme = 1.50;

    if (insano >= confirme){
        alert("Pode passar!");
    }
    else{
        alert("Some daqui, Anão de jardim.");
    }
}
 
//LOJA DE ATACADÃO

function atacado(){
    alert("Hora de conferir o estoque");
    
    let produto = Number(prompt("Eu ainda não tenho certeza de qual produto está com estoque insuficiente"));
    if (produto >= 5){
        alert("Ainda tem o suficiente.");
    }
    else{
        alert("É... vamo ter que comprar mais.");
    }

}

//SEI LA O QUE É ISSO 

function matematico(){
    alert("Hora de testar algumas questões");
    alert("Vamos ver as suas taxas");
    let taxa = Number(prompt("me fale um número: (ex:756.5)"));
    let valor = 756.5;
    if (taxa < valor){
        alert("Insento");
    }
    else{
        alert("Taxa de 10%");
    }

    
}