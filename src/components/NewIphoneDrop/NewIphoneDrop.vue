<template>
	<div class="new-iphone-main" v-if="get_info">
		<div class="new-iphone" v-for="item in index_ad_list.all" :key="item.id">
			<img :src="item.ad_img" @click="toControl(item)">
		</div>
	</div>
</template>
<script>
    export default {
        data() {
            return {
                get_info: null,
                window_top: 0,
            };
        },
        computed: {
            index_ad_list: {
                get: function () {
                    let result = {
                        all: [],
                    };
                    if (this.get_info) {
                        this.get_info.ad_list.forEach(item => {
                            switch (item.position_type) {
                                case '一通到底':
                                    result.all.push(item);
                                    break;
                            }
                        });
                    }
                    return result;
                },
            },
        },
        created() {
            this.getIndexAd();
        },
        mounted() {
            window.addEventListener('scroll', () => {
                this.window_top = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset;
            });

        },
        methods: {
            getIndexAd() {
                this.$fetch("get_index_info", {into_type: 'new_iphone_drop'}).then((msg) => {
                    if (msg) {
                        this.get_info = msg;
                    }

                })
            },
            toControl(ad_info) {
                if (ad_info.ad_type === '外链接') {
                    this.$post('ad_item_count', {id: ad_info.id});
                    window.location.href = ad_info.url;
                }
            },
            goBackTop() {
                window.scrollTo(0, 0);
            },
            getRandomArray(_array) {
                if (_array.length > 0) {
                    /*打乱数组*/
                    _array.sort(
                        function () {
                            return Math.random() > 0.5 ? -1 : 1;
                        }
                    );
                }
                return _array;
            }
        },
    };
</script>
<style lang="scss" scoped>
	.new-iphone-main {
		background-color: black;
		margin-top: -1px;
		.title {
			margin-top: 0.96618357rem;
			margin-bottom: 0.6rem;

			.title-large {
				text-align: center;
				font-size: 0.6rem;
				color: white;
				font-weight: bolder;
				margin-bottom: 0.20531401rem;
			}

			.title-small {
				color: #5ba1e7;
				text-align: center;
				font-size: 0.4rem;
				font-weight: 100;
			}
		}
		img {
			display: block;
		}

		.old-iphone {
			width: 96%;
			margin: 0 auto;
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;

			img {
				width: 4.642rem;
				height: 6.226rem;
				margin-bottom: 0.38647343rem;
				border-radius: 0.24154589rem;
				overflow: hidden;
			}
		}

		.item {
			width: 96%;
			margin: 0 auto;
			display: block;
		}
	}
</style>