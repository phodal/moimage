# moImage

> a image pre-processor for artist

TODO
---

 - 图片 -> 矢量？
 - 对图片中的特殊化文字处理？
 - LowPoly
 - 卡通化？

Related Resouces:

 - Tesseract
 - Potrace
 - pypotrace

图片转矢量
---

Requirements

 - ImageMagick
 - potrace

1. 转化为 BMP

```
mogrify -format bmp test.jpg
```

2. 转化为 eps

```
potrace test.bmp
```

LICENSE
---

MIT
