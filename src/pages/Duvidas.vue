<template>
    <header>
        <NavBar/>
    </header>
    <main>
        <div class="box-principal">
            <h1>Duvidas Frequentes</h1>
            <div class="pergunta">
                <h3 class="titulo">QUEM PODE ADOTAR UM PET?</h3>
                <p class="resposta">Se você se sente sozinho e triste, e quer receber muito amor e carinho, com certeza você pode adotar um pet. COM MUITA REPONSABILIDADE!</p>
            </div>
             <div class="pergunta">
                <h3 class="titulo">O QUE PRECISO PRA ADOTAR  UM PET?</h3>
                <p class="resposta">Primeiramente você precisa sentir um amor incondicional por cães ou gatos, ter muita muita responsabilidade, afinal você vai cuidar de outra vidinha, dá muito amor, carinho, atenção, alimentá-lo bem e sempre que preciso levá-lo ao médico!</p>
            </div>
            <div class="pergunta">
                <h3 class="titulo">Os pets são vacinados?</h3>
                <p class="resposta">Alguns já são vacinados, mas essa parte de cuidados o responsável pela adoção ficará sobre esses cuidados</p>
            </div>
            <div class="pergunta">
                <h3 class="titulo">Vocês aceitam somente cães e gatos?</h3>
                <p class="resposta">Sim, no momento nosso site é apenas para adoção de animais domésticos</p>
            </div>
        </div>
    </main>
</template>

<script>
import NavBar from '../components/Navbar.vue'

export default {
    name : 'Duvidas',
    components:{
        NavBar
    }
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap");
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');

*{
    font-family: 'Roboto';
}

main{
    background-image: url('../assets/background-white.jpg');
    height: 120vh;
    width: 100vw;
}

.box-principal{
    position: absolute;
    height: 620px;
    width: 700px;
    top: 120px;
    left: 20%;
    background: white;
    text-align: left;
    padding: 50px;
    box-shadow: 1px 1px 3px black;
}
.box-principal h1 {
    color: #08558b;
    text-align: center;
}

.pergunta{
    margin-top: 50px;
}

.resposta{
    font-family: 'Poppins';
}

</style>