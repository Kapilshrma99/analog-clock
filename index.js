setInterval(()=>{
    const d=new Date();
    let Hour = d.getHours()
    let Min=d.getMinutes()
    let Sec=d.getSeconds()
    let hourRotation=30*Hour + Min/2 
    let minRotation=6*Min
    let secRotation=6*Sec
    // document.getElementById("a2").textContent.style.textShadow="10px 10px 80px 12px lightblue;"
    hour.style.transform=`rotate(${hourRotation}deg)`
    min.style.transform=`rotate(${minRotation}deg)`
    sec.style.transform=`rotate(${secRotation}deg)`
},1000)
