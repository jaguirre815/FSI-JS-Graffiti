
// Select some elements...

let header = document.querySelector('#page-header')
header.style.textAlign = 'left'

let dogImages = document.querySelectorAll('.dog-image')
for(let i = 0; i < dogImages.length; i++){
    dogImages[i].style.borderRadius = '50px'
}
for(let i = 0; i <dogImages.length; i++)
    dogImages[i].style.transform = "rotate(180deg)"

    let dogName = document.querySelectorAll('.dog-name')
    for(let i = 0; i < dogName.length; i++){
        dogName[i].style.color = 'teal'
    }

    let dogDescription = document.querySelectorAll('.dog-description')
    for(let i = 0; i < dogDescription.length; i++){
        dogDescription[i].style.color = 'green'
    }


