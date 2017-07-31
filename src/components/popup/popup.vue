<template>
    <transition :name="mode" v-if="show" >
		<div class="popup" :class="mode" >
			<div class="modal modal-overlay" :class="overlay" ></div>
			<!-- <div v-show="mode == 'overlay'" class="ui-sidebar-bd" transition="modal-overlay" :data-dir="dir">

				<button class="btn">收起</button>
			</div> -->
			<div v-show="mode == 'reveal'" class="bd" :data-dir="dir">
				<slot :name="slotname"></slot>
				<!-- <button class="btn" @click="close">收起</button> -->
			</div>
		</div>
	</transition>
</template>
<script>
    import {mapGetters, mapMutations, mapActions} from 'vuex'
    import mixins from 'components/mixin'
    import {eventHub} from 'components/common/eventHub'
    export default {
        name: 'popup',
        props: [ 'dir', 'mode', 'slotname'],

		data () {
			return {
				show: !1,
				overlay: '',
				sidebar: ''
			}
		},

		watch: {
			show () {this.overlay = this.show ? 'modal-overlay-visible' : ''}
		},
        created () {
             eventHub.$on('popupOpen', this.open);
             eventHub.$on('popupClose', this.close);
        },
        mounted () {},
        mixins: [mixins],
		methods: {
			open (cb) {
                this.noScroll(!!1);
				this.show = 1;
				typeof cb === 'function' && cb();
			},
			close (cb) {
                this.noScroll(!1);
				this.show = !1;
				typeof cb === 'function' && cb();
			}
		},

    }
</script>
<style lang="scss" scoped>
@import '../../style/mixin';
// @import "../../../style/animate";
.popup {
    @include popup;
    .bd {
        @include center();
    	z-index: 10001;
    	@include wh;
    	background-color: #fff;
    	overflow-y: auto;
    }
    .modal {
    	@include wh;
    }
    // .modal-overlay {
    //     @include center();
    //     @include wh(100%,100%);
    //     background: rgba(0, 0, 0, 0.4);
    //     z-index: 9999;
    //     visibility: hidden;
    //     opacity: 0;
    //     -webkit-transition-duration: 400ms;
    //     transition-duration: 400ms;
    // }
}
.reveal-enter-active, .reveal-leave-active {
    @include transition();
    @include transform(translate3d(0,0,0));
}
.reveal-enter, .reveal-leave-active {
    @include transform(translate3d(100%,0,0));
}
</style>
