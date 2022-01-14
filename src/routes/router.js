
import {createRouter, createWebHashHistory} from 'vue-router'

import Home from '../pages/Home.vue'
import Login from '../pages/Login.vue'
import Duvidas from '../pages/Duvidas.vue'
import Doacoes from '../pages/Doacoes.vue'
import CadastroPet from '../pages/CadastroPet.vue'
import CadastroUsuario from '../pages/CadastroUsuario.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/duvidas',
        name: 'duvidas',
        component: Duvidas
    },
    {
        path: '/doacoes',
        name: 'doacoes',
        component: Doacoes
    },
    {
        path: '/cadastro-pet',
        name: 'cadastroPet',
        component: CadastroPet
    },
    {
        path: '/cadastro',
        name: 'cadastro',
        component: CadastroUsuario
    }
];

const router = createRouter({ history: createWebHashHistory(), routes});

export default router; 