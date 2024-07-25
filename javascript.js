const reomveOptons= document.getElementById('colorSelection')
document.getElementById('remove-button').addEventListener('click', () => {

    reomveOptons.remove(reomveOptons.children)
});

const colorPick= document.getElementById('colorSelect');
const changeParaColour =document.getElementById('changeParaColour')
  document.getElementById('colorPickBtn').addEventListener('click',()=>{
    const color =colorPick.value
    changeParaColour.style.color=color
  })

 document.getElementById('form1').addEventListener('submit', function(event){
 event.preventDefault()
 function addName(){
  var fname = document.querySelector('input[name="fname"]').value;
  var lname = document.querySelector('input[name="lname"]').value;

  const firstName =document.createElement('h1')
  const lastName=document.createElement('h1')
  firstName.innerText='First Name:'+fname
  lastName.innerText='Last Name:'+lname
      document.getElementById('input').appendChild(firstName)
      document.getElementById('input').appendChild(lastName)

 }
addName()
})

