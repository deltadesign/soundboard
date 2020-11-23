const keys = document.querySelectorAll('.key');
keys.forEach((key) => {key.addEventListener('transitionend', removeTransition)})

window.addEventListener('keydown', keyPush)
document.addEventListener('click', clicker)

function clicker(e){
  const key = e.target.id;

  const element = document.getElementById(`${key}`);
  const audio = document.querySelector(`audio[data-key="${key}"]`)
  
  if(!element) {
    return
  } else {
    element.classList.add('keyed')
    audio.currentTime = 0;
    audio.play();
  }
}

function keyPush(e){
  const key = e.key;
  const element = document.getElementById(`${key}`);
  const audio = document.querySelector(`audio[data-key="${key}"]`)
  
  if(!element) {
    return
  } else {
    element.classList.add('keyed')
    audio.currentTime = 0;
    audio.play();
  }
}

 function removeTransition(e) {
  if(e.propertyName !== 'transform') {
    return
  } else {
    this.classList.remove('keyed')
  }
}