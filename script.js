const gift=document.getElementById('giftBtn');
const letter=document.getElementById('letter');
const final=document.getElementById('final');
gift.onclick=()=>{letter.classList.remove('hidden');gift.style.display='none';}
document.getElementById('surpriseBtn').onclick=()=>{
letter.style.display='none';
final.classList.remove('hidden');
for(let i=0;i<80;i++){
let h=document.createElement('div');
h.className='heart';
h.innerHTML='❤️';
h.style.left=Math.random()*100+'vw';
h.style.animationDuration=(3+Math.random()*4)+'s';
document.body.appendChild(h);
}
}
