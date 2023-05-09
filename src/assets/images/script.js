console.log('hi')


let themeDots = document.getElementsByClassName('themes')



for (var i=0; themeDots.length > i; i++){

themeDots[i].addEventListener('click', function(){
  let mode = this.dataset.mode
  console.log('Option clicked:', mode)
  setTheme(mode)
})
}

function setTheme(mode){
if(mode == 'light'){
  document.getElementById('theme-setting').href = ''
}

if(mode == 'blue'){
  document.getElementById('theme-setting').href = 'assets/images/blue.css'
}



}
