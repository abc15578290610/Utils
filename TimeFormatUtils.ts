  /**
	* 时间格式汇总
	* All Rights Reserved. 
	* this.checkEmail()
    */

module TimeFormatUtils {

	/* 
	输入：时间戳 
	返回：时间字符串20170619112825
	*/
	export function timeFormat1(time:Date):string
	{
		return String(time.getFullYear()) + this.addZero(time.getMonth()+1) + this.addZero(time.getDate()) 
        + this.addZero(time.getHours()) + this.addZero(time.getMinutes()) + this.addZero(time.getSeconds());   
	}

	/* 
	输入：时间戳 
	返回：时间字符串17:10:10
	*/
	export function timeFormat2(time:Date):string
	{
		return this.addZero(time.getHours()) +":"+ this.addZero(time.getMinutes()) +":"+ this.addZero(time.getSeconds());   
	}


	/* 
	输入：时间戳 
	返回：时间字符串2017-10-01
	*/
	export function timeFormat3(time:Date):string
	{
		return String(time.getFullYear()) +"-"+ this.addZero(time.getMonth()+1) +"-"+ this.addZero(time.getDate());   
	}

	/* 
	输入：时间戳 
	返回：时间字符串17:10
	*/
	export function timeFormat4(time:Date):string
	{
		return this.addZero(time.getHours()) +":"+ this.addZero(time.getMinutes());   
	}

	/* 
	输入：时间戳 
	返回：时间字符串20171001
	*/
	export function timeFormat5(time:Date):string
	{
		return String(time.getFullYear()) + this.addZero(time.getMonth()+1) + this.addZero(time.getDate());   
	}
	/* 
	输入：时间戳 
	返回：时间字符串20171001
	*/
	export function timeFormat6(time:Date):string
	{
		return String(time.getFullYear()) + this.addZero(time.getMonth()+1) + this.addZero(time.getDate() +this.addZero(time.getHours()) + this.addZero(time.getMinutes()));   
	}

	export function addZero(value:number):string 
	{
        var str = String(value);
        if(value < 10)
		{
			str = "0" + str;
		}
		
		return str;
	}
}
