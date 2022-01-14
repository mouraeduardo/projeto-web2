<template>
    <header>
        <NavBar/>
    </header>
    <main>
        <div class="box-principal">
            <form action="" @submit="validarPet">
                <label>Cadastro Pet</label>
                <input v-model="dadosPet.nome" class="nome-pet" type="text" placeholder="Nome">
                <input v-model="dadosPet.idade" class="idade-pet" type="number" placeholder="Idade">
                <select v-model="dadosPet.especie" class="especie-pet" name="especie" id="especie" >
                    <option value="cachorro">Cachorro</option>
                    <option value="Gato(a)">Gato(a)</option>
                </select>
                <input v-model="dadosPet.raca" class="raca-pet" type="text" placeholder="Raça">
                <select v-model="dadosPet.sexo" class="sexo-pet" name="Sexo" id="" >
                    <option value="macho">Macho</option>
                    <option value="femea">Femea</option>
                </select>
                <input v-model="dadosPet.peso" class="peso-pet" type="text" placeholder="Peso">
                <input class="foto-pet" type="file" id="">
                <input v-model="dadosPet.descricao" class="descricao-pet" type="text" placeholder="Descrição">
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    </main>
</template>

<script> 

import NavBar from '../components/Navbar.vue'

export default {
    name : 'CadastroPet',
    data (){
        return {
            dadosPet : [ {
                    nome: null,
                    idade: null,
                    especie: null,
                    raca: null,
                    sexo: null,
                    peso: null,
                    foto: null,
                    descricao: null
                }
            ]
        } 
    }, 
    methods : {
        validarPet : function () {    
            if (this.dadosPet.nome == null || 
                this.dadosPet.idade == null ||
                this.dadosPet.especie == null ||
                this.dadosPet.raca == null ||
                this.dadosPet.sexo == null ||
                this.dadosPet.peso == null ||
                this.dadosPet.descricao == null ) {
                
                alert("campos não preenchidos")
            } else {
                var lista_pet = JSON.parse(localStorage.getItem('lista-pet') || '[]');

            lista_pet.push({
                nome: this.dadosPet.nome,
                idade: this.dadosPet.idade,
                especie: this.dadosPet.especie,
                raca: this.dadosPet.raca,
                sexo: this.dadosPet.sexo,
                peso: this.dadosPet.peso,
                foto: this.dadosPet.foto,
                descricao: this.dadosPet.descricao
            });

            localStorage.setItem("lista-pet", JSON.stringify(lista_pet));
            alert("pet cadastrado");
            }
        }
    },
    components: {
    NavBar
  }
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap");

*{
    font-family: 'Roboto';
}

main{
    background-image: url('../assets/background-white.jpg');
    height: 110vh;
    width: 100vw;
}

.box-principal{
    position: absolute;
    height: 110vh;
    width: 700px;
    top: 75px;
    left: 24%;
    background: linear-gradient(#08558b, #31aaff) no-repeat;
    align-items: center;
    text-align: center;
    box-shadow: 1px 1px 3px black;
}

input, select{
    position: absolute;
    border-style: none;
    border-radius: 10px;
    width: 350px;
    height: 40px;
    left: 175px;
    
}
button{
    position: absolute;
    left: 175px;
    top: 620px;
    width: 350px;
    height: 40px;
    border-style: none;
    border-radius: 10px;
    background-color: #08558b;
    color: white;
    font-size: 17px;
}

.box-principal label{
    position: absolute;
    color: white;
    font-size: 24px;
    left: 39%;
    top: 65px;

}

.nome-pet{
    top: 150px;
}

.idade-pet{
    top: 205px;
}

.especie-pet{
    top: 260px;
}

.raca-pet{
    top: 315px;
}

.sexo-pet{
    top: 370px;
}

.peso-pet{
    top: 425px;
}

.foto-pet{
    top: 480px;
}

.descricao-pet{
    top: 535px;
    height: 60px;
}
</style>