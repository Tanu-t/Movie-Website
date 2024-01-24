const arrows = document.querySelectorAll('.arrow');
const movieLists = document.querySelectorAll('.movie-list');


arrows.forEach((arrow,i)=>{
    const itemNumber =movieLists[i].querySelectorAll('img').length;
    let clickCounter =0;
    arrow.addEventListener("click",()=>{
        const ratio =Math.floor(window.innerWidth / 270);
        clickCounter++;
        if(itemNumber - (4+clickCounter) + (4-ratio)>=0) // (4-ratio) - means we have more chance to click image =,if we expand our screen means we have to decrease the image.
        {
            movieLists[i].style.transform = `translateX(${movieLists[i].computedStyleMap().get('transform')[0].x.value-300}px)`;
        }
        else{
            movieLists[i].style.transform = `translateX(0)`;
            clickCounter=0;
        }
       
    })

})

const ball = document.querySelector('.toggle-ball');
const item = document.querySelectorAll('.container,.movie-list-title,.navbar,.sidebar,.left-menu-icon,.toggle,.profile-text,.navbar-container');

ball.addEventListener("click",()=>{
  item.forEach(item=>{
      item.classList.toggle('active');
  })
  ball.classList.toggle("active");
})
