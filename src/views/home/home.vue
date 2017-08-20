<template>
	<div class="page" >
		<div class="wrapper">
			<div class="scroll-wrapper" >
				<header class="geo-header">
					<div class="bar">
						<div class="get-address" @click="searchAddressOpen">
							<svg class="location"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#location"></use></svg>
							<span v-if="addressName">{{addressName}}</span>
							<span v-else>获取地址中...</span>
							<svg class="arrow-down"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow_down"></use></svg>
						</div>
					</div>

					<a class="head-search" href="javascript:;">
						<input type="text" placeholder="搜索商家、商品" aria-label="搜索商家、商品" class="search-bar">
					</a>
					<div class="hot-search">
						<a v-for="(item, index) in hotSearchWords" :key="index">{{item.word}}</a>
					</div>
				</header>

				<section v-if="loadStatus">
					<!-- <placeholder></placeholder> -->
					<div>
						<img src="../../assets/placeholder.1.ele.me.svg" >
					</div>
				</section>
				<div class="entry-wrap" :class="{loading: !initStatus}">
					<entry-swipe v-if="!geoError"></entry-swipe>
				</div>
				<h3 class="sect-title">推荐商家</h3>
				<section v-if="loadStatus">
					<div>
						<img src="../../assets/placeholder.2.ele.me.svg" >
					</div>
					<div>
						<img src="../../assets/placeholder.2.ele.me.svg" >
					</div>
					<div>
						<img src="../../assets/placeholder.2.ele.me.svg" >
					</div>
				</section>

				<section class="geo-error" v-if="geoError">
					<img src="../../../static/img/4efda8c6bf4734d39faf86fe190c3gif.gif" >
					<h4>附近没有外卖商家</h4>
					<p>饿了么正在以光速来到你身边</p>
				</section>

				<section class="restaurant-sect" :class="{loading: !initStatus}">
					<restaurant-list v-if="!geoError"></restaurant-list>
				</section>

			</div>
			<footer-bar></footer-bar>
			<back-top></back-top>
		</div>
		<search-address mode="reveal" ref="searchAddress"></search-address>
	</div>
</template>

<script>
	import {mapGetters, mapMutations, mapActions} from 'vuex'
	import {eventHub} from 'components/common/eventHub'
	import mixins from 'components/mixin'
	import entrySwipe from './children/entrySwipe'
	import restaurantList from 'components/common/restaurantList'
	import searchAddress from './children/searchAddress'
	import footerBar from 'components/footer/footerBar'
	import backTop from 'components/common/backTop'

	export default {
		name: 'home',
		props: [],
		data () {
			return {
				geoError: null,	//	地理信息错误状态码
				loadStatus: 0,	//	加载状态
				// hotSearchWords: [],	// 热门词
				busy: !1,
			}
		},
		computed: {
			...mapGetters([
				'coordinates',
				'addressName',
				'hotSearchWords',
				'entryList',
				'restaurantList'
			]),
			initStatus () {console.log(this.restaurantList)
				return !this.geoError && this.restaurantList.length && this.entryList.length;
			}
		},
		activated () {},
		mixins: [mixins],
		mounted () {
			// this.loadStatus = 1;
			let geo = this.geoLocation(pos => {
				// this.loadStatus = 0;
				// this.RECORD_COORDS({
				// 	latitude: pos.coords.latitude,
				// 	longitude: pos.coords.longitude,
				// });
				this.geolocationAction()
			}, errCode => {
				// this.loadStatus = 0;
				this.geoError = errCode;
			});
			this.hotSearchWordsAction();
		},

		methods: {
			...mapMutations(['RECORD_COORDS']),
			...mapActions([
				'geolocationAction',
				'hotSearchWordsAction'
			]),
			// hotSearch () {
			// 	// this.hotSearchWordsAction().then(res => this.hotSearchWords = res);
			// 	this.hotSearchWordsAction();
			// },
			// 显示选择地址
			searchAddressOpen () {
				eventHub.$emit('searchAddressOpen');
				// this.$refs.searchAddress.open();
			},
			// loadMore () {
			// 	this.busy = 1;
			// 	console.log('loading... ' + new Date());
			// }
		},

		components: {
			footerBar,
			entrySwipe,
			restaurantList,
			searchAddress,
			backTop,
		}
	}
</script>

<style lang="scss" scoped>
@import '../../style/mixin';
.page {
	@include page();
	.wrapper {
		height: 100%;
		overflow-y: auto;
	}
}
.scroll-wrapper {
	height: 100%;
}
.geo-header {
	padding: .853333rem 1.194667rem;
	height: 10rem;
	@include hc;
	.bar {
		display: flex;
		height: 2.5rem;
		.get-address {
			display: flex;
		    -webkit-box-align: center;
		    -webkit-align-items: center;
		    -ms-flex-align: center;
		    align-items: center;
			max-width: 60%;
		    span {
				margin: 0 .3rem;
				max-width: 80%;
				// width: 100%;
				height: 1.5rem;
		    	color: $fc;
		    	font-size: 1.5rem;
				overflow-x: hidden;
				text-overflow: ellipsis;
				// word-wrap: normal;
				word-break: keep-all;
				white-space: nowrap;
		    }
			.location {
				width: 1.3rem;
				height: 1.3rem;
			}
			.arrow-down {
				width: .5rem;
				height: .5rem;
			}
		}
	}
}


.search-bar {
	display: block;
	margin: .8rem 0;
	width: 100%;
	height: 3rem;
	text-align: center;
	border-radius: 3rem;
	box-shadow: 0 0.1rem 0.1rem 0 rgba(0,0,0,.2);
	color: #333;
	font-size: 1.2rem;
}
.hot-search {
	display: -webkit-box;
	display: -webkit-flex;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-align: center;
	-webkit-align-items: center;
	-ms-flex-align: center;
	align-items: center;
	white-space: nowrap;
	line-height: 1.2rem;
	overflow-x: auto;
	a {
		margin: 0 .6rem;
		color: $fc;
	}
}
// 区块
.sect-title {
	margin-top: .853333rem;
	line-height: 2.986667rem;
	font-weight: 600;
	border-top: 1px solid #eee;
	border-bottom: 1px solid #eee;
	font-size: 1.2rem;
	padding-left: .853333rem;
	background-color: $fc;
}
.geo-error {
	margin: 4rem 0 0;
	display: -webkit-box;
	display: -webkit-flex;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-orient: vertical;
	-webkit-box-direction: normal;
	-webkit-flex-direction: column;
	-ms-flex-direction: column;
	flex-direction: column;
	-webkit-box-align: center;
	-webkit-align-items: center;
	-ms-flex-align: center;
	align-items: center;
	-webkit-box-pack: center;
	-webkit-justify-content: center;
	-ms-flex-pack: center;
	justify-content: center;
	color: $fc6a;
	img {
		display: block;
	}
	h4 {
		margin: 1.2rem 0;
		// font-weight: 200;
		font-size: 1.5rem;
	}
	p {
		color: $fc9;
	}
}
.entry-wrap {
    height: 15rem;
    background: $fc;
}
.entry-wrap.loading {
    background: url('../../assets/placeholder.1.ele.me.svg') repeat-y;
    background-size: 100%;
}
.restaurant-sect {
	padding: 0 0 4rem;
	height: auto;
	background: url('../../assets/placeholder.2.ele.me.svg') repeat-y;
	background-size: 100%;
}
.restaurant-sect.loading {
	height: 100%;
}
</style>
