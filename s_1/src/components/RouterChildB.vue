<template>
    <div id="routerChildB">
        <p>{{msg}}</p>
        <p>{{randomMsg}}</p>
    </div>
</template>

<script>
    export default {
        name: "RouterChildB",
        data() {
            return {
                msg: 'Router Child B',
                randomMsg: '',
            }
        },
        methods: {
            getRandomStr() {
                this.randomMsg= Math.random().toString(32).slice(2);
            }
        },
        created() {
            this.getRandomStr();
        }
    }
</script>

<style scoped lang="less">

</style>