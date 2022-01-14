<template>
    <Navbar/>
    <main>
        <div class="box-principal">
            <div class="lado-direito">
                <img class="qr-code" src="https://sigconsaida.mg.gov.br/wp-content/uploads/2020/03/transparencia.png" alt="">
                <label class="chave-pix" for="">chavepixilovepet@teste.com</label>
            </div>
            <div class="lado-esquerdo">
                <h2>Doações via internet</h2>                
                <p>No momentos estamos aceitando apenas doações apenas via pix (QR code e chave ao lado esquerdo)</p>
                <br><h2>Doações Presenciais</h2> 
                <p>Centro de doações 1: <br>Rua dos bobos, 0 centro - Crateús - CE</p>
                <p>Centro de doações 2: <br> Universidade Federal do Ceará - Campus de Crateús - CE</p>
            </div>
        </div>
    </main>
</template>

<script>
import Navbar from '../components/Navbar.vue'

export default {
    name : 'Doacoes',
    components : {
        Navbar
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap");

*{
    font-family: 'Roboto';
    color: white;
}

main{
    background-image: url('../assets/background-white.jpg');
    height: 100vh;
    width: 100vw;
}

.box-principal{
    position: absolute;
    height: 400px;
    width: 700px;
    top: 120px;
    left: 20%;
    background: linear-gradient(#08558b, #31aaff) no-repeat;
    padding: 50px;
    box-shadow: 1px 1px 3px black;
}
.lado-esquerdo{
    position: absolute;
    height: 100%;
    width: 50%;
    left: 52%;
}

.lado-direito{
    position: absolute;
    height: 100%;
    width: 50%;
    left: 0%;
}

.qr-code{
    position: absolute;
    height: 230px;
    width: 230px;
    left: 75px;
    top: 60px;
}

.chave-pix{
    position: absolute;
    top: 310px;
    left: 85px;
}
p{
    font-family: 'Poppins';
}
</style>