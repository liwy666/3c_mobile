<template>
	<div class="search-box">
		<van-search
			v-model="value"
			placeholder="请输入搜索关键词"
			:background="'rgba(78,141,254,'+background_opacity+')'"
			shape="round"
			@search="onSearch"
		>
		</van-search>
	</div>
</template>
<script>
    export default {
        data() {
            return {
                value:''
			};
        },
		props:{
            window_top:Number
		},
        computed: {
            background_opacity:{
                get:function () {
					let result = 0;
                    result = this.window_top/300;
                    return result;
                }
			}
		},
        created() {

        },
        methods: {
            onSearch(){
                window.location.href = "https://m.mall.icbc.com.cn/mobile/search.jhtml?queryParam="+this.value+"&commonPage=&overSea=&categoryFilter=&fromPage=1";
			}
		},
    };
</script>
<style lang="scss" scoped>
	.search-box{
		position: fixed;
		z-index: 99;
		width: 100%;
	}
</style>