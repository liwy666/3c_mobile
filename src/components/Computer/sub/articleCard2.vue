<template>
	<div class="goods-card-type1" @click="toSonControl(goods_info)">
		<p class="name">{{this.goods_name}}</p>
		<p class="desc">{{this.goods_tag}}</p>
		<div class="goods-img"><img v-lazy="goods_info.ad_img" alt=""></div>
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
        },
        created() {

        },
        methods: {
            toSonControl(ad_info) {
                this.toControl(ad_info)
            }
        },
    };
</script>
<style lang="scss" scoped>
	.goods-card-type1 {
		width: 98%;
		overflow: hidden;
		box-sizing: border-box;
		padding: 0 5px;
		background-color: white;
		margin: 5px auto;
		border-radius: 5px;
		.goods-img {
			width: 100%;
			img{
				border-radius: 5px;
			}
		}

		p {
			text-align: left;
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
		}

		.name {
			font-weight: bolder;
			color: #2c3e50;
			font-size: 15px;
			padding: 5px;
		}

		.desc {
			font-size: 14px;
			color: darkgrey;
		}
	}
</style>