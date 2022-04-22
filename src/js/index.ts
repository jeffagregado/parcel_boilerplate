import LazyLoad from 'vanilla-lazyload'
import axios from 'axios'

// @ts-ignore
// if (document.documentMode) {
//   window.alert('This is IE')
// }

const myLazyLoad = new LazyLoad()
// After your content has changed...

const urlImg = 'https://jsonplaceholder.typicode.com/photos?_start=0&_limit=100'

const images = async () => {
  axios
    .get(urlImg)
    .then((res) => {
      imageContent(res.data)
    })
    .catch((err) => console.error(err))
}

const imageContent = (datas) => {
  const img = <HTMLDivElement>document.getElementById('images')
  const blockImg = datas.map(data => {
    return `
      <img class="lazy" src="${data.url}" alt="${data.title}" loading="lazy">
    `
  }).join('')
  img.insertAdjacentHTML('beforeend', blockImg)
  console.log(blockImg)
}

images()

myLazyLoad.update()

// test.src = '../img/Screenshot.png'
