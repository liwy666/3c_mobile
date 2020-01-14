<template>
	<div class="goods-card-type1">
		<i class="tag">{{this.goods_index}}</i>
		<div class="goods-img"><img :src="goods_info.ad_img"></div>
		<div class="goods-name">{{this.goods_name}}</div>
		<div class="goods-desc">{{this.goods_tag}}</div>
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
            goods_index: Number,
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
        },
        created() {
            //this.getGoodsSalesVolume();
        },
        methods: {
            toSonControl(ad_info) {
                this.toControl(ad_info)
            },
            getGoodsSalesVolume() {
                if (this.goods_info.url) {
                    this.$fetch(this.goods_info.url).then((msg) => {
                        if (msg) {
                            console.log(msg);
                        }
                    })
                }
            }
        },
    };
</script>
<style lang="scss" scoped>
	.goods-card-type1 {
		width: 100%;
		border-left: 1px solid rgba(0, 0, 0, .1);
		height: 160px;
		position: relative;

		.goods-img {
			width: 100%;
			margin: 0 auto;
			padding-bottom: 95%;
			height: 0;
			overflow: hidden;
		}

		.goods-name {
			padding: 0 5px;
			box-sizing: border-box;
			width: 100%;
			border: 0 solid black;
			position: relative;
			box-sizing: border-box;
			display: -webkit-box;
			-webkit-box-orient: vertical;
			flex-direction: column;
			align-content: flex-start;
			flex-shrink: 0;
			font-size: 13px;
			text-align: left;
			line-height: 16px;
			height: 30px;
			color: rgb(62, 62, 62);
			-webkit-line-clamp: 2;
			overflow: hidden;

		}

		.goods-desc {
			position: absolute;
			font-size: 10px;
			bottom: 5px;
			right: 5px;
			color: darkgrey;
		}

		.tag {
			display: block;
			left: 2%;
			width: 25px;
			height: 30px;
			font-style: normal;
			line-height: 30px;
			color: white;
			font-size: 14px;
			text-align: center;
			font-weight: bolder;
			background-image: url("https://mate.ganglonggou.com/lib/images/tmt_b30716.png");
			background-repeat: no-repeat;
			background-size: 100% 100%;
			position: absolute;
		}
	}
</style>