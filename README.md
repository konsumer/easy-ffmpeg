This has exactly the same interface as [node-fluent-ffmpeg](https://github.com/fluent-ffmpeg/node-fluent-ffmpeg). It's a thin wrapper that includes binaries for mac, windows, and linux.

You can install it with `npm install easy-ffmpeg`

Here is where I get my static binaries:

```json
{
  "linux": {
    "ia32": "http://johnvansickle.com/ffmpeg/releases/ffmpeg-release-32bit-static.tar.xz"
  },

  "darwin": {
    "x64": "http://evermeet.cx/pub/ffmpeg/ffmpeg-VERSION.7z"
  },

  "win32": {
    "ia32": "http://ffmpeg.zeranoe.com/builds/win32/static/ffmpeg-VERSION-win32-static.7z"
  }
}
```

If you want to download your own up-to-date versions, use `npm run bin`. You will need curl/7zip/tar binaries in your path, and you will need to be on linux or mac.