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
		width: 100%;
		overflow: hidden;
		box-sizing: border-box;
		padding: 8px;
		background-color: rgb(246,247,252);
		.goods-img {
			width: 100%;
		}

		p {
			text-align: left;
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
		}

		.name {
			font-weight: bolder;
			font-size: 16px;
		}

		.desc {
			font-size: 14px;
			color: darkgrey;
		}
	}
</style>