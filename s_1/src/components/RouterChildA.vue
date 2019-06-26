<template>
    <div id="routerChildA">
        <p>{{msg}}</p>
        <p>{{randomMsg}}</p>
    </div>
</template>

<script>
    export default {
        name: "RouterChildA",
        data() {
            return {
                msg: 'Router Child A',
                randomMsg: '',
            }
        },
        methods: {
            getRandomStr() {
                this .randomMsg= Math.random().toString(32).slice(2);
            }
        },
        created() {
            this.getRandomStr();
        }
    }
</script>

<style scoped>
p {
    text-transform: uppercase;
}
</style>