const response = await fetch('/api/photo')
if (!response.ok) throw new Error('Could not load a photo')

const photo = await response.json()
const imageUrl = new URL(photo.url)
imageUrl.searchParams.set('w', '150')
imageUrl.searchParams.set('h', '150')
imageUrl.searchParams.set('fit', 'crop')

document.querySelector('.fill').style.backgroundImage = `url("${imageUrl.href}")`

const fill = document.querySelector('.fill')
const empties = document.querySelectorAll('.empty')

fill.addEventListener('dragstart', dragStart)
fill.addEventListener('dragend', dragEnd)

for(const empty of empties) {
    empty.addEventListener('dragover', dragOver)
    empty.addEventListener('dragenter', dragEnter)
    empty.addEventListener('dragleave', dragLeave)
    empty.addEventListener('drop', dragDrop)
}

function dragStart() {
    this.className += ' hold'
    setTimeout(() => this.className = 'invisible', 0)
}

function dragEnd() {
    this.className = 'fill'
}

function dragOver(e) {
    e.preventDefault()
}

function dragEnter(e) {
    e.preventDefault()
    this.className += ' hovered'
}

function dragLeave() {
    this.className = 'empty'
}

function dragDrop() {
    this.className = 'empty'
    this.append(fill)
}
