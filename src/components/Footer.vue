<template>
    <div class="px-6 lg:ps-24 py-5">
        <div v-for="footer in footer" :key="footer.id" class="text-slate-700 font-bold font-lobstertwo text-lg mx-auto">
            <div>
                <div class="text-white text-center lg:text-center text-base leading-loose tracking-wider font-poiretone">
                    {{ footer.copyright }} {{ footer.year }}
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import footer from '../assets/data/footer';

export default {
    data() {
        return {
            footer: footer,
        };
    },
};
</script>
  