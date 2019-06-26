<template>
    <div id="testRouter">
        <section>
            <BaseButton content="页面A" @click.native="toA"></BaseButton>
            <BaseButton content="页面B" @click.native="$router.push('/r-test/r-childB')"></BaseButton>
        </section>
        <section>
            <router-view :key="$router.fullPath"></router-view>
        </section>
    </div>
</template>

<script>
    export default {
        name: "TestRouter",
        methods: {
            toA() {
                this.$router.push('/r-test/r-childA');
            }
        }
    }
</script>

<style scoped>
#testRouter {
    box-sizing: border-box;
    transition: all 0.4s linear;
    border: 1px solid rgba(44, 62, 35, 0.2);
    border-radius: 6px;
    margin: 30px;
    padding: 15px;
    background: #409eff;
    color: white;
}
</style>