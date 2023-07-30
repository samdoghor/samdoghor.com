<template>
    <nav class="flex justify-around space-x-4">
        <router-link v-for="links in navlinks" :key="links.id" :to="links.link"
            class="rounded-lg px-3 py-2 text-slate-700 font-bold hover:bg-slate-100 hover:text-slate-900 font-lobstertwo text-lg">
            <span>{{ links.name }}</span>
        </router-link>

        <a href="https://www.app.samdoghor.com" target="_blank"
            class="rounded-lg px-3 py-2 text-slate-700 font-bold hover:bg-slate-100 hover:text-slate-900 font-lobstertwo text-lg">
            <span>
                Portfolio <i class="pi pi-external-link" style="font-size: 1rem"></i>
            </span>
        </a>
    </nav>
</template>
  
<script>
import navLinks from '../assets/data/home';
import 'primeicons/primeicons.css';

export default {
    data() {
        return {
            navlinks: navLinks,
        };
    },
};
</script>
  