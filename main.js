import { ref, push, set, database, onValue } from "./firebase.js";

let nameinput = document.getElementById('nameInput')
let titleinput = document.getElementById('titleInput')
let zipcodeinput = document.getElementById('zipcodeInput')
let contentinput = document.getElementById('contentInput')
let submitB = document.getElementById('submitBtn')
let userzipcodeinput = document.getElementById('userzipcodeInput')
let postcontent = document.getElementById('post')
let allPosts = document.getElementById('allPosts');

let contentref = ref(database, "post")

submitB.onclick=function(event){
    event.preventDefault();
    let nameinputval = nameinput.value;
    let titleinputval = titleinput.value;
    let zipcodeinputval = zipcodeinput.value;
    let contentinputval= contentinput.value

    if (nameinputval==''||contentinputval==''||titleinputval==''||zipcodeinputval==''){
        alert('you must fill all fields before you can post')
    }
  else{
    console.log(nameinputval)
    console.log(titleinputval)
    console.log(contentinputval) 
    nameinput.value=''
    titleinput.value=''
    contentinput.value=''
    zipcodeinput.value=''

    let userpost = {
        Name: nameinputval,
        title: titleinputval,
        zip:zipcodeinputval,
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
        
        let dataArr=[]
        for (const property in data){
            dataArr.push(data[property])

        }
        
      for(let i=0;i<dataArr.length;i++){
        let row= document.createElement("div");
        row.className="row"
        
        let user_title_input = document.createElement('h1')
        user_title_input.innerHTML = dataArr[i].title
        let user_name_input = document.createElement('h3')
        user_name_input.innerHTML = dataArr[i].Name
        let user_content_input = document.createElement('p')
        user_content_input.innerHTML=dataArr[i].content

        let col1 = document.createElement('div')
        col1.className="col"
        col1.append(user_title_input,user_name_input,user_content_input)
        allPosts.append(col1)
        
        /*
        if(dataArr[i]){
            let user_title_input = document.createElement('h1')
            user_title_input.innerHTML = dataArr[i].title
            let user_name_input = document.createElement('h3')
            user_name_input.innerHTML = dataArr[i].Name
            let user_content_input = document.createElement('p')
            user_content_input.innerHTML=dataArr[i].content

            let col1 = document.createElement('div')
            col1.className="col"
            col1.append(user_title_input,user_name_input,user_content_input)
            row.append(col1)
        }
        
        if(dataArr[i+1]){
            let user_title_input = document.createElement('h1')
            user_title_input.innerHTML = dataArr[i+1].title
            let user_name_input = document.createElement('h3')
            user_name_input.innerHTML = dataArr[i+1].Name
            let user_content_input = document.createElement('p')
            user_content_input.innerHTML=dataArr[i+1].content

            let col2 = document.createElement('div')
            col2.className="col"
            col2.append(user_title_input,user_name_input,user_content_input)
            row.append(col2)
        }
        
        postcontent.append(row)
        */
        
        
        

      }
        
    })
