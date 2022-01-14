<template>
    <NavBar/>
    <CardsPet/>
    <div>
    </div>
</template>

<script>

import NavBar from '../components/Navbar.vue'
import CardsPet from '../components/CardsPet.vue'

export default {
    name : 'Home',
    components: {
        NavBar, 
        CardsPet
    }
}
</script>

<style scoped>

</style>