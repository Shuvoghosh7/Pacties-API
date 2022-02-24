const loadFriend = () =>{
    fetch('https://randomuser.me/api/?results=10')
    .then(res => res.json())
    .then(data =>displayFriend(data) )
}
loadFriend ()

const displayFriend = data =>{
    const friends = data.results
    const friendContainer = document.getElementById("friend-container")
    for(const friend of friends){
       const div = document.createElement('div')
       div.className='friends'
       div.innerHTML=`
       <h1> ${friend.location.state}</h1>
       <h3> ${friend.location.city}</h3>
       <h5> ${friend.location.coordinates.latitude}</h5>
       <h5> ${friend.location.timezone.description}</h5>
       <img src="${friend.picture.medium}" >
       `
       friendContainer.appendChild(div)
        console.log(friend)
    }
    
    
    
}
