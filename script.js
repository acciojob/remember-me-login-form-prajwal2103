//your JS code here. If required.
function saveData(){
  localStorage.setItem('Stored',JSON.stringify(Stored));
}

let Stored=[];

let btn=document.getElementById('form');
btn.addEventListener('submit',()=>{
	alert(`Logged in as ${username}`);
 let user=document.getElementById('username').value;
  let password=document.getElementById('password').value;
  let checked=document.getElementById('checkbox').checked;
  let obj={
    username:user,
    Password:password
  }
  if(checked){
   Stored.push(obj)
   saveData();
  }
})