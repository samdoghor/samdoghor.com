<template>
    <nav class="flex justify-around lg:space-x-4">
        <router-link v-for="header in header" :key="header.id" :to="header.link"
            class="rounded-lg px-3 py-2 text-slate-700 font-bold hover:bg-slate-100 hover:text-slate-900 font-lobstertwo text-lg">
            <span>{{ header.name }}</span>
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
import header from '../assets/data/header';

export default {
    data() {
        return {
            header: header,
        };
    },
};
</script>
  