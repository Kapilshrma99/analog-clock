setInterval(()=>{
    const d=new Date();
    let Hour = d.getHours()
    let Min=d.getMinutes()
    let Sec=d.getSeconds()
    let hourRotation=30*Hour + Min/2 
    let minRotation=6*Min
    let secRotation=6*Sec
    hour.style.transform=`rotate(${hourRotation}deg)`
    min.style.transform=`rotate(${minRotation}deg)`
    sec.style.transform=`rotate(${secRotation}deg)`
},1000)
