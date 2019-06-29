<template>
    <div id="tsn-number">
        <h2 @click="onTestClick">状态过度</h2>
        <input 
            type="number" 
            v-model="number" 
            step="10"
            placeholder="You can input number"
            :focus='true'>
        <p v-show="number">${{parseInt(anumber) || 0}}</p>
    </div>
</template>

<script>
export default {
    name: 'TsnNumber',
    data() {
        return {
            number: '',
            anumber: 0,
        }
    },
    watch: {
        number() {
            this.onTestClick();
        }
    },
    methods: {
        tweenUpdate(){
            requestAnimationFrame(this.tweenUpdate);
            this.$tweener.update();
        },
        onTestClick() {
            this.$tween.fade(this,{anumber:this.number},1000);
        },
    },
    mounted() {
        this.tweenUpdate();
        let $input = document.querySelector('input');
        $input.focus();
    }
}
</script>
<style scoped>
[type='number'] {
    border: 1px solid white;
    outline: none;
    height: 35px;
    min-width: 150px;
    padding: 0 5px;
    border-radius: 3px;
    background: rgba(51, 51, 51, 0.2);
    color: white;
}
[type='number']::placeholder {
    color: #cccccc;
}
h2 {
    margin: 30px 0;
    font-weight: 300;
}

</style>


