<template>
    <div>
        <MyselfComp
            v-for="(btn, index) in btns"
            :key="index"
            :type="btn.type"
            :text="btn.text"
            class="btnGroup"
            >
            {{ btn.text }}
        </MyselfComp>
    </div>
</template>
<script>
import MyselfComp from './MyselfComp'
export default {
    name: 'UseMyselfCom',
    components: {
        MyselfComp
    },
    data() {
        return {
            btns: [
                {type: 'success', text: '成功按钮'},
                {type: 'error', text: '错误按钮'},
                {type: 'warm', text: '警告按钮'},
                {type: 'info', text: '信息按钮'},
                {type: 'default', text: '默认按钮'},
            ]
        }
    }
}
</script>
