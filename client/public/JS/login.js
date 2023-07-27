

 async function login() {
       

        var userrrr = $('user').val();
       // var pass 
let retval = confirm("Are you sure you want to proceed ?");

if(retval){
    
        const response = await fetch("http://127.0.0.1:3000/home");
        const resp = await response.json();
        console.log(resp);
        
      
    
}
}