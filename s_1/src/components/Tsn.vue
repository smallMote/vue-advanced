<template>
    <div id="tsn">
        <button @click="$router.push({name: 'tsn-a'})">Page A</button>
        <button @click="$router.push({name: 'tsn-b'})">Page B</button>
        <transition name="solid" mode="out-in">
            <router-view :key="$router.fullPath"></router-view>
        </transition>
        
    </div>
</template>
<script>
export default {
    name: 'Tsn',
    methods: {

    }
}
</script>
<style scoped>
.solid-enter-active, .solid-leave-active {
    transition: all .5s
}
.solid-enter{
    transform: translateX(-100%);
    /* transform: scale(5); */
}
.solid-leave-to {
    transform: translateX(100%);
    opacity: 0;
    /* transform: scale(0); */

}
</style>


