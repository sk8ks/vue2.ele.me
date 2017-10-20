<template>
    <div class="construction">
        <header-bar title="建设中..."></header-bar>
        <h2>正在建设中...<p>UNDER CONSTRUCTION</p></h2>
        <footer-bar></footer-bar>
    </div>
</template>

<script>
    import footerBar from '../footer/footerBar'
    import headerBar from '../header/headerBar'
    export default {
		name: 'construction',
        data () {
            return {}
        },
        computed: {},
        mounted () {},
        methods: {},
        components: {headerBar, footerBar}
    }
</script>

<style lang="scss" scoped>
@import '../../style/mixin';
.construction {
    position: absolute;
    @include wh;
    background: #f6f6f6 url('http://rossi.wang:8081/vue2.ele.me/img/9fb04779371b5b162b41032baf5f3gif.gif') center 20% no-repeat;
    background-size: 60%;
    h2 {
        position: absolute;
        left: 0;
        right: 0;
        top: 50%;
        bottom: 0;
        margin: auto;
        width: 18rem;
        height: 7.2rem;
        text-align: center;
        @include font(1.6rem, 4rem);
        color: #5A6B73;
        p {
            border-top: #B3B4B5 solid 1px;
            @include font(1.2rem, 3rem);
            color: #b6b6b6;
        }
    }
}
</style>
