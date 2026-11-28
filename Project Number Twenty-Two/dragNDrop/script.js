const response = await fetch('/api/photo')
if (!response.ok) throw new Error('Could not load a photo')

const photo = await response.json()
const imageUrl = new URL(photo.url)
imageUrl.searchParams.set('w', '150')
imageUrl.searchParams.set('h', '150')
imageUrl.searchParams.set('fit', 'crop')

document.querySelector('.fill').style.backgroundImage = `url("${imageUrl.href}")`