const themSwitcher=document.querySelector('#themeSwitcher');

// using browsers navigator API...position takes callback poistion which gives latitude and longitude

navigator.geolocation.getCurrentPosition((position)=>{
  // console.log(position);
  let sunset=new Date().sunset(position.coords.latitude,position.coords.longitude);
  let sunrise=new Date().sunrise(position.coords.latitude,position.coords.longitude);

  if(isDay(sunset,sunrise)){
      setTheme('theme-light');
  }
  else{
    setTheme('theme-dark');
  }
});

function isDay(sunset,sunrise){
  const nowHours=new Date().getHours();
  return nowHours>=sunrise.getHours() && nowHours<sunset.getHours();

}




const defaultTheme=localStorage.getItem('theme')||'theme-light';  /*if theme returns null then default value theme light would be used;*/
setTheme(defaultTheme);

themSwitcher.addEventListener('change',(e)=>{
  setTheme(e.target.value) ;  /*Gives value of the selected value*/
});


function setTheme(theme){

  theme=theme||'theme-light';  /*for select a theme class is not applied ; to resolve the issue */
  document.documentElement.className=theme;
  localStorage.setItem('theme',theme); /*done so that last theme to be displayed after refreshed */
/*meant for html tag*/
themeSwitcher.value=theme;

}
