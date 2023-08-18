<template>
    <nav class="flex justify-around lg:space-x-4 py-5">
        <router-link v-for="header in header" :key="header.id" :to="header.link"

            class="rounded-lg px-3 py-2 text-white font-bold hover:text-slate-400 font-changa text-lg tracking-widest">

            <span>{{ header.name }}</span>
        </router-link>

        <a href="https://www.app.samdoghor.com" target="_blank"

            class="rounded-lg px-3 py-2 text-white font-bold hover:text-slate-400 font-changa text-lg tracking-widest">

            <span>
                Portfolio <i class="pi pi-external-link" style="font-size: 1rem"></i>
            </span>
        </a>
    </nav>
</template>
  
<script>
import header from '../assets/data/header';

export default {
    data() {
        return {
            header: header,
        };
    },
};
</script>
  