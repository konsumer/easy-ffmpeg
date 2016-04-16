#!/bin/sh

# this collects the binaries for uploading to releases
# tested on OSX. may work on Linux
# requirements: curl, 7z

VERSION='2.8.2'

rm -rf ffmpeg
mkdir -p ffmpeg/linux/ia32 ffmpeg/darwin/x64 ffmpeg/win32/ia32

cd ffmpeg/linux
curl 'http://johnvansickle.com/ffmpeg/releases/ffmpeg-release-32bit-static.tar.xz' -o ffmpeg-32.tar.xz && 
tar xf ffmpeg-32.tar.xz && 
mv ffmpeg-*-32bit-static/ffmpeg ffmpeg-*-32bit-static/ffprobe ia32 &&
rm -rf ffmpeg-*-*-static *.tar.xz

cd ../darwin
curl "http://evermeet.cx/pub/ffmpeg/ffmpeg-$VERSION.7z" -o ffmpeg.7z && 
curl "http://evermeet.cx/pub/ffprobe/ffprobe-$VERSION.7z" -o ffprobe.7z &&
7z e ffmpeg.7z && 
7z e ffprobe.7z && 
mv ffmpeg ffprobe x64 &&
rm ffmpeg.7z ffprobe.7z

cd ../win32
curl "https://ffmpeg.zeranoe.com/builds/win32/static/ffmpeg-$VERSION-win32-static.7z" -o ffmpeg.7z &&
7z x ffmpeg.7z &&
mv ffmpeg-*-win32-static/bin/ffmpeg.exe ffmpeg-*-win32-static/bin/ffprobe.exe ia32 &&
rm -rf ffmpeg.7z ffmpeg-*-win32-static

cd ../..
tar czf ffmpeg/ffmpeg-linux.tgz ffmpeg/linux/
tar czf ffmpeg/ffmpeg-darwin.tgz ffmpeg/darwin/
tar czf ffmpeg/ffmpeg-win32.tgz ffmpeg/win32/
