const joke = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');
// console.log(joke,jokeBtn);

// PROMISES

// CONST url = https://icanhazdadjoke.com/ 

// console.log(randoms);
const newjokes = ()=>{
    const  randjock_icon = ["😀", "😃" ,"😄" ,"😁" ,"😆" ,"😅", "🤣", "😂", "🙂", "🙃" ,"😉", "😊" ,"😇", "🥰" ,"😍", "🤩", "😘", "😗" ,"😚", "😙" ,"😋","😛", "😜" ,"🤪", "😝", "🤑", "🤗", "🤭", "🤫", "🤔", "🤐", "🤨", "😐", "😑", "😶", "😏", "😒", "🙄", "😬", "🤥", "😌", "😔", "😪", "🤤", "😴", "😷", "🤒", "🤕", "🤢", "🤮", "🤧", "🥵", "🥶", "🥴", "😵", "🤯", "🤠", "🥳", "😎", "🤓", "🧐", "😕", "😟", "🙁", "😮", "😯", "😲", "😳", "🥺", "😦", "😧", "😨", "😰", "😥", "😢", "😭", "😱", "😖", "😣", "😞", "😓", "😩", "😫", "😤", "😡", "😠", "🤬", "😈"]
let randoms = randjock_icon[Math.floor(Math.random() * randjock_icon.length)];
    const setHeader = {
        headers:{
            Accept:"application/json"
        }
    }
    fetch('https://icanhazdadjoke.com',setHeader)
    .then((res)=> res.json())
    .then((data)=>{
        joke.innerHTML = ` ${randoms}"${data.joke}"${randoms}`;
    }).catch((err)=> {
        console.log(err); 
    })

}
jokeBtn.addEventListener("click",newjokes)
newjokes()