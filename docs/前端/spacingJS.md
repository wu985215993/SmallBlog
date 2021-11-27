# Spacing.js-快速查看网页元素间距

## [有了它，把网页做到跟设计图一样](https://www.bilibili.com/video/BV1rR4y1E7xg?spm_id_from=333.851.b_7265636f6d6d656e64.1)

![img](https://github.com/stevenlei/spacingjs/raw/main/screenshot.png)

### 如何使用

1. 在 HTML 页面中通过 `<script>` 标签加载 Spacing.js：

- UNPKG CDN:

```html
<script src="//unpkg.com/spacingjs" defer></script>
```

- jsDelivr CDN:

```html
<script src="//cdn.jsdelivr.net/npm/spacingjs" defer></script>
```

1. 将鼠标移动到一个元素上，然后按下 Alt 键（Windows）或 ⌥ Option 键（Mac）。
2. 将鼠标移动到其他元素上，就会显示相关的测量结果。

### 简单测试网页使用

在console中输入

```javascript
fetch("https://unpkg.com/spacingjs")
.then(res => res.text())
.then(text => eval(text));
```

### GITHUB仓库地址

https://github.com/stevenlei/spacingjs

