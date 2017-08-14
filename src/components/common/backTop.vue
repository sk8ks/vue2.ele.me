<template>
    <div class="back-top" @click="backTop" v-show="show">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="position:absolute;width:0;height:0">
            <defs>
                <symbol viewBox="0 0 1024 1024" id="backTop" class="icon" width="100%" height="100%">
                    <path d="M109.078 75.5h805.846v134.308H109.076s0-134.308.002-134.308zm805.846 604.384H713.462V948.5H310.538V679.884H109.076L512 276.962l402.924 402.922z"></path>
                </symbol>
            </defs>
        </svg>
        <svg class="">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#backTop"></use>
        </svg>
    </div>
</template>

<script>
    export default {
        name: 'back-top',
		data () {
			return {
				show: !1,
			}
		},
        methods: {
            backTop () {
                document.documentElement.scrollTop = document.body.scrollTop = 0;
            }
        }
    }
</script>
<style lang="scss" scoped>
@import '../../style/mixin';
.back-top {
    position: fixed;
    right: 1rem;
    bottom: 4.6rem;
    @include flex;
    @include flex-align();
    @include flex-justify(center);
    @include wh(3.4rem, 3.4rem);
    border: 1px solid #999;
    border-radius: 50%;
    background: #fff;
    @include transition();
    svg {
        @include wh(44%,44%);
        fill: #999;
    }
}
</style>
