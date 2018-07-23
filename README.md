# Utils
工具包装类

Tween动画测试比较：
情形一：操作参数一致，时间一致
egret.Tween.get(this.m_time1).to({y:0},5000).call(function(){
			console.log("完成")
})
egret.Tween.get(this.m_time1).to({y:800},5000).call(function(){
      console.log("完成2")
});
结果:时间一致，取最先出现的操作值，（如上，即y:0）
完成
完成2


情形二：操作参数一致，时间不一致
egret.Tween.get(this.m_time1).to({y:0},5000).call(function(){
			console.log("完成")
})
egret.Tween.get(this.m_time1).to({y:800},10000).call(function(){
      console.log("完成2")
});
结果:操作参数一致，时间不一致，按照时间先后异步执行
完成
完成2

情形三：操作参数不一致，时间一致
egret.Tween.get(this.m_time1).to({y:0},5000).call(function(){
			console.log("完成")
})
egret.Tween.get(this.m_time1).to({y:800，x:500},5000).call(function(){
      console.log("完成2")
});
结果:操作参数不一致，时间一致，取最先出现的操作值，（如上，即y:0且x:500）
完成
完成2


情形四：操作参数不一致，时间不一致
egret.Tween.get(this.m_time1).to({y:0},5000).call(function(){
			console.log("完成")
})
egret.Tween.get(this.m_time1).to({y:800，x:500},1000).call(function(){
      console.log("完成2")
});
结果:操作参数不一致，时间一致，取最先出现的操作值，（如上，即y:0且x:500）
完成2
完成
