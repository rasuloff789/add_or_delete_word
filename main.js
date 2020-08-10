function addPeople(){if(text_writing_part.value.length>3)
  {const newDiv=document.createElement('div')
  user.appendChild(newDiv)
  const newLi=document.createElement('LI')
  newLi.textContent=text_writing_part.value
  newDiv.appendChild(newLi)
  text_writing_part.value=''
  const newButton=document.createElement('BUTTON')
  newDiv.appendChild(newButton)
  newButton.onclick=function(){
    newLi.remove()
    newButton.remove()
    newDiv.remove()
  }}
  
}
addButton.onclick=addPeople
text_writing_part.onkeyup=function(event){
  if (event.keyCode === 13 && text_writing_part.value.length>3 ) {
    const newDiv=document.createElement('div')
    user.appendChild(newDiv)
    const newLi=document.createElement('LI')
    newLi.textContent=text_writing_part.value
    newDiv.appendChild(newLi)
    text_writing_part.value=''
    const newButton=document.createElement('BUTTON')
    newDiv.appendChild(newButton)
    newButton.onclick=function(){
      newLi.remove()
      newButton.remove()
      newDiv.remove()}
    }}
    //voiceButton
   const rec = new webkitSpeechRecognition()
   rec.lang='uz-UZ'
   rec.onresult=function(event){
     
    if(event.results[0][0].transcript.length>1)
    {const newDiv=document.createElement('div')
    user.appendChild(newDiv)
    const newLi=document.createElement('LI')
    newLi.textContent=event.results[0][0].transcript
    newDiv.appendChild(newLi)
    const newButton=document.createElement('BUTTON')
    newDiv.appendChild(newButton)
    newButton.onclick=function(){
      newLi.remove()
      newButton.remove()
      newDiv.remove()
    }}
    //remove when word=sariq
    if(event.results[0][0].transcript ==='qizil'){
   /*  console.log (rec ) */ user.remove()
    }
   }
   voiceButton.onclick=function(){
     rec.start()
   }
   window.onkeyup=function(event) {
     if (event.keyCode === 32){
    rec.start()
  }
   }  
