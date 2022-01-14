<template>
    <header>
      <div class="container" id="nav-container">
        <nav class="navbar">
          <div class="rea-logo">
            <img class="img-user" src="../assets/logo-completa.png" alt="teste">
            <a class="navbar-brand" href="/">I LOVE PET</a>
          </div>

          <div class="text-center">
            <ul class="nav-list">
              <li><router-link to="/login">Adotar pet</router-link></li>
              <li><router-link to="/cadastro-pet">Cadastrar Pet</router-link></li>
              <li><router-link to="/doacoes">Fazer Doação</router-link></li>
              <li><router-link to="/duvidas">Duvidas</router-link></li>
            </ul>
          </div>

          <div class="col-3 text-center area-logo">
            <a class="logo" href="FeedPets.html">Usuario</a>
            <a class="sair" href="index.html">SAIR</a>
          </div>
        </nav>
      </div>
    </header>
</template>

<script>


export default {
    name: 'Navbar'
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

a {
  color: white;
  text-decoration: none;
  transition: 0.3s;
}

a:hover {
  opacity: 0.7;
}

.navbar {
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-family: "Roboto", sans-serif;
  background-color: #08558b;
  color: white;
  height: 10vh;
  top: 0;
}

.navbar a {
  color: white;
  text-decoration: none;
}

.nav-list {
  list-style: none;
  display: flex;
}

.nav-list li {
  letter-spacing: 1px;
  margin-left: 32px;
}

.area-logo {
  height: 60px;
  width: 200px;
  align-items: center;
  text-align: center;
}
.logo {
  position: absolute;
  align-items: center;
  text-align: center;
  margin-top: 13px;
  margin-left: 5px;
}
.img-user {
  position: relative;
  top: 20%;
  height: 100%;
  width: 70px;
}
.sair {
  position: absolute;
  font-size: 10px;
  margin-top: 32px;
  margin-left: 5px;
}
</style>
