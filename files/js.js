let input=document.querySelector('input')
let bt=document.querySelector('button')
let output=document.querySelector('.show')
let footer=document.querySelector('.footer p')




async function moviesearch(val){
    let search=await fetch(`https://www.omdbapi.com/?t=${val}/?&apikey=442be998`)
    let data=await search.json()
    console.log(data)
    
    
    let div=document.createElement('div')
    div.setAttribute('class','div1')
    div.innerHTML=`
    
    
            <img class="img" src="${data.Poster}" alt="Picture">

        
             <div class="div2">
            <h2 class="moviename">${data.Title}</h2>
            <p class="rating">Rating:${data.Ratings[0].Value}</p>
            <h2 class="genre">${data.Genre}</h2>
            
                <li class="release"><span>Released:</span>${data.Released}</li>
                <li class="duration"><span>Duration:</span>${data.Runtime}</li>
                <li class="plot"><span>Plot:</span>${data.Plot}</li>
                <li class="actors"><span>Actors:</span>${data.Actors}</li>
                <li class="director"><span>Director:</span>${data.Director}</li>
                </div>
    
    `

    output.appendChild(div)
   

    
    
  
    

  
  

}
bt.addEventListener('click',()=>{
    if(input.value===""){
        alert("Please Enter Movie Name")
    }else{
  
     
        moviesearch(input.value)

        output.style.background='black'
        
        input.value=" "
    }

    
   
})