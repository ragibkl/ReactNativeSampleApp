# ReactNativeSampleApp
Sample boilerplate mobile app using [React Native](https://facebook.github.io/react-native/) framework.

## Introduction
This is a sample mobile application based on the React Native framework by Facebook. This app is designed to be an easy starting base to develop any app using React Native. This app combines some react-native and node plugins that I find to be very useful when starting a new React Native app. 

I have structured the code in a format that I feel is easy to work with. This repo also shows a simple way to implement a single point of JS entry file (setup.js) on the app for both iOS and Android platform.

I am only sharing here what I find useful and easy. Feel free to use this as a guide or base for starting any projects, or to integrate any patterns/snippets that you find useful in your own projects.

## Plugins
List of plugins installed.

- [react-native-router-flux](https://github.com/aksonov/react-native-router-flux): for simpler screen navigation
- [redux, react-redux](http://redux.js.org/): redux global state management for managing data
- [redux-thunk](http://redux.js.org/docs/advanced/AsyncActions.html); to handle async actions in redux
- [redux-persist](https://github.com/rt2zz/redux-persist): to persist redux store across app reboots
- [string-format](https://www.npmjs.com/package/string-format): Python-like string formatting

## Getting Started

1. Follow the React Native [getting started](https://facebook.github.io/react-native/docs/getting-started.html) guide. Make sure that your dev environment is set up, and that you are able to start/run a sample React Native app. Make sure that you at least complete the [tutorial](https://facebook.github.io/react-native/docs/tutorial.html) as well
2. Once you are set up, clone
```bash
git clone https://github.com/ragibkl/ReactNativeSampleApp.git
```
   or download this repo
```bash
wget https://github.com/ragibkl/ReactNativeSampleApp/archive/master.zip -O ReactNativeSampleApp.zip
unzip ReactNativeSampleApp.zip
mv ReactNativeSampleApp-master ReactNativeSampleApp
```
3. cd into the project and install the required modules
```bash
cd ReactNativeSampleApp
npm install
```
4. start the app:

   on iOS: `react-native run-ios`

   on Android: `react-native run-android`
5. Familiarize yourself with the code structure. Of importance are how the app's root component is initialized, and how navigation routes are defined and used.
6. Read some docs on [react-native-router-flux](https://github.com/aksonov/react-native-router-flux) and [redux, react-redux](http://redux.js.org/) to learn how they work and how to use them.
7. Start integrating this codebase into your own projects.
8. ???
9. Profit!!

## Starting a new React Native project using this codebase

1. Create a new React Native project. By default, you will use the latest React Native version when starting anew. This codebase uses version 0.44.0, so you if the latest version doesn't work, try creating from the same version.
```bash
react-native init [ProjectName] --version 0.44.0
```
2. Install additional dependencies
```bash
npm install --save react-native-router-flux redux react-redux redux-thunk redux-persist string-format
```
3. Copy the js/ folder from this codebase to your project. Edit your index.ios.js and index.android.js to match what is included in this project. Make sure you maintain your own [ProjectName] in AppRegistry line
```javascript
// index.ios.js, index.android.js

// ...

AppRegistry.registerComponent('[ProjectName]', () => [ProjectName])
```
4. Add the following to AndroidManifest.xml to enable [NetInfo](https://facebook.github.io/react-native/docs/netinfo.html) api for Android
```xml
<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
```
5. Continue editing the project as you see fit.

## Integrating into an existing project
There is not much guidance I can provide here. You should treat this codebase as a guide. You may copy anything from this codebase that you find useful into your own project.

Happy Coding!
