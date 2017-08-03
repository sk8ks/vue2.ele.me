<template>
    <header class="header">
        <div class="head-wrapper">
            <button class="btn-back" @click="back"><svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-left"></use></svg></button>
            <h1 class="title">{{title}}</h1>
        </div>

    </header>
</template>
<script>
    import {mapGetters, mapMutations, mapActions} from 'vuex'
    export default {
        name: 'header-bar',
        props: ['title'],
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
.header {
    // position: fixed;
    // top: 0;
    // left: 0;
    // z-index: 900;
    // position: sticky;
    // top: 0;
    // z-index: 900;
    @include flex();
    @include flex-align();
    @include flex-justify();
    @include wh(100%, 3.666667rem);
    color: #fff;
    font-size: .48rem;
    background-color: #2395ff;
    .head-wrapper {
        @include flex();
        @include flex-align();
        @include wh(100%, 100%);
        @include bgimg;

        .title {
            padding: 0 3.666667rem;
            @include wh(100%, 100%);
            line-height: 3.666667rem;
            text-align: center;
            @include font(1.4rem, 3.666667rem);
            font-weight: 500;
            color: $fc;
        }
        .btn-back {
            position: absolute;
            left: 0;
            @include wh(3.666667rem, 3.666667rem);
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
