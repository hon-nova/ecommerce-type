interface Person {
   username:string;
   email:string;
   password:string;
}
class Student implements Person {
   username:string;
   email:string;
   password:string;
   constructor(username:string,email:string,password:string){
       this.username=username,
       this.email=email,
       this.password=password
   }
   greetingNewStudent(): string{
       return `Hello ${this.username} with email::${this.email}`
   }
}

document.addEventListener('DOMContentLoaded', () => {
   const form = document.getElementById('registrationForm') as HTMLFormElement;
 
   form.addEventListener('submit', async (event) => {
     event.preventDefault();
 
     const username = (document.getElementById('username') as HTMLInputElement).value;
     const email = (document.getElementById('email') as HTMLInputElement).value;
     const password = (document.getElementById('password') as HTMLInputElement).value;
 
     const data = {
       username,
       email,
       password,
     };
 
     try {
       const response = await fetch('http://localhost:3333/register', {
         method: 'POST',
         headers: {
           'Content-Type': 'application/json',
         },
         body: JSON.stringify(data),
       });
 
       const result = await response.json();
       console.log(result);
     } catch (error) {
       console.error('Error:', error);
     }
   });
 });
 