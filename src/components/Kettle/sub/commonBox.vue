<template>
	<div class="kjhw-box-main">
		<goodsCard v-for="(item) in data" :key="item.id" :goods_info="item" :toControl="toSonControl"></goodsCard>
	</div>
</template>
<script>
    import goodsCard from './GoodsCardCommon';

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
		padding-top: 10px;
		padding-bottom: 10px;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
	}
</style>