<template>
	<div class="goods-list-2" :id="goods_list_id">
		<div class="title1" v-if="goods_list.length>0"><img :src="title_url" alt="">{{title_name}}<img :src="title_url" alt=""></div>
		<div class="goods-list">
			<goods-card v-for="item in goods_list" :key="item.id" :to-control="toSonControl"
				:goods_info="item"></goods-card>
		</div>
	</div>
</template>
<script>
    import goodsCard from './common_goods_card'

    export default {
        data() {
            return {
                title_url:"https://mate.ganglonggou.com/lib/images/new_3c_title.png"
			};
        },
        props: {
            goods_list_id:String,
            title_name: String,
            goods_list: Array,
            toControl: Function,
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
	.goods-list-2 {
		.title1 {
			width: 200px;
			height: 20px;
			display: flex;
			line-height: 20px;
			font-size: 16px;
			font-weight: bolder;
			margin: 10px auto;
			justify-content: center;
			img {
				display: block;
				width: 20px;
				height: 20px;
				margin-right: 5px;
				margin-left: 5px;
			}
		}

		.banner {
			width: 95%;
			margin: 5px auto;
			border-radius: 10px;
			overflow: hidden;
		}
		.goods-list{
			width: 95%;
			margin: 0 auto;
			display: flex;
			flex-wrap: wrap;
		}
	}
</style>