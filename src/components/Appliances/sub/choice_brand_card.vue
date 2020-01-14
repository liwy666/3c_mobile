<template>
	<div class="goods-card-type1">
		<div class="goods-img"><img :src="goods_info.ad_img" alt=""></div>
		<div class="goods-name">{{this.goods_name}}</div>
	</div>
</template>
<script>
    export default {
        data() {
            return {};
        },
        props: {
            goods_info: Object,
            toControl: Function,
        },
        computed: {
            goods_name: {
                get: function () {
                    let result = '';
                    if (this.goods_info) {
                        result = this.goods_info.goods_name.split('|');
                        result = result[0];
                    }
                    return result;
                }
            },
            goods_tag: {
                get: function () {
                    let result = '';
                    if (this.goods_info) {
                        result = this.goods_info.goods_name.split('|');
                        result = result[1];
                    }
                    return result;
                }
            },
            goods_price: {
                get: function () {
                    let result = '';
                    if (this.goods_info) {
                        result = this.goods_info.goods_price;
                    }
                    return result;
                }
            },
            origin_goods_price: {
                get: function () {
                    let result = '';
                    if (this.goods_info) {
                        result = this.goods_info.origin_goods_price;
                    }
                    return result;
                }
            },
        },
        created() {

        },
        methods: {},
    };
</script>
<style lang="scss" scoped>
	.goods-card-type1 {
		background-color: white;
		margin: 0 2px;
		padding: 5px;
		border-radius: 5px;
		height: 150px;
		box-sizing: border-box;
		background-image: url("https://mate.ganglonggou.com/lib/images/appliances_choice_brand.png");
		background-repeat: no-repeat;
		background-size: 100% 100%;

		.goods-img {
			width: 90%;
			border-radius: 5px;
			margin: 0 auto;
			margin-top: 3%;
			padding-bottom: 100%;
			height: 0;
			overflow: hidden;
		}

		.goods-name {
			margin-top: 10px;
			padding-left: 5px;
			padding-right: 5px;
			width: 100%;
			border: 0px solid black;
			position: relative;
			box-sizing: border-box;
			display: -webkit-box;
			-webkit-box-orient: vertical;
			flex-direction: column;
			align-content: flex-start;
			flex-shrink: 0;
			font-size: 11px;
			text-align: center;
			line-height: 13px;
			height: 24px;
			color: rgb(62, 62, 62);
			font-weight: bolder;
			-webkit-line-clamp: 2;
			overflow: hidden;
		}
	}
</style>