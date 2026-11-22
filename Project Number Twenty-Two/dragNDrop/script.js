console.log('Drag -N- Dropping.....!!!')

const accessKey = process.env.ACCESS_KEYS

const response = await fetch(
    `https://api.unsplash.com/photos/random?client_id=${accessKey}`
)

const photo = await response.json()

const imageUrl = new URL(photo.urls.raw)
imageUrl.searchParams.set('w', '150')
imageUrl.searchParams.set('h', '150')
imageUrl.searchParams.set('fit', 'crop')

document.querySelector('.fill').src = imageUrl.href