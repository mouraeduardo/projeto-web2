<template>
    <div class="col-6 mt-3 pesquisar-box">
        <input class="pesquisar" type="text" placeholder="Buscar Pet" />
        <a class="img-pesquisar" href="">
          <img
            src="https://cdn-icons-png.flaticon.com/512/622/622669.png"
            alt="lupa"
            width="25px"
            height="25px"
          />
            </a>
    </div>
</template>

<script>
export default {
    name : 'SearchBar'
}
</script>

<style scoped>

.pesquisar-box {
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  margin-top: 15px;
  border: 1px solid #08558b;
  border-radius: 40px;
  width: 600px;
  height: 40px;
  padding: 3px;
  padding-left: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.pesquisar {
  border: none;
  background: none;
  outline: none;
  font-size: 20px;
  line-height: 40px;
}
.img-pesquisar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}


</style>