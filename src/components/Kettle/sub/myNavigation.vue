<template>
	<div class="navigation-main">
		<ul class="navigation-box">
			<li class="navigation-item" v-for="(item,i) in data" :key="item.id" @click="toSonControl(i)">
				<img :src="item.ad_img">
				<p>{{item.goods_name}}</p>
			</li>
		</ul>
	</div>
</template>
<script>
    export default {
        data() {
            return {};
        },
        props: {
            data: Array,
            toControl: Function,
        },
        computed: {},
        created() {

        },
        mounted() {

        },
        methods: {
            toSonControl(ad_info) {
                this.toControl(ad_info)
            }
        },
    };
</script>
<style lang="scss" scoped>
	.navigation-main {
		width: 100%;
		margin-bottom: 5px;

		.navigation-box {
			width: 95%;
			margin: 0 auto;
			background-color: white;
			border-radius: 10px;
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			padding-top: 10px;
			padding-bottom: 10px;

			.navigation-item {
				width: 30%;
				list-style: none;
				text-align: center;
				margin-top: 5px;
				margin-bottom: 5px;

				img {
					width: 35%;
				}

				p {
					margin-top: 5px;
					color: rgb(100, 100, 100);
					font-weight: bolder;
					font-size: 12px;
				}
			}
		}
	}
</style>