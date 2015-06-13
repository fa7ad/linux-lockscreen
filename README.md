# linux-lockscreen [![BuildStatus](https://travis-ci.org/fa7ad/linux-lockscreen.svg?branch=master)](https://travis-ci.org/fa7ad/linux-lockscreen)

> Get or set lockscreen/screensaver wallpaper on Linux. 
> Forked from @sindresorhus's *linux-wallpaper* package

Supports GNOME 3 (and maybe Unity).


## Install

```bash
$ npm install --save linux-lockscreen
```


## Usage

```js
var linuxLockscreen = require('linux-lockscreen');

linuxLockscreen.set('unicorn.jpg', function (err) {
	console.log('done');
});

linuxLockscreen.get(function (err, imagePath) {
	console.log(imagePath);
	//=> '/home/sindresorhus/unicorn.jpg'
});
```


## API

### .get(callback)

#### callback(error, imagePath)

*Required*  
Type: `function`

##### imagePath

Type: `string`

Path to the current desktop wallpaper image.

### .set(imagePath, [callback])

##### imagePath

*Required*  
Type: `string`

Path to the image to set as the desktop wallpaper.


## CLI

> Hopefully @sindresorhus will add support for this on his [`wallpaper`](https://github.com/sindresorhus/wallpaper#cli) package.


## License

MIT © [Fahad Hossain](http://thewebaholic.ml)
