#! /bin/bash

npm run build
rm -rf ./platforms/android
cordova platforms add android
cordova build android
adb install ./platforms/android/app/build/outputs/apk/debug/app-debug.apk
