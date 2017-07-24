<template>
    <div class="panel address-panel">
        <header class="header">
            <div class="head-wraper">
                <button class="btn-back" @click="back"><svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-left"></use></svg></button>
                <h1 class="title"></h1>
            </div>

        </header>
    </div>
</template>
<script>
    import {mapGetters, mapMutations, mapActions} from 'vuex'
    export default {
        name: 'header',
        props: [],
        data () {
            return {

            }
        },
        computed: {},
        activated () {},
        mounted () {},
        methods: {
            back () {this.$router.go(-1)}
        }
    }
</script>
<style lang="scss" scoped>
@import '../../style/mixin';
.panel {
    @include page;
}
.header {
    position: relative;
    @include flex();
    @include flex-align();
    @include flex-justify();
    width: 100%;
    height: 3.666667rem;
    color: #fff;
    font-size: .48rem;
    background: #2395ff;
    .head-wraper {
        @include flex();
        @include flex-align();
        width: 100%;
        height: 100%;
        background-image: -webkit-linear-gradient(left,#0af,#0085ff);
        background-image: linear-gradient(90deg,#0af,#0085ff);
        .title {
            padding: 0 3.666667rem;
            width: 100%;
            line-height: 3.666667rem;
            text-align: center;
            @include font(1.4rem, 3.666667rem);
            color: $fc;
        }
        .btn-back {
            position: absolute;
            left: 0;
            width: 3.666667rem;
            height: 100%;
            background-color: transparent;
            svg {
                width: 50%;
                height: 50%;
                fill: $fc;
            }
        }
    }
}
</style>
