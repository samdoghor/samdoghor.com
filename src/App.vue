<template>
    <div class="max-w-[100vw] min-h-[100vh] mx-auto bg-gradient-to-r from-white via-zinc-200 to-white py-10">
        <Header />
        <router-view />
        <Footer />
    </div>
</template>
  
<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import 'primeicons/primeicons.css';

export default {
    components: {
        Header,
        Footer, // Register the Header component for use in the template
    },
};
</script>
  