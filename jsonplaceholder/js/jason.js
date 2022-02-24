const getComment = () =>{
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => showComment(data))
}
getComment()
const showComment = showData =>{
    // console.log(showData)
    const displayData = document.getElementById("display-data")
    showData.forEach(show => {
        const div = document.createElement('div')
        div.className='show-data'
        div.innerHTML=`
        <h1>Name:  ${show.name}</h1>
        <p>Email:  ${show.email}</p>
        <p> Body : ${show.body} </p>
        <button  >Click Now</button>
        `
        displayData.appendChild(div)
        console.log(show)
    });
}
