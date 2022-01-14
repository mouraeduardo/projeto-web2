<template>
    <body>
        <div class="box-principal">
            <img src="../assets/logo-completa.png" alt="">
            <form action="" @submit="validarCadastroUsuario">
                <label for="">Cadastrar</label>
                <input v-model="nomeUser" class="nome-cadastro" type="text" name="" id="" placeholder="Nome">
                <input v-model="emailUser" class="email-cadastro" type="email" name="" id="" placeholder="Email">
                <input v-model="senhaUser" class="senha-cadastro" type="password" name="" id="" placeholder="Senha">
                <input v-model="dataNascUser" class="data-cadastro" type="date" name="" id="" placeholder="Data do nascimento">
                <button type="submit" class="cadastrar">Cadastrar</button>
            </form>
        </div>
    </body>
</template>

<script>
export default {
    name : 'CadastroUsuario',
    data(){
        return{
            nomeUser: null,
            emailUser: null,
            senhaUser: null,
            dataNascUser: null
        }
    },
    methods: {
        validarCadastroUsuario: function () {
            if (this.nomeUser == null || 
                this.emailUser == null ||
                this.senhaUser == null ||
                this.dataNascUser == null) {
                alert("Prencha todos os campos");
            } else {
                alert("Usuario Cadastrado")
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
body{
    background-image: url('../assets/background-white.jpg');
    height: 100vh;
    width: 100vw;
}

.box-principal{
    position: absolute;
    height: 80%;
    width: 60%;
    top: 10%;
    left: 20%;
    background: linear-gradient(#08558b, #31aaff) no-repeat;
    border-radius: 10px;
    align-items: center;
    text-align: center;
}
.box-principal form{
    flex-direction: column;
}
input{
    position: absolute;
    align-self: center;
    flex-direction: column;
    border-style: none;
    border-radius: 10px;
    width: 350px;
    height: 40px;
    left: 27%;
}

.nome-cadastro{
    top: 35%;
    font-size: 15px;
}

.email-cadastro{
    top: 45%;
    font-size: 15px;
}

.senha-cadastro{
    top: 55%;
    font-size: 15px;
}

.data-cadastro{
    top: 65%;
    font-size: 15px;
}

.cadastrar{
    position: absolute;
    left: 27%;
    top: 76%;
    width: 350px;
    height: 40px;
    border-style: none;
    border-radius: 10px;
    background-color: #08558b;
    color: white;
    font-size: 17px;
}

label{
    position: absolute;
    color: white;
    font-size: 24px;
    align-self: center;
    top: 25%;
    left: 43%;
}

img{
    position: absolute;
    top: 1%;
    left: 40%;
    widows: 150px;
    height: 150px;
}

</style>