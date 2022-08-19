function getmap() {
    let infoContainer= document.getElementById("infoContainer")

    let state = document.getElementById('State').value
    let city = document.getElementById('City').value
    let zoom = document.getElementById('zoom').value
    let maptype = document.querySelector('input[name="maptype"]:checked').value;
    let alphabetArray=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T"]


    const proxy = "https://nextjs-cors-anywhere.vercel.app/api?endpoint=";
    const api = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=food_pantry+${city}+${state}&key=AIzaSyAA7vuYVfIETRH8pO_rBJvdLXTvF2LuLT8`; // Change this to your API's URL! 
    fetch(proxy + api) 
    .then(function(response){ 
        return response.json(); 
    }) 
    .then(function(data){ 
        console.log(data); 
      
        infoContainer.innerHTML=""
        let newh3=document.createElement("h3")
        newh3.innerHTML="Results"
      
            infoContainer.append(newh3)
        for(let i=0; i<20;i++){
           let newDiv= document.createElement("div")

          
            //name
            let newp1= document.createElement("p")
            newp1.innerHTML=alphabetArray[i]+". Name of Pantry: "+data.results[i].name
            newDiv.append(newp1)

            //address
            let newp2=document.createElement("p")
            newp2.innerHTML="Address: "+ data.results[i].formatted_address
            newDiv.append(newp2)

            //Business Status
            let newp3= document.createElement("p")
            newp3.innerHTML= "Business Status: "+data.results[i].business_status
            newDiv.append(newp3)
            
            newDiv.className="infoContain"
            infoContainer.append(newDiv)

            let location1Lat=data.results[0].geometry.location.lat
            let location1Lng=data.results[0].geometry.location.lng
            let location2Lat=data.results[1].geometry.location.lat
            let location2Lng=data.results[1].geometry.location.lng
            let location3Lat=data.results[2].geometry.location.lat
            let location3Lng=data.results[2].geometry.location.lng
            let location4Lat=data.results[3].geometry.location.lat
            let location4Lng=data.results[3].geometry.location.lng
            let location5Lat=data.results[4].geometry.location.lat
            let location5Lng=data.results[4].geometry.location.lng
            let location6Lat=data.results[5].geometry.location.lat
            let location6Lng=data.results[5].geometry.location.lng
            let location7Lat=data.results[6].geometry.location.lat
            let location7Lng=data.results[6].geometry.location.lng
            let location8Lat=data.results[7].geometry.location.lat
            let location8Lng=data.results[7].geometry.location.lng
            let location9Lat=data.results[8].geometry.location.lat
            let location9Lng=data.results[8].geometry.location.lng
            let location10Lat=data.results[9].geometry.location.lat
            let location10Lng=data.results[9].geometry.location.lng
            let location11Lat=data.results[10].geometry.location.lat
            let location11Lng=data.results[10].geometry.location.lng
            let location12Lat=data.results[11].geometry.location.lat
            let location12Lng=data.results[11].geometry.location.lng
            let location13Lat=data.results[12].geometry.location.lat
            let location13Lng=data.results[12].geometry.location.lng
            let location14Lat=data.results[13].geometry.location.lat
            let location14Lng=data.results[13].geometry.location.lng
            let location15Lat=data.results[14].geometry.location.lat
            let location15Lng=data.results[14].geometry.location.lng
            let location16Lat=data.results[15].geometry.location.lat
            let location16Lng=data.results[15].geometry.location.lng
            let location17Lat=data.results[16].geometry.location.lat
            let location17Lng=data.results[16].geometry.location.lng
            let location18Lat=data.results[17].geometry.location.lat
            let location18Lng=data.results[17].geometry.location.lng
            let location19Lat=data.results[18].geometry.location.lat
            let location19Lng=data.results[18].geometry.location.lng
            let location20Lat=data.results[19].geometry.location.lat
            let location20Lng=data.results[19].geometry.location.lng
            let mapurl = `https://maps.googleapis.com/maps/api/staticmap?center=${city},${state}&zoom=${zoom}&size=400x400
            &markers=color:red%7Clabel:A%7C${location1Lat},${location1Lng}
            &markers=color:black%7Clabel:B%7C${location2Lat},${location2Lng}
            &markers=color:brown%7Clabel:C%7C${location3Lat},${location3Lng}
            &markers=color:green%7Clabel:D%7C${location4Lat},${location4Lng}
            &markers=color:purple%7Clabel:E%7C${location5Lat},${location5Lng}
            &markers=color:yellow%7Clabel:F%7C${location6Lat},${location6Lng}
            &markers=color:blue%7Clabel:G%7C${location7Lat},${location7Lng}
            &markers=color:gray%7Clabel:H%7C${location8Lat},${location8Lng}
            &markers=color:orange%7Clabel:I%7C${location9Lat},${location9Lng}
            &markers=color:red%7Clabel:J%7C${location10Lat},${location10Lng}
            &markers=color:black%7Clabel:K%7C${location11Lat},${location11Lng}
            &markers=color:brown%7Clabel:L%7C${location12Lat},${location12Lng}
            &markers=color:green%7Clabel:M%7C${location13Lat},${location13Lng}
            &markers=color:purple%7Clabel:N%7C${location14Lat},${location14Lng}
            &markers=color:yellow%7Clabel:O%7C${location15Lat},${location15Lng}
            &markers=color:blue%7Clabel:P%7C${location16Lat},${location16Lng}
            &markers=color:gray%7Clabel:Q%7C${location17Lat},${location17Lng}
            &markers=color:orange%7Clabel:R%7C${location18Lat},${location18Lng}
            &markers=color:red%7Clabel:S%7C${location19Lat},${location19Lng}
            &markers=color:black%7Clabel:T%7C${location20Lat},${location20Lng}
            &maptype=${maptype}&key=AIzaSyAA7vuYVfIETRH8pO_rBJvdLXTvF2LuLT8`
            let map = document.getElementById('map')
            map.src = mapurl
           }
    })

}