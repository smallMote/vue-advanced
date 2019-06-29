<template>
    <div id="tsn">
        <h1 class="title">路由过渡动画</h1>
        <BaseButton 
            @click.native="$router.push({name: 'tsn-a'})"
            :content="'Page A'">
            Page A
        </BaseButton>
        <BaseButton
            @click.native="$router.push({name: 'tsn-b'})"
            :content="'Page B'">
            Page B
        </BaseButton>
        <BaseButton
            @click.native="$router.push({name: 'tsn-number'})"
            :content="'Number Transition'">
            Number Transition
        </BaseButton>
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
@import url('../assets/router-tsn.css');
#tsn {
    padding: 15px 0;
    padding-bottom: 0;
}

h1 {
    padding: 15px 0;
}

</style>


