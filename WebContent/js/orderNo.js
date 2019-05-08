$(function() {
	var x = 99;//x上限，y下限 
	var y = 10;
	var rand = parseInt(Math.random() * (x - y + 1) + y);
	var myDate = new Date;
	var year = myDate.getFullYear(); //获取当前年
	var yue = myDate.getMonth() + 1; //获取当前月
	var date = myDate.getDate(); //获取当前日
	var h = myDate.getHours(); //获取当前小时数(0-23)
	var m = myDate.getMinutes(); //获取当前分钟数(0-59)
	var s = myDate.getSeconds(); //获取当前秒
	var num = "" + year + yue + date + h + m + s +rand;
	console.log("秒： "+s+"  no:  "+num);
	$("#WIDout_trade_no").attr("value",num);
})