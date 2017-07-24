<template>
    <div class="construction">
        <header-bar></header-bar>
        <h2>正在建设中...<p>UNDER CONSTRUCTION</p></h2>
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
    @include wh(100%, 100%);
    background: #f6f6f6 url('../../assets/construction.jpg') center top no-repeat;
    background-size: 100%;
    h2 {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
        width: 66%;
        height: 7.2rem;

        text-align: center;
        @include font(1.8rem, 4rem);
        color: #5A6B73;
        p {
            border-top: #B3B4B5 solid 1px;
            @include font(1.2rem, 3.2rem);
            color: #b6b6b6;
        }
    }
}
</style>
