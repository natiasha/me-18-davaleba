//1
function startTime()
{
  let today=new Date();
  let h=today.getHours();
  let m=today.getMinutes();
  let s=today.getSeconds();
  m=checkTime(m);
  s=checkTime(s);
 document.getElementById('txt').innerHTML=h+":"+m+":"+s+' '+"PM";
  t=setTimeout(function() {startTime()},500);
}
function  checkTime(i)
{
  if(i<10)
  {
i="0"+i;
  }
return i;
}
//2
const slides = document.querySelectorAll('.slide-area');
const slides = document.querySelectorAll('.slide-item');
const slidesLength = slides.length;
const nextButton = document.querySelector('#next');
const prevButton = document.querySelector('#prev');
const stopBtn = document.querySelector('#stop-sliding');
const startBtn = document.querySelector('#start-sliding');
let activeIndex = 0;

function renderSlider() {
  slides.forEach((element, index) => {
    element.style.transform = `translateX(${100 * (index - activeIndex % slidesLength)}%)`;
  })
}

renderSlider();

function nextSlide() {
  if(activeIndex === (slidesLength - 1)){
    activeIndex = 0;
  } else {
    activeIndex = activeIndex + 1;
  }

  renderSlider();
}

function prevSlide() {
  if(activeIndex === 0){
    activeIndex = slidesLength - 1;
  } else {
    activeIndex = activeIndex - 1;
  }

  renderSlider();
}

nextButton.addEventListener('click', (e) => {
  nextSlide();
});
prevButton.addEventListener('click', prevSlide);

document.addEventListener('keydown', (e) => {
  console.log(e.code);
  if(e.code === 'ArrowRight'){
    nextSlide();
  }
  if(e.code === 'ArrowLeft'){
    prevSlide();
  }
});

let intervalId = null;

function startAutoSliding() {
  if(!intervalId){
    intervalId = setInterval(() => {
      nextSlide();
    }, 3000);
  }
}

function stopAutoSliding() {
  clearInterval(intervalId);
  intervalId = null;
}
stopBtn.addEventListener('click', stopAutoSliding);
startBtn.addEventListener('click', startAutoSliding);

//damatebuli kodi
 renderSlider();
slide-area.addEventListener('mouseenter', (e) => {
  console.log(e.code);
  if(e.code === 'startAutoSliding'){
    stopAutoSliding();
  }
  });

slide-area.addEventListener('mouseleave', (e) => {
    console.log(e.code);
    if(e.code === 'stopAutoSliding'){
      startAutoSliding();
    }
  });
      


//3
//4
const students = [-1, -3, 4, 2];
let minstudents=3;
let studentcount=0;
for (i=0; i<=4; i++)
{
if (students[i]<=0)
{
  studentcount=studentcount+1;
  console.log(studentcount);
  
}
}
if (studentcount - minstudents>=0)
{
  console.log('Jes');
}
else
{
  console.log('no');
}
