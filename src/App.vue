<template>
    <div class="max-w-[100vw] min-h-[100vh] overflow-hidden mx-auto bg-gradient-to-r from-white via-zinc-200 to-white p-10">
        <nav class="flex justify-around space-x-4">

            <router-link v-for="links in navlinks" :key="links.id" :to="links.link"
                class="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900"> <span>
                    {{ links.name }}
                </span>
            </router-link>

            <a href="https://www.app.samdoghor.com" target="_blank"
                class="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900"> <span>
                    Portfolio <i class="pi pi-external-link" style="font-size: 1rem"></i> </span>
            </a>

        </nav>
        <div class="border grid min-h-[80vh]">



            <div class="flex justify-center pt-16 pb-1">
                <img class="rounded-full max-w-[20%]" alt="Samuel Doghor" src="../src/assets/images/doghs.jpg" />
            </div>
            <div class="justify-self-center pt-1">
                <span class="font-bold text-6xl"> Coming Soon ! </span>
            </div>
            <div class="justify-self-center pb-16 pt-6">
                <a class="font-normal text-l" href="https://www.app.samdoghor.com" target="_blank"> Click here to view
                    Portfolio <i class="pi pi-external-link" style="font-size: 1rem"></i> </a>
            </div>

        </div>
        <!-- <router-view /> -->
    </div>
</template>

<script>
import navLinks from '../src/assets/data/Home.vue'
import 'primeicons/primeicons.css';

export default {
    data() {
        return {
            navlinks: navLinks
        }
    }
}
</script>
