async function getUs(){
    try{

        let us = await fetch('https://reqres.in/api/users/2');
        let data = await us.json();
        console.log(data);
        displayData(data)
    }
    catch(err){
        console.log('ab pir se rakh gya saalaa');
    }
}
getUs()


function displayData(data){
    let name = document.createElement('h3');
    name.textContent= `Name : ${data.data.first_name} ${data.data.last_name}`
    let email= document.createElement('h4');
    email.textContent = `email : ${data.data.email}`
    let avatar = document.createElement('img');
    avatar.src = data.data.avatar;
    let div=document.createElement('div');
    div.append(name,email,avatar);
    document.querySelector('#cont').append(div)

}