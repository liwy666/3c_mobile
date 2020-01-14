<template>
	<div class="kjhw-box-main">
		<div class="kjhw-box">
			<div :class="[i<2? 'two':'three']" v-for="(item,i) in data" :key="item.id"><img :src="item.ad_img" @click="toSonControl(item)"></div>
		</div>
	</div>
</template>
<script>
    import goodsCard from './GoodsCardYxhh';

    export default {
        data() {
            return {
            };
        },
        props: {
            data: Array,
            toControl: Function,
        },
        computed: {
        },
        mounted() {

        },
        methods: {
            toSonControl(ad_info) {
                this.toControl(ad_info)
            }
        },
        components: {
            goodsCard
        }
    };
</script>
<style lang="scss" scoped>
	.kjhw-box-main {
		width: 100%;
		.kjhw-box{
			width: 95%;
			background-color: #FFFFFF;
			margin: 0 auto;
			padding: 5px;
			box-sizing: border-box;
			display: flex;
			flex-wrap: wrap;
			justify-content: space-around;
			margin-top: 5px;
			margin-bottom: 10px;
			border-radius: 10px;
			.two{
				width: 48%;
				margin-top: 3px;
			}
			.three{
				width: 31%;
				margin-top: 3px;
			}
		}

	}
</style>