$(function(){
	let weather;
	$.ajax({
		url:"https://www.toutiao.com/stream/widget/local_weather/data/?city=太原",
		dataType:"jsonp",
		success:function(obj){
			weather=obj.data.weather;
			console.log(weather);
			render()
		}
	})
	function render(){
		// 渲染城市
		$(".tou").html(weather.city_name);
		//渲染指数
		$(".wuran p").html(weather.aqi);
	    //渲染污染
		$(".wuran span").html(weather.quality_level);
	    //	渲染度数
        $(".du span").html("&nbsp"+weather.current_temperature);
	    //tianqi
		$(".tianqi").html(weather.current_condition);
	//    	风向
		$(".feng").html(weather.wind_direction);
	//	级别
		$(".ji").html(weather.wind_level+"级");
	//	渲染今天
		$(".jt p").html(weather.day_condition);
		$(".jt span").html(weather.dat_high_temperature+"/"+weather.dat_low_temperature+"°")
		$(".jt img").attr("src",`img/${weather.dat_weather_icon_id}.png`);
		//	渲染明天
        $(".mt p").html(weather.tomorrow_condition);
        $(".mt span").html(weather.tomorrow_high_temperature+"/"+weather.tomorrow_low_temperature+"°")
        $(".mt img").attr({"src":`img/${weather.tomorrow_weather_icon_id}.png`});
     //   渲染滚动
		weather.hourly_forecast.forEach((element,index)=>{
        let str=`<li>
        				<span>${element.hour}:00</span>
        				<img src="img/${element.weather_icon_id}.png" alt="">
            			<p>${element.temperature}°</p>
					</li>`
			$(".gundong ul").append(str);
    })
//		渲染滚动2
		weather.forecast_list.forEach((element,index)=>{
			let month=element.date.slice(5,7);
			let dd=element.date.substr(8,2);
			let str=`<li>
				<p class="gd2sj">${month}/${dd}</p>
				<p class="gd2tq">${element.condition}</p>
				<img src="img/${element.weather_icon_id}.png" alt="" class="gd2img1">
				<div class="dstop">${element.high_temperature}°</div>
				<div class="dsdnow">${element.low_temperature}°</div>
				<img src="img/${element.weather_icon_id}.png" alt="" class="gd2img2">
				<p class="gd2tq2">${element.condition}</p>
				<div class="gd2f">${element.wind_direction}</div>
				<div class="gd2fj">${element.wind_level}级</div>
			</li>`
        	console.log(dd);
			$(".gundong2 ul").append(str);
		})
}
})