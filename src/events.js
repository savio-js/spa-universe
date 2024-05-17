const links = document.querySelectorAll('nav a')
let linkHome = document.querySelector('.linkHome')
let linkUniverse = document.querySelector('.linkUniverse')
let linkExploration = document.querySelector('.linkExploration')


links.forEach(links => {
  links.addEventListener('click', () => {

    console.log(linkHome)
    const body = document.querySelector('body')

    if (links.classList == 'linkHome') {
      body.classList.add('home')
      body.classList.remove('universe')
      body.classList.remove('exploration')
    }
    if (links.classList == 'linkUniverse') {
      body.classList.add('universe')
      body.classList.remove('home')
      body.classList.remove('exploration')

      linkUniverse.classList.add('active')
    }
    if (links.classList == 'linkExploration') {
      body.classList.add('exploration')
      body.classList.remove('home')
      body.classList.remove('universe')

      linkExploration.classList.add('active')
    }

    if (body.classList == 'home') {
      linkHome.classList.add('active')
      linkUniverse.classList.remove('active')
      linkExploration.classList.remove('active')

    }

    if (body.classList == 'universe') {
      linkUniverse.classList.add('active')
      linkHome.classList.remove('active')
      linkExploration.classList.remove('active')
    }

    if (body.classList == 'exploration') {
      linkExploration.classList.add('active')
      linkHome.classList.remove('active')
      linkUniverse.classList.remove('active')
    }
  })

})



