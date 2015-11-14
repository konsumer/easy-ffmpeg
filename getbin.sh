#!/bin/sh

VERSION='2.8.2'

rm -rf ffmpeg
mkdir -p ffmpeg/linux/ia32 ffmpeg/linux/x64 ffmpeg/darwin/x64 ffmpeg/win32/ia32 ffmpeg/win32/x64

cd ffmpeg/linux
curl 'http://johnvansickle.com/ffmpeg/releases/ffmpeg-release-32bit-static.tar.xz' -o ffmpeg-32.tar.xz && 
tar xf ffmpeg-32.tar.xz && 
mv ffmpeg-*-32bit-static/ffmpeg ia32
curl 'http://johnvansickle.com/ffmpeg/releases/ffmpeg-release-64bit-static.tar.xz' -o ffmpeg-64.tar.xz && 
tar xf ffmpeg-64.tar.xz && 
mv ffmpeg-*-64bit-static/ffmpeg x64
rm -rf ffmpeg-*-*-static *.tar.xz

cd ../darwin
curl "http://evermeet.cx/pub/ffmpeg/ffmpeg-$VERSION.7z" -o ffmpeg.7z && 
7z e ffmpeg.7z && 
mv ffmpeg x64
rm ffmpeg.7z

cd ../win32
curl "http://ffmpeg.zeranoe.com/builds/win32/static/ffmpeg-$VERSION-win32-static.7z" -o ffmpeg.7z &&
7z x ffmpeg.7z
cp ffmpeg-*-win32-static/bin/ffmpeg.exe ia32
cp ffmpeg-*-win32-static/bin/ffmpeg.exe x64
rm -rf ffmpeg.7z ffmpeg-*-win32-static
