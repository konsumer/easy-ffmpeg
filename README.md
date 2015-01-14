This has exactly the same interface as [node-fluent-ffmpeg](https://github.com/fluent-ffmpeg/node-fluent-ffmpeg). It's a thin wrapper that includes binaries for mac, windows, and linux on 32 & 64 bit.

Here is where I get my static binaries:

```json
{
  "linux": {
    "ia32": "http://johnvansickle.com/ffmpeg/releases/ffmpeg-2.5.3-32bit-static.tar.xz",
    "x64": "http://johnvansickle.com/ffmpeg/releases/ffmpeg-2.5.3-64bit-static.tar.xz"
  },
  
  "darwin": {
    "ia32": "http://ffmpegmac.net/resources/Leopard_01.01.2015.zip",
    "x64": "http://ffmpegmac.net/resources/SnowLeopard_Lion_Mountain_Lion_Mavericks_Yosemite_01.01.2015.zip"
  },
  
  "win32": {
    "ia32": "http://ffmpeg.zeranoe.com/builds/win32/static/ffmpeg-20150113-git-b23a866-win32-static.7z",
    "x64": "http://ffmpeg.zeranoe.com/builds/win64/static/ffmpeg-20150113-git-b23a866-win64-static.7z"
  }
}
```
