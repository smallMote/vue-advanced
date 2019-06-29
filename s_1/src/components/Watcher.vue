<template>
    <div id="watcher">
        <div class="old">
            <p>
                我们希望渲染完成之后默认就加载数据,但不使用created钩子函数。在这里使用了
                <span>
                    watch: {
                value: {
                handler: 'getMoney',
                immediate: true,
                }
                }
                </span>
                的结构
            </p>
            <label for="input"></label>
            <input id="input" v-model="value" placeholder="You can input there for test"/>
            <div class="listbox">
                <transition-group name="list" mode="out-in" tag="ul">
                    <li v-for="(m, i) in music" :key="i">$ {{ m.id }}</li>
                </transition-group>
            </div>
           
        </div>

    </div>
</template>

<script>
    export default {
        name: "Watcher",
        data() {
            return {
                value: '',
                music: [],
            }
        },
        watch: {
            value: {
                handler: 'getMoney',
                immediate: true,
            }
        },
        methods: {
            getMoney() {
                let ml = Math.round((Math.random() * 4)) + 1;
                this.music = [];
                for (let i = 0; i < ml; i++) {
                    this.music.push(
                        {id: Math.round(parseInt(Math.random() * 100000)).toString()}
                    );
                }
            }
        }
    }
</script>

<style scoped>
    @import url('../assets/router-tsn.css');
    .listbox {
        padding: 15px;
        border-radius: 6px;
        margin: 15px auto;
        max-width: 300px;
        transition: height 0.5s;
    }
    p {
        max-width: 300px;
        margin: 15px auto;
        text-align: start;
        text-indent: 2em;
    }
    p span {
        color: white;
    }
    input{
        min-width: 300px;
        border: none;
        outline: none;
        background: none;
        color: white;
    }
    li , input{
        padding: 5px;
        border-bottom: 1px dashed white;
        list-style: none;
    }
    input::placeholder {
        color: #409eff;
    }
</style>