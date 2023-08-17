<template>
    <div
        class="max-w-[100vw] min-h-[80vh] mx-auto bg-gradient-to-r from-gray-950 via-gray-900 to-gray-950 p-10 flex justify-center overflow-hidden">
        <div class="border-4 border-white overflow-hidden">
            <Header />
            <router-view />
            <Footer />
        </div>
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
  