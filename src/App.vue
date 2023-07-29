<template>
    <div class="max-w-[100vw] max-h-screen mx-auto bg-gradient-to-r from-white via-zinc-200 to-white">
            <router-link to="/"> <span> Home </span></router-link>
            <a href="https://www.app.samdoghor.com" target="_blank"> <span> Portfolio </span></a>
            <router-link to="/blog"> <span> Blog </span></router-link>
            <router-link to="/courses"> <span> Courses </span></router-link>
        <router-view/>
    </div>
</template>
