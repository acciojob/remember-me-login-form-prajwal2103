document.addEventListener('DOMContentLoaded', () => {
	let submitBtn=document.getElementById('login-form');
	let userName=document.getElementById('username').value;
	let Password=document.getElementById('username').value;
	let Checked=document.getElementById('checkbox').checked;
	let stored=[];
	let ExistingData=localStorage.getItem('Data')
	function saveData(){
		localStorage.setItem('Data' JSON.stringify(stored))
	}
	function removeData(){
		localStorage.removeItem('Data');
	}
	submitBtn.addEventListener('submit',(event)=>{
		event.preventDefault();
		alert(`Logged in as ${userName}`);
		let obj={
			user:userName,

			password:Password
		};
		if(Checked){
			stored.push(obj);
			saveData();
		}
			
		else{
			removeData()
		}
		if(ExistingData){
			document.getElementById('existing').style.display = 'block'
		}
		
	})
		document.getElementById('existing').addEventListener('click',()=>{
    alert(`Logged in as ${userName}`);
  })
})