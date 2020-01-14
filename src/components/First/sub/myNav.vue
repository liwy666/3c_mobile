<template>
	<div class="my-nav-main">
		<div class="nav-card" v-for="item in data" :key="item.id">
			<img :src="item.ad_img" :alt="item.ad_img" @click="toSonControl(item)">
			<p>{{item.text}}</p>
		</div>
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
        methods: {
            toSonControl(ad_info) {
                this.toControl(ad_info)
            }
		},
    };
</script>
<style lang="scss" scoped>
	.my-nav-main {
		width: 100%;
		height: 150px;
		display: flex;
		flex-wrap: wrap;
		overflow: hidden;
		justify-content: space-around;
		background-color: white;
		.nav-card{
			width: 15%;
			margin-left: 5%;
			margin-right: 5%;
			text-align: center;
			img{
				width: 70%;
				margin-top: 5px;
			}
		}
	}
</style>