<script>
    export default {
        name: "MyselfComp",
        render(h) {
            return h('div',{
                class: {
                    btn: true,
                    success: this.type === 'success',
                    error: this.type === 'error',
                    warm: this.type === 'warm',
                    info: this.type === 'info',
                    default: this.type === 'default'
                },
                domProps: {
                    innerHTML: this.$slots.default[0].text
                },
                on: {
                    click: this.clickHandle
                }
            })
        },
        methods: {
            clickHandle() {
                alert(`${this.type} --> ${this.text}`);
            }
        },
        props: {
            type: {
                type: String,
                default: 'default'
            },
            text: {
                type: String,
                default: 'default'
            }
        }
    }
</script>

<style scoped>
    div {
        border: 1px solid #cccccc;
        padding: 5px 15px;
        display: inline-block;
        border-radius: 3px;
        cursor: pointer;
        transition: all 0.4s ease;
    }
    .success {
        border-color: seagreen;
        color: seagreen;
    }
    .success:hover {
        background: rgba(46, 139, 87, 0.08);
    }
    .warm {
        border-color: orange;
        color: orange;
    }
    .warm:hover {
        background: rgba(255, 165, 0, 0.08);
    }
    .error {
        border-color: indianred;
        color: indianred;
    }
    .error:hover {
        background: rgba(205, 92, 92, 0.08);
    }
    .info {
        border-color: #409eff;
        color: #409eff;
    }
    .info:hover {
        background: rgba(64, 158, 255, 0.08);
    }
    .default {
        border-color: #cccccc;
        color: #333333;
    }
    .default:hover {
        background: rgba(51, 51, 51, 0.08);
    }

</style>