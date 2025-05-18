document.addEventListener('DOMContentLoaded', () => {

    const artistData = [
    { name: 'Eula', Image: './img/artworks-qGTjVquN8geV6bka-K3mUGQ-t500x500.jpg'},
    { name: 'Emilie', Image: './img/artworks-uW7VLQOMBDB4UZZC-l0GIrQ-t500x500.jpg' },
    { name: 'Mualani', Image: './img/Genshin-Impact-Mualani-podkladka-pod-kubek-prezent-dla-fana.jpg'},
    { name: 'Raiden', Image: './img/artworks-Uhee91UCPp7ic4Sw-oAlLlg-t500x500.jpg'},
    ];

    const albumsData = [
    { name: 'Espuma do mar', Image: './img/5e317aaa8667df0bd74f2b3a6acfa53c.jpg'},
    { name: 'Eternidade', Image: './img/e9d268aed2784d8e94dead53d18d7312H3000W3000_320_320.jpg'}
    ];

    const artistGrid = document.querySelector('.artists-grid')
    const albumsGrid = document.querySelector('.albums-grid')

    artistData.forEach( artist => {
        const artistCard = document.createElement('div')
        artistCard.classList.add('artist-card')

        artistCard.innerHTML = `
            <img src="${artist.Image}">
            <h3>${artist.name}</h3>
            <p>artist</p>   
        `

        artistGrid.appendChild(artistCard)
    })
    
    albumsData.forEach( album => {
        const albumCard = document.createElement('div')
        albumCard.classList.add('album-card')

        albumCard.innerHTML = `
            <img src="${album.Image}">
            <h3>${album.name}</h3>
            <p>artist</p>   
        `

        albumsGrid.appendChild(albumCard)
    })
})