<template>    
    <div id="CardsPet">
      <div class="card-box">
        <div class="card">
            <img class="img-fluid" src="https://blog.appegada.com/thumb/blog/1/780/500/1a09bacc2740e0f8e3c2b10bd5bf01ae.jpg" alt="Foto do cachorro"/>
            <div class="informations-card">
                <h3 id="nome-pet">Rex</h3>
                <ul class="info-pet">
                <li class="info-raca">Labrador</li>
                <li class="info-idade">Rua Dom Pedro II, Crateús</li>
                </ul>
                <button class="adotar-pet">Quero Adotar</button>
                <button @click="ativar" class="ver-info">Ver Detalhes</button>
          </div>
        </div>
    </div>
      <span v-show="ativou">
        <InfoPet/>
      </span>
    </div>
</template>

<script>
import InfoPet from './InfoPet.vue'

export default {
    name : 'CardsPet',
    data(){
      return{
        nomePet: null,
        ativou: false
      }
    },
    components:{
      InfoPet
    },
    methods:{
      ativar: function () {
        this.ativou = !this.ativou;
      }
    }

}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap");

* {
  margin: 0;
  padding: 0;
  font-family: "Roboto";
}

a {
  color: white;
  text-decoration: none;
  transition: 0.3s;
}

a:hover {
  opacity: 0.7;
}

.card-box {
  display: flex;
  flex-direction: row;
  padding-top: 120px;
  padding: 100px;
  align-items: center;
  text-align: center;
  max-width: 1045;
  max-height: 215;
  justify-content: space-around;
}

.card {
  display: flex;
  width: 250px;
  height: 300px;
  border-radius: 30px;
  align-items: flex-end;
}
.img-fluid {
  position: fixed;
  width: 220px;
  height: 300px;
  object-fit: cover;
  border-radius: 30px;
  border: 1px solid #08558b;
}
.informations-card {
  position: fixed;
  width: 220px;
  height: 50px;
  border-radius: 10px;
  background-color: #08558b;
  color: white;
  text-align: center;
  overflow: hidden;
}

button{
  width: 85px;
  height: 35px;
  font-size: 10px;
  text-align: center;
  align-items: center;
  font-family: sans-serif bold;
  color:white;
  border-radius: 10px;
  border: 1px solid black;
  
}

.adotar-pet{
  background-color: #31aaff;
  position: absolute;
  z-index: 1;
  top: 0;
  left: -100%;
}

.adotar-pet:active{
  background-color: #054d81;
}

.ver-info{
  background-color: orangered;
  position: absolute;
  z-index: 1;
  top: 0;
  left: -100%;
}

.ver-info:active{
  background-color: rgb(134, 38, 4);

}

.info-pet {
  position: absolute;
  font-size: 14px;
  z-index: 1;
  top: 0;
  left: -100%;
  list-style: none;
  line-height: 21px;
}

.informations-card h3 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.informations-card:hover {
  height: 130px;
  display: flex;
  transition-duration: 1s;
  align-items: flex-start;
}
.informations-card:hover h3 {
  top: 15%;
  left: 50%;
  transition-duration: 0.5s;
}
.informations-card:hover .info-pet {
  top: 25%;
  left: 15px;
  text-align: left;
  transition-duration: 1s;
}

.informations-card:hover .adotar-pet {
  top: 65%;
  left: 15px;
  transition-duration: 1s;
}

.informations-card:hover .ver-info {
  top: 65%;
  left: 55%;
  transition-duration: 1s;
}
</style>