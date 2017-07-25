<template>
    <div class="loading-wrap">
        <div class="loading-box">
            <div class="loading-circle"></div>
        </div>
    </div>
</template>

<script>
    export default {
		name: 'loading',
    }
</script>

<style lang="scss" scoped>
@import '../../style/mixin';
.loading-wrap {
    @include allcover;
    @include wh(100%, 100%);
    background-color: rgba(255,255,255,.1);
    .loading-box {
        @include center;
        z-index: 1000;
        @include wh(4rem, 4rem);
        .loading-circle {
            position: absolute;
            @include wh(100%, 100%);
            z-index: 10;
            background: url('../../assets/loading.circle.png') right center no-repeat;
            background-size: auto 100%;
            -webkit-transform-origin: 0 0;
            transform-origin: 0 0;
            background-position-x: 0;
            // -webkit-user-select: none;
            // -moz-user-select: none;
            // -ms-user-select: none;
            // user-select: none;
            cursor: pointer;
            -webkit-animation: loading_circle 1.5s normal infinite steps(43);
            animation: loading_circle 1.5s normal infinite steps(43);
        }
    }
}
@keyframes loading_circle {
    from {
        background-position: 0 center;
    }
    to {
        background-position: 100% center;
    }
}

</style>
