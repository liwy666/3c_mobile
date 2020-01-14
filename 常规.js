//swiper点击回调

computed: {
    swiper(){
        return this.$refs.mySwiper.swiper;
    }
},
mounted()
{
    let _this = this;
    this.swiper.on('tap', function () {
        _this.toSonControl(_this.data[this.realIndex]);
    })
},