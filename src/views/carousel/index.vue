<template>
	<div class="carousel">
		<div v-for="(src, index) in imgSrc" :key="index" class="img" v-show="count === index">
			<img :src="src" />
		</div>
		<ul>
			<li v-for="(x, i) in imgSrc" :key="x" :class="{ active: i == count }"></li>
		</ul>
		<note-board></note-board>
	</div>
</template>

<script>
import NoteBoard from '../../components/NoteBoard'
export default {
	name: 'Carousel',
	components: { NoteBoard },
	data() {
		return {
			count: 0,
			imgSrc: [
				require('@/assets/1.jpg'),
				require('@/assets/2.jpg'),
				require('@/assets/3.jpg'),
				require('@/assets/4.png'),
			],
			timer: null,
		}
	},
	computed: {},
	created() {},
	mounted() {
		this.autoplay()
	},
	// beforeRouteLeave() {
	// 	this.clearInterval()
	// },
	beforeDestroy(){
		this.clearInterval()
	},
	methods: {
		autoplay() {
			this.timer = setInterval(() => {
				this.play()
			}, 1500)
		},
		play() {
			console.log(this.count)
			if (this.count >= this.imgSrc.length - 1) {
				this.count = 0
			} else {
				this.count++
			}
		},
		clearInterval() {
			clearInterval(this.timer)
			this.timer = null
		},
	},
}
</script>

<style lang="scss" scoped>
@import '@/style/variables.scss';
.carousel {
	height: 100%;
	position: relative;

	.img {
		width: 100%;
		img {
			width: 100%;
			object-fit: scale-down;
		}
	}
	ul {
		position: absolute;
		bottom: 0;
		width: 100%;
		text-align: center;
		li {
			display: inline-block;
			margin: 10px;
			border-radius: 50%;
			width: 12px;
			height: 12px;
			border: 2px solid #fff;
			cursor: pointer;
			opacity: 0.5;
		}
		li.active {
			opacity: 0.8;
		}
	}
}
</style>
