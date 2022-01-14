<template>
    <div class="tela-completa">
    </div>
        <div class='infoPet'>
        <div class="img-pet">
            <img src="https://blog.appegada.com/thumb/blog/1/780/500/1a09bacc2740e0f8e3c2b10bd5bf01ae.jpg" alt="">
        </div>
        <div class="info">
            <label class="nome">REX</label>
            <img class="sexo" src="https://thumbs.dreamstime.com/b/s%C3%ADmbolo-masculino-em-design-de-cor-azul-contorno-simples-sinal-sexo-do-vetor-orienta%C3%A7%C3%A3o-sexual-masculina-%C3%ADcone-g%C3%AAnero-162283981.jpg" alt="">

            <label class="idade">Idade Aproximada: </label>
            <label class="teste1">2 Anos</label>

            <label class="peso">peso: </label>
            <label class="teste2">1,62Kg</label>

            <label class="porte">Porte: </label>
            <label class="teste3">Medio</label>

            <label class="especie">Especie: </label>
            <label class="teste4">Cachorro</label>

            <label class="raca">Raça: </label>
            <label class="teste5">SRD</label>

            <label class="descricao">Descrição: </label>
            <label class="teste6">Muito brincalhão e carinhos, resgatado já adulto</label>

            <button class="btn-adotar">Quero Adotar</button>
        </div>
    </div>

</template>

<script>
export default {
    name : 'InfoPet',
    data() {
        return{
            nome: null
        }
    }
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap");
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,600;1,100&display=swap');
*{
    font-family: 'Poppins', sans-serif;
    
}
.tela-completa{
    position: absolute;
    height: 100vh;
    width: 100vw;
    top: 0;
    left: 0;
    background-color: black;
    opacity: 0.4;
}
.info-pet-box{
    display: flex;
    position: absolute;
    background-color: white;
    height: 500px;
    width: 800px;
    border-radius: 10px;
    top: 15%;
    left: 15%;
}
.img-pet{
    width: 50%;
    height: 100%;
    border-radius: 5px;
}

.img-pet img{
    
    height: 100%;
    width: 100%;
    object-fit: cover;
}

.sexo{
    position: absolute;
    height: 30px;
    width: 30px;
    top: 14%;
    left: 510px;
    color: #08558b;
}

label{
    font-size: 11px;
}

.nome{
    position: absolute;
    font-size: 35px;
    font-style: bold;
    color: #08558b;
    top: 12%;
    left: 430px;
}

.idade{
    position: absolute;
    top: 25%;
    left: 430px;
    font-style: italic;
}

.teste1{
    position: absolute;
    font-size: 21px;
    left: 430px;
    top: 27%;
}

.especie{
    position: absolute;
    top: 40%;
    left: 430px;
    font-style: italic;
}

.teste4{
    position: absolute;
    font-size: 20px;
    left: 430px;
    top: 43%;
}

.raca{
    position: absolute;
    top: 55%;
    left: 430px;
    font-style: italic;
}

.teste5{
    position: absolute;
    font-size: 22px;
    left: 430px;
    top: 58%;
}

.descricao{
    position: absolute;
    top: 70%;
    left: 430px;
    font-style: italic;
}

.teste6{
    position: absolute;
    font-size: 15px;
    left: 430px;
    top: 73%;
}

.peso{
    position: absolute;
    top: 25%;
    left: 650px;
    font-style: italic;
}

.teste2{
    position: absolute;
    font-size: 22px;
    left: 650px;
    top: 28%;
}

.porte{
    position: absolute;
    top: 40%;
    left: 650px;
    font-style: italic;
}

.teste3{
    position: absolute;
    font-size: 22px;
    left: 650px;
    top: 43%;
}

.btn-adotar{
    position: absolute;
    top: 85%;
    left: 550px;
    height: 40px;
    width: 120px;
    color: white;
    background-color: #08558b;
    border-style: none;
    border-radius: 10px;
}

.btn-adotar:active{
    
    background-color: #012844;
}

</style>