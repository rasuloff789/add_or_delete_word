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
    function record(){
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
     
   }
   
   rec.start()}
   voiceButton.onclick=record
   window.onkeyup=record()
  //  {if (event.keyCode === 32){
  // console.log(record)
  // }}
  