import LazyLoad from "vanilla-lazyload";

// @ts-ignore
// if (document.documentMode) { 
//   window.alert('This is IE')
// }

const myLazyLoad = new LazyLoad();
// After your content has changed...
myLazyLoad.update();

const test = <HTMLImageElement>document.getElementById('test');

test.src = '../img/Screenshot.png'