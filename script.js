document.addEventListener('DOMContentLoaded', () => {
	let submitBtn=document.getElementById('login-form');
	let userName=document.getElementById('username');
	let Password=document.getElementById('password');
	let Checked=document.getElementById('checkbox').checked;
	// let stored=[];
	// let ExistingData=localStorage.getItem('Data');
	let SaveUser=localStorage.getItem('user');
	let SavePassword=localStorage.getItem('password');
	if(SaveUser && SavePassword){
	 document.getElementById('existing').style.display = 'block';
	}
 //  if(ExistingData){
 //    document.getElementById('existing').style.display = 'block';
 //  }
	// function saveData(){
	// 	localStorage.setItem('Data', JSON.stringify(stored))
	// }
	// function removeData(){
	// 	localStorage.removeItem('Data');
	// }
  
	submitBtn.addEventListener('submit',(event)=>{
    let user=userName.value;
    let password=Password.value
    // console.log(user);
		event.preventDefault();
		alert(`Logged in as ${user}.`);
		if(Checked){
			localStorage.setItem('user',user);
			localStorage.setItem('password',password);
		}
			
		else{
			lolocalStorage.setItem('user');
			localStorage.setItem('password');
		}
		if(SaveUser && SavePassword){
	    document.getElementById('existing').style.display = 'block';
	  }
		
	})
	// let UserName=localStorage.getItem('Data')
	document.getElementById('existing').addEventListener('click',()=>{
		// const savedData = JSON.parse(localStorage.getItem('Data'));
     alert(`Logged in as ${SaveUser}.`)
		
  })
})