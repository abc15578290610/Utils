module game{
	export class TimeCountDown {
		private totalCount:number = 0;
		private _callBack:Function;
		private _thisObj:any;
		public constructor(timeTxt:eui.Label) {
			timeTxt.visible = false;
			this.timeTxt = timeTxt;
			this.timeDownFunc();
		}

		public timeTxt:eui.Label;
		protected onUIFinish(){
			
        }

		private getDic():number{
			return 360/this.totalCount;
		}

		private _startTime:number = 0;
		public setTimerData(count:number,callBack:Function = null,thisObj:any = null):void{
			this.timeTxt.visible = true;
			this.totalCount = count;
			this._callBack = callBack;
			this._thisObj = thisObj;
			this.timeTxt.text = this.totalCount+"";

			if( !this.timer ){
				this.timeDownFunc();
			}
            this._startTime = new Date().getTime();
			this.timer.start();
		}

		private timer: egret.Timer
		private timeDownFunc():void{
			this.timer = new egret.Timer(1000);
        	this.timer.addEventListener(egret.TimerEvent.TIMER, this.timerFunc, this);
		}

		private timerFunc(event:egret.TimerEvent){
            let nowTime:number = new Date().getTime();
			let delay:number = Math.round(	(nowTime - this._startTime)/1000 );
            let count:number = this.totalCount - delay;

			if( count == 0 ){
				this.timer.stop();
				//this.timeTxt.visible = false;
			}else{
				if( count > 0 ){
					this.timeTxt.text = count+"";
				}
			}
    	}
        
		public stop():void{
			if( this.timer )
				this.timer.stop();
				this.timeTxt.visible = false;
		}

		public dispose():void{
			if( this.timer ){
				this.timer.stop();
				this.timer.removeEventListener(egret.TimerEvent.TIMER, this.timerFunc, this);
				this.timer = null;
			}
		}
	}
}
