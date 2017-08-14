<template>
    <transition name="toast" v-if="status">
        <div class="notice toast">{{message}}</div>
    </transition>
</template>

<script>
    import {mapGetters, mapMutations, mapActions} from 'vuex'
    export default {
		name: 'notice-toast',
        data () {
            return {
                status: !1,
                message: null,
                timeId: null,
            }
        },
        computed: {},
        mounted () {},
        methods: {
            open ({message = '', duration = 3000, onClose}) {
                clearTimeout(this.timeId);
                this.message = message;
                this.status = 1;
                // this.duration = duration;
                this.timeId = setTimeout(() => {
                    typeof onClose === 'function' && onClose();
                    this.close();
                }, duration)
            },
            close () {
                clearTimeout(this.timeId);
                this.message = null;
                this.status = !1;
            },
        },
    }
</script>

<style lang="scss" scoped>
@import '../../style/mixin';
.toast-enter-active, .toast-leave-active {
  transition: opacity .5s ease;
}
.toast-enter, .toast-leave-to {
  opacity: 0;
}
.notice.toast {
    @include cl;
    bottom: 20%;
    z-index: 2000;
    padding: .7rem 1.2rem;
    max-width: 50%;
    text-align: center;
    background-color: rgba(0,0,0,.66);
    border-radius: 3rem;
    font-size: 1rem;
    color: $fc;
    pointer-events: none;
}

</style>
