let alleAlbums = document.querySelectorAll('.card');
const naarBoven = (e) =>{
    event.target.classList.remove('naarBeneden');
    event.target.classList.add('naarBoven');
}
const naarBeneden = (e) =>{
    event.target.classList.remove('naarBoven');
    event.target.classList.add('naarBeneden');
}
for(let i=0; i<alleAlbums.length; i++){
    let album = alleAlbums[i];
    album.addEventListener('mouseenter', naarBoven);
    album.addEventListener('mouseleave', naarBeneden);


}