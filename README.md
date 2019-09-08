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

LowPloy
---

Requirements

 - pango



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

合并图像
---

Requirements

 - ImageMagick

Merge Image

```
convert skilltree-1.png skilltree-2.png skilltree-3.png +append skilltree.png
```

Resize Image

```
mogrify -geometry x600 *.png
```

Video
---

mov to mp4

```
ffmpeg -i tree-expand.mov tree-expand.mp4
```

fast video

```
ffmpeg -i out.mp4 -filter:v "setpts=PTS/60" fast.mp4
```

4k to 1080

```
ffmpeg -i 7.mp4 -vf scale=1920:1080 -c:v libx264 -crf 35 7-1080.mp4
```

LICENSE
---

MIT
