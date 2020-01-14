<template>
	<div class="grid-navigation">
		<div class="item" @click="toGoodsBox(0)"><img src="https://mate.ganglonggou.com/lib/images/new_3c_navigation_item1.png" alt=""><div>手机通讯</div></div>
		<div class="item" @click="toGoodsBox(1)"><img src="https://mate.ganglonggou.com/lib/images/new_3c_navigation_item2.png" alt=""><div>数码配件</div></div>
		<div class="item" @click="toGoodsBox(2)"><img src="https://mate.ganglonggou.com/lib/images/new_3c_navigation_item3.png" alt=""><div>车载设备</div></div>
		<div class="item" @click="toGoodsBox(3)"><img src="https://mate.ganglonggou.com/lib/images/new_3c_navigation_item4.png" alt=""><div>穿戴设备</div></div>
		<div class="item" @click="toGoodsBox(4)"><img src="https://mate.ganglonggou.com/lib/images/new_3c_navigation_item5.png" alt=""><div>影音娱乐</div></div>
		<div class="item" @click="toGoodsBox(5)"><img src="https://mate.ganglonggou.com/lib/images/new_3c_navigation_item6.png" alt=""><div>智能设备</div></div>
	</div>
</template>
<script>
    export default {
        data() {
            return {};
        },
        computed: {

		},
        created() {

        },
        methods: {
            toGoodsBox(index){

                let phone_list = document.querySelectorAll('#phone_list')[0].offsetTop;
                let electronics_list = document.querySelectorAll('#electronics_list')[0].offsetTop;
                let car_list = document.querySelectorAll('#car_list')[0].offsetTop;
                let put_list = document.querySelectorAll('#put_list')[0].offsetTop;
                let movie_list = document.querySelectorAll('#movie_list')[0].offsetTop;
                let intellect_list = document.querySelectorAll('#intellect_list')[0].offsetTop;
                let goods_box_top = [];
                goods_box_top.push(phone_list);
                goods_box_top.push(electronics_list);
                goods_box_top.push(car_list);
                goods_box_top.push(put_list);
                goods_box_top.push(movie_list);
                goods_box_top.push(intellect_list);

                window.scrollTo(0, goods_box_top[index] - 80);
			}
		},
    };
</script>
<style lang="scss" scoped>
	.grid-navigation{
		border-radius: 10px;
		padding-top: 20px;
		display: flex;
		flex-wrap: wrap;
		width: 95%;
		margin: 0 auto;
		background-color: white;
		.item{
			width: 33.3%;
			text-align: center;
			margin-bottom: 20px;
			font-size: 12px;
			color: #2c3e50;
			img{
				width: 35%;
			}
		}
	}
</style>