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
//3
//4
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

