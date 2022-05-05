// var, let e const

function iniciarTime(iniciaJogo: boolean){
    const horario: string = "20:00hs";
    let nome: string = "Messi e amigos";
    let cidade: string;

    if(iniciaJogo){
        cidade = "em Uberlândia";
    }

    console.log(`${nome} vão jogar ${cidade}`);
}

iniciarTime(false);