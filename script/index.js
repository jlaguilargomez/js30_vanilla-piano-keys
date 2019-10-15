// From DOM to JS
const piano = document.querySelectorAll('.key__box');
const textIn = document.getElementById('text');



document.addEventListener('keydown',function(e){
    let keyCode = e.keyCode;
    let note = document.getElementById(`audio-${keyCode}`);
    let key = document.getElementById(`key-${keyCode}`);

    if(!note){
        return
    }else{
        note.play()
        note.currentTime = 0;
        key.classList.add('key__box--push');
    }
})


piano.forEach(key => {
    key.addEventListener('transitionend', function(){
        key.classList.remove('key__box--push');
    })
})

setTimeout(() => {
    textIn.innerHTML='Ok, maybe there is something wrong with the musical scale, sorry ...';
},5000);

setTimeout(() => {
    textIn.innerHTML='';
},9000);

setTimeout(() => {
    textIn.innerHTML='In fact, you aren\'t Beethoven neither...';
},13000)

setTimeout(() => {
    textIn.innerHTML='';
},17000)

setTimeout(() => {
    textIn.innerHTML='So you could have played better the piano if it would have made with the correct notes?  . ¬¬ ';
},21000)

setTimeout(() => {
    textIn.innerHTML='';
},27000)