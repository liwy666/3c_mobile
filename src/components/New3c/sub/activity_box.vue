<template>
	<div class="activity-box">
		<div class="item" @click="toGoodsBox(0)">
			<img src="https://mate.ganglonggou.com/lib/images/new_3c_activity1.png">
		</div>
		<div class="item" @click="toGoodsBox(1)">
			<img src="https://mate.ganglonggou.com/lib/images/new_3c_activity2.png">
		</div>
		<div class="item" @click="toGoodsBox(2)">
			<img src="https://mate.ganglonggou.com/lib/images/new_3c_activity3.png">
		</div>
		<div class="item" @click="toGoodsBox(3)">
			<img src="https://mate.ganglonggou.com/lib/images/new_3c_activity4.png">
		</div>
	</div>
</template>
<script>
    export default {
        data() {
            return {};
        },
        computed: {},
        created() {

        },
        methods: {
            toGoodsBox(index){

                let number_24_goods_list = document.querySelectorAll('#number_24_goods_list')[0].offsetTop;
                let number_12_goods_list = document.querySelectorAll('#number_12_goods_list')[0].offsetTop;
                let number_6_goods_list = document.querySelectorAll('#number_6_goods_list')[0].offsetTop;
                let parts_list = document.querySelectorAll('#parts_list')[0].offsetTop;
                let goods_box_top = [];
                goods_box_top.push(number_24_goods_list);
                goods_box_top.push(number_12_goods_list);
                goods_box_top.push(number_6_goods_list);
                goods_box_top.push(parts_list);

                window.scrollTo(0, goods_box_top[index] - 80);
            }
		},
    };
</script>
<style lang="scss" scoped>
	.activity-box{
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		padding: 10px;
		padding-bottom: 5px;
		.item{
			width: 48%;
			margin-bottom: 5px;
		}
	}
</style>