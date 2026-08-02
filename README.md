<div align="center">
    <img src="https://github.com/MehverSynRGB/BiliBili-DownloadDanmaku/raw/main/docs/icon/256.png" width="20%"/>
    <h1>BiliBili-弹幕下载 <code>v1.0</code></h1>
    <p>
        <a href='https://github.com/MehverSynRGB/BiliBili-DownloadDanmaku'><img src="https://img.shields.io/badge/-GitHub-3A3A3A?style=flat&amp;logo=GitHub&amp;logoColor=white" referrerpolicy="no-referrer" alt="GitHub"></a>
        <a href='https://greasyfork.org/zh-CN/scripts/-bilibili-downloaddanmaku'><img src="https://img.shields.io/badge/-GreasyFork-670000?style=flat&amp;logo=tampermonkey&amp;logoColor=white" referrerpolicy="no-referrer" alt="GreasyFork"></a>
    </p>
</div>

## 简介

在B站任意视频、番剧、电影、纪录片页面右下角，点击悬浮按钮即可下载全部弹幕并导出为ASS字幕文件。

- 支持 AV/BV 号视频
- 支持番剧、电影、纪录片（PGC 页面）
- 解码完整弹幕含特殊弹幕（BAS 字幕等）
- 导出标准 ASS 字幕格式，支持滚动/顶部/底部弹幕

## 使用

打开任意B站视频/番剧页面，页面右下角会出现一个蓝色圆形按钮，点击即可下载。

也可在浏览器控制台中调用：

```js
__bili_dm_dl__()
```
