<template>
	<div class="grid-navigation">
		<div class="item" @click="toGoodsBox(0)"><img src="https://mate.ganglonggou.com/lib/images/appliances_navigation_item1.png" alt=""></div>
		<div class="item" @click="toGoodsBox(1)"><img src="https://mate.ganglonggou.com/lib/images/appliances_navigation_item2.png" alt=""></div>
		<div class="item" @click="toGoodsBox(2)"><img src="https://mate.ganglonggou.com/lib/images/appliances_navigation_item3.png" alt=""></div>
		<div class="item" @click="toGoodsBox(3)"><img src="https://mate.ganglonggou.com/lib/images/appliances_navigation_item4.png" alt=""></div>
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

                let live_appliances = document.querySelectorAll('#live-appliances')[0].offsetTop;
                let kitchen_appliances = document.querySelectorAll('#kitchen-appliances')[0].offsetTop;
                let nursing_appliances = document.querySelectorAll('#nursing-appliances')[0].offsetTop;
                let large_appliances = document.querySelectorAll('#large-appliances')[0].offsetTop;
                let goods_box_top = [];
                goods_box_top.push(live_appliances);
                goods_box_top.push(kitchen_appliances);
                goods_box_top.push(nursing_appliances);
                goods_box_top.push(large_appliances);

                window.scrollTo(0, goods_box_top[index] - 80);
			}
		},
    };
</script>
<style lang="scss" scoped>
	.grid-navigation{
		background-color: rgb(247,247,247);
		border-radius: 10px;
		padding:5px 0;
		display: flex;
		flex-wrap: wrap;
		.item{
			width: 50%;
		}
	}
</style>