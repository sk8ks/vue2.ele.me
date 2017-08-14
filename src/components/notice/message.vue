<template>
    <div class="notice message" :class="{active: status}">
        <h2 class="hd">{{title}}</h2>
        <div class="bd">{{message}}</div>
    </div>
</template>

<script>
    import {mapGetters, mapMutations, mapActions} from 'vuex'

    export default {
		name: 'notice-message',
        data () {
            return {
                status: !1,
                title: null,
                message: null,
                timeId: null,
            }
        },
        computed: {},
        mounted () {

        },
        methods: {
            open ({title = '', message = '', duration = 3000, onClose}) {
                clearTimeout(this.timeId);
                this.title = title;
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
                this.title = null;
                this.message = null;
                this.status = !1;
            }
        },
    }
</script>

<style lang="scss" scoped>
@import '../../style/mixin';
.page {
    @include page;
}
.notice {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 95%;
    min-height: 4rem;
    background-color: $fc;
    border-radius: .3rem;
    box-shadow: 0 0 .6rem rgba(0,0,0,.2);
    @include transition;
    @include transform(translate3d(2.5%, -100%, 0));
    font-size: 1rem;
    .hd {
        padding: 0 1rem;
        line-height: 2.2rem;
        font-size: .9rem;
        background-color: #fff;
        border-radius: .3rem .3rem 0;
    }
    .bd {
        padding: .6rem 1rem;
        background-color: #fcfcfc;
        border-radius: 0 .3rem .3rem;
    }
}
.notice.active {
    @include transform(translate3d(2.5%, .5rem, 0));
}
</style>
