<template>
    <!-- The outer div is flex to horizontally center the content -->

    <div class="overflow-y-hidden flex justify-center m-4 md:m-6">
        <!-- The inner div is a container with borders and padding -->
        <div class="">
            <!-- The grid container with 3 columns -->
            <div class="grid lg:grid-cols-3">
                <!-- Right Column (Order 1 on tablet and mobile) -->
                <div class="col-span-2 lg:col-span-1 lg:order-2 pb-10 lg:pb-0 border-white border-8">
                    <!-- Centered image -->
                    <img src="../assets/images/doghs.jpg"
                        class="relative w-full md:w-80 lg:w-full h-full object-cover rounded-full lg:rounded-none mx-auto">
                </div>

                <!-- Left Column (Order 2 on tablet and mobile) -->
                <div class="col-span-1 lg:col-span-2 lg:order-1 overflow-hidden">
                    <!-- Centered content -->
                    <div class="justify-self-center pt-1 pe-4 lg:pe-32 text-center">

                        <p class="font-bolder text-3xl leading-normal font-caveat text-white">My name is, </p>
                    </div>
                    <div class="justify-self-center pt-1 pe-4 lg:pe-32">
                        <p class="font-bold text-6xl leading-snug font-lilitaOne text-white">Samuel, Doghor
                            Destiny.</p>
                    </div>
                    <div class="justify-self-center py-10 pe-4 lg:pe-32 overflow-hidden text-white">
                        <p class="font-normal text-xl leading-loose tracking-wider font-ysabeauoffice lg:text-justify">

                            I'm an avid backend web developer, a tech enthusiast, and a WordPress maestro. Embracing the
                            thrill of learning, I'm currently embarking on captivating frontend and software engineering
                            training at <a href="https://andela.com/" target="_blank" class="underline underline-offset-4">
                                Andela
                            </a> and <a href="https://alxafrica.com/" target="_blank" class="underline underline-offset-4">
                                ALX-Africa</a>, respectively. I am based in vibrant Nigeria, I
                            also enjoy sharing my tech
                            journey through engaging blog posts. <a href="https://app.samdoghor.com/" target="_blank"
                                class="underline underline-offset-4"> See my Portfolio</a>
                        </p>
                    </div>
                    <div class="justify-self-center pt-2 text-white">
                        <p class="font-bolder text-lg leading-normal font-merienda"> @samdoghor </p>
                    </div>
                    <div class="justify-self-center pt-2 overflow-hidden text-white">

                        <!-- Social media links go here -->
                        <a href="https://www.github.com/samdoghor" target="_blank" class="pe-4"> <i class="pi pi-github"
                                style="font-size: 1rem"></i>
                        </a>
                        <a href="https://www.instagram.com/samdoghor" target="_blank" class="pe-4"> <i
                                class="pi pi-instagram" style="font-size: 1rem"></i>
                        </a>
                        <a href="https://www.tiktok.com/@samdoghor" target="_blank" class="pe-4"> <font-awesome-icon
                                icon="fa-brands fa-tiktok" style="font-size: 1rem" />
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
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'Home',
};
</script>

