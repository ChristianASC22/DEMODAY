import { ref, push, set, database, onValue } from "./firebase.js";

let companyInput = document.getElementById('companyInput')
let NameInput = document.getElementById('NameInput')
let locationInput = document.getElementById("LocationInput")
let zipcodeinput = document.getElementById('zipcodeInput')
let userzipcodeinput = document.getElementById('userzipcodeInput')
let contentinput = document.getElementById('contentInput')
let submitB = document.getElementById('submitBtn')
let postcontent = document.getElementById('post')

let contentref = ref(database, "post1")

submitB.onclick=function(event){
    event.preventDefault();
    let companyInputval = companyInput.value;
    let NameInputval = NameInput.value;
    let locationInputval = locationInput.value;
    let zipcodeinputval = zipcodeinput.value;
    let contentinputval= contentinput.value;

    if (companyInputval==''||contentinputval==''||locationInputval == ''||NameInputval==''||zipcodeinputval==''){
        alert('you must fill all fields before you can post')
    }
    else
    {
      console.log(companyInputval)
      console.log(NameInputval)
      console.log(locationInputval)
      console.log(zipcodeinputval)
      console.log(contentinputval)
      companyInput.value=''
      NameInput.value=''
      locationInput.value=''
      zipcodeinput.value=''
      contentinput.value=''

      let userpost = {
          company: companyInputval,
          name: NameInputval,
          location: locationInputval,
          zip: zipcodeinputval,
          content: contentinputval,
      }
      let newcontentref = push(contentref)
      set (newcontentref, userpost)
    }
}
    onValue(contentref, (snapshot)=>{
        postcontent.innerHTML=''
        let data = snapshot.val()
        console.log(data)
        
        for (const property in data){
            let user_title_input = document.createElement('h1')
            user_title_input.innerHTML = data[property].company
            let user_name_input = document.createElement('h3')
            user_name_input.innerHTML = data[property].name
            let user_location_input = document.createElement('h5')
            user_location_input.innerHTML=  data[property].location
            let user_content_input = document.createElement('p')
            user_content_input.innerHTML=data[property].content

            let newdiv = document.createElement('div')
            newdiv.className="newdiv"
            newdiv.append(user_title_input,user_name_input,user_location_input,user_content_input)
            postcontent.append(newdiv)

            postcontent.className="userpostcontent"
        }
    })