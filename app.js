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
