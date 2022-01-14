<template>
    <div class="lado-esquerdo">
        <img class="logo-esquerda" src="../assets/logo-completa.png" alt="">
    </div>
    <div class="lado-direito">
        <label for="">Realizar Login</label>

        <div class="back-login">
            <img src="../assets/login.png" alt="">
            <input type="email" class="login" v-model="email" placeholder="Digite seu email">
        </div>
        
        <div class="back-senha">
            <img src="../assets/cadeado.png" alt="">
            <input type="password" class="senha" v-model="senha" placeholder="Digite sua senha">
        </div>
        
        <button class="entrar" v-on:click="validarConta">Entrar</button>
        <div class="outras-opcoes">
            <router-link to="/cadastro">Quero me cadastrar</router-link> |
            <router-link to="/login">Esqueci minha senha</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Login', 
    data (){
        return{
            email: null,
            senha: null
        }
    },
    methods:{
        validarConta: function () {
            if (this.email == "admin" && this.senha == "admin") {
                alert("Login realizado");
                this.$router.push('/');
            } else {
                alert("Dados Incorretos");
                
            }
        }
    }
} 
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap");
*{
    font-family: 'Roboto';
}
.lado-direito{
    position: absolute;
    display: flex;
    width: 45%;
    height: 100vh;
    top: 0%;
    left: 55%;
    background: linear-gradient(#08558b, #31aaff) no-repeat;
    flex-direction: column;
}
.lado-esquerdo{
    position: absolute;
    width: 55%;
    height: 100vh;
    left: 0;
    top: 0;
    background-image: url('../assets/background-white.jpg');
    align-items: center;
    text-align: center;
}


.lado-esquerdo .logo-esquerda{
    position: absolute;
    left: 15%;
    top: 10%;
}

input{
    width: 310px;
    height: 38px;
    border-radius: 10px;
    border-style: none;
}                   

.login{
    position: absolute;
    top: 0;
    left: 40px;
}

.back-login{
    position: absolute;
    align-self: center;
    width: 350px;
    height: 40px;
    background-color: white;
    border-radius: 10px;
    left: 20%;
    top: 35%;
}

.back-login img{
    position: absolute;
    width: 26px;
    height: 26px;
    top: 7px;
    left: 7px;
}

.senha{
    position: absolute;
    top: 0;
    left: 40px;
}

.back-senha{
    position: absolute;
    align-self: center;
    width: 350px;
    height: 40px;
    background-color: white;
    border-radius: 10px;
    left: 20%;
    top: 42%;
}

.back-senha img{
    position: absolute;
    width: 26px;
    height: 26px;
    top: 7px;
    left: 7px;
}

.entrar{
    position: absolute;
    left: 20%;
    top: 52%;
    width: 350px;
    height: 40px;
    border-style: none;
    border-radius: 10px;
    background-color: #08558b;
    color: white;
    font-size: 17px;
}

.entrar:active{
    background-color:#043253;
}

label{
    position: absolute;
    color: white;
    font-size: 22px;
    align-self: center;
    top: 25%;
}

.outras-opcoes{
    position: absolute;
    align-self: center;
    top: 58%;
    flex-direction: row;
    margin: 10px;
}
a{
    text-decoration: none;
    color: white;
    font-size: 13px;
    flex: row;
}

a:active{
    color: #08558b;
}
</style>