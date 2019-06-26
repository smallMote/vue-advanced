<template>
    <div class="btn">{{content}}</div>
</template>

<script>
    export default {
        name: "BaseButton",
        data() {
            return {
            }
        },
        props: ['content']
    }
</script>

<style scoped>
.btn {
    border-radius: 6px;
    cursor: pointer;
    background: none;
    line-height: 35px;
    text-align: center;
    padding: 5px 15px;
    display: inline-block;
    margin: 5px;
    border: 1px solid white;
    transition: all 0.4s linear;

}
    .btn:hover {
        background: rgba(0, 0, 0, .1);
    }
</style>