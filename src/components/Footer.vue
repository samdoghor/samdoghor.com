<template>
    <div class="px-6 lg:ps-24">
        <div v-for="footer in footer" :key="footer.id" class="text-slate-700 font-bold font-lobstertwo text-lg">
            <div>
                <div class="text-slate-700 text-center lg:text-start text-base leading-loose tracking-wider font-poiretone">
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
  