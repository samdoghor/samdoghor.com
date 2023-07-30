<template>
    <div class="overflow-y-hidden flex justify-center my-10">
        <div class="border-2 border-black p-8 flex flex-col max-w-[85vw] overflow-hidden">
            <!-- Add overflow-hidden here -->
            <div class="grid grid-cols-3">
                <div class="col-span-2">
                    <div class="justify-self-center pt-1">
                        <p class="font-bolder text-3xl leading-normal font-caveat">My name is, </p>
                    </div>
                    <div class="justify-self-center pt-1 pe-32">
                        <p class="font-bold text-6xl leading-snug font-lilitaOne">Samuel, Doghor Destiny.</p>
                    </div>
                    <div class="justify-self-center py-10 pe-32">
                        <p class="font-normal text-lg leading-relaxed font-poiretone text-justify">
                            I'm an avid backend web developer, a tech enthusiast, and a WordPress maestro. Embracing the
                            thrill of learning, I'm currently embarking on captivating frontend and software engineering
                            training at <a href="https://andela.com/" target="_blank" class="underline underline-offset-4">
                                Andela
                            </a> and <a href="https://alxafrica.com/" target="_blank" class="underline underline-offset-4">
                                ALX-Africa
                            </a>. I am based in vibrant Nigeria, I
                            also enjoy sharing my tech
                            journey through engaging blog posts. Proud founder of <a href="https://vivirgros.com/"
                                target="_blank" class="underline underline-offset-4"> Vivirgros</a>, where creativity knows
                            no
                            bounds.
                        </p>
                    </div>
                    <div class="justify-self-center pt-2">
                        <p class="font-bolder text-lg leading-normal font-merienda"> @samdoghor </p>
                    </div>
                    <div class="justify-self-center pt-2">
                        <a href="https://www.github.com/samdoghor" target="_blank" class="pe-4"> <i class="pi pi-github"
                                style="font-size: 1rem"></i>
                        </a>
                        <a href="https://www.instagram.com/samdoghor" target="_blank" class="pe-4"> <i
                                class="pi pi-instagram" style="font-size: 1rem"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/samdoghor" target="_blank" class="pe-4"> <i
                                class="pi pi-linkedin" style="font-size: 1rem"></i>
                        </a>
                        <a href="https://www.twitter.com/samdoghor" target="_blank" class="pe-4"> <i class="pi pi-twitter"
                                style="font-size: 1rem"></i>
                        </a>
                        <a href="https://wa.me/qr/CGHZ23GBYBKLC1" target="_blank" class="pe-4"> <i class="pi pi-whatsapp"
                                style="font-size: 1rem"></i>
                        </a>
                        <a href="mailto:talkto@samdoghor.com" target="_blank" class="pe-4"> <i class="pi pi-envelope"
                                style="font-size: 1rem"></i>
                        </a>
                    </div>
                </div>
                <div class="col-span-1">
                    <img src="../assets/images/doghs.jpg" class="relative w-full h-full object-cover">
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'Home',
};
</script>
  