Windwork H5Preview
=========================
在电脑中预览手机界面。

使用方法:
---------------
在head中加入显示样式：
```
    <link rel="stylesheet" type="text/css" href="theme/style.css">
```

在body中加入如下代码：
```
    <div class="pre-xx"></div>
    
    <!--引入jquery和wf-h5preview代码-->
	<script src="http://ajax.aspnetcdn.com/ajax/jQuery/jquery-1.12.4.min.js"></script>
	<script src="js/wf-h5preview.js"></script>
    
    <script>
    $(function(){
		// 向.pre-xx嵌入预览窗口
		$('.pre-xx').wfH5Preview({
			title: '我是说美丽的蘑菇街', // 预览窗口显示的标题
			url: 'http://m.meilishuo.com/' // 预览的链接
		});
	})
    </script>
	
```

预览效果截图
--------
![效果预览](res/preview.jpg)