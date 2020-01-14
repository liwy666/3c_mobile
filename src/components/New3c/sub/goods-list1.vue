<template>
	<div class="goods-list-1" :id="list_id">
		<div class="title1" v-if="goods_list.length>0"><i :style="'background-color:'+ title_color"></i>{{title_name}}
		</div>
		<div class="banner" v-if="banner_data"><img :src="banner_data.ad_img" @click="toSonControl(banner_data)"></div>
		<div class="goods-list">
			<goods-card v-for="item in goods_list" :key="item.id" :number="number" :to-control="toSonControl"
				:goods_info="item"></goods-card>
		</div>
	</div>
</template>
<script>
    import goodsCard from './number_goods_card'

    export default {
        data() {
            return {};
        },
        props: {
            list_id: String,
            title_name: String,
            title_color: String,
            banner_data: Object,
            goods_list: Array,
            toControl: Function,
            number: Number,
        },
        computed: {},
        created() {

        },
        methods: {
            toSonControl(ad_info) {
                this.toControl(ad_info)
            }
        },
        components: {
            'goods-card': goodsCard,
        }
    };
</script>
<style lang="scss" scoped>
	.goods-list-1 {
		.title1 {
			text-align: left;
			padding-left: 10px;
			margin-top: 10px;
			height: 20px;
			display: flex;
			line-height: 20px;
			font-size: 16px;
			font-weight: bolder;

			i {
				border-radius: 3px;
				display: block;
				width: 4px;
				height: 20px;
				margin-right: 5px;
			}
		}

		.banner {
			width: 95%;
			margin: 5px auto;
			border-radius: 10px;
			overflow: hidden;
		}

		.goods-list {
			width: 95%;
			margin: 0 auto;
			display: flex;
			flex-wrap: wrap;
		}
	}
</style>