let api = "http://localhost:5000/users";
 getdata = async () => {
    try {
        let response = await fetch(api);
        let data = await response.json();
        // console.log(data.Search)
        return appendData(data) 

      } catch (error) {
        return error;
      }
}

getdata();

function appendData(data) {
    // let loader_div = document.querySelector("loader_div")
    // loader_div.style.display="none"
    let data_div = document.getElementById("Append_data");
    data_div.innerHTML= null;

    let Applicants = data.length;
    let title = document.getElementById("title_h3");
    title.innerHTML = `Showing ${Applicants} Applicants`

    data.forEach(function (el) {
        //data.innerHTML= null;

 
      let div = document.createElement("div");
      div.className += "label_col2";

      let Checkbox = document.createElement("input");
      Checkbox.setAttribute("type", "checkbox");
      Checkbox.className += "checkbox";

      let div_1 = document.createElement("div");
      div_1.innerHTML = `${el.id}`;

      let div_2 = document.createElement("div");
       div_2.innerHTML = `${el.email}`;

      let div_3 = document.createElement("div");
      div_3.innerHTML = `${el.fullName}`;

      let div_4 = document.createElement("div");
      div_4.innerHTML = `${el.phone}`;

      let btn = document.createElement("button");
      btn.innerHTML = "Unblocked";
      btn.className += "toggle_btn";
      btn.addEventListener("click", function(){
        btn.innerHTML = "Blocked";;
    });

      div.append(Checkbox, div_1, div_2, div_3, div_4, btn);
      data_div.append(div);
    });
    
}

let IdSortingHtoL = document.getElementById("idSortHtoL");
IdSortingHtoL.addEventListener("click", idSortHtoL);

async function idSortHtoL() {
    let response = await fetch(api);
    let data = await response.json();
    let Data = data;
    Data = Data.sort((a,b) => {
      return  b.id - a.id;
    });
    console.log(Data)
    appendData(Data);
  }

let IdSortingLtoH = document.getElementById("idSortLtoH");
IdSortingLtoH.addEventListener("click", idSortLtoH);

async function idSortLtoH() {
    let response = await fetch(api);
    let data = await response.json();
    let Data2 = data;
    Data2 = Data2.sort((a,b) => {
      return  a.id - b.id;
    });
    console.log(Data2)
    appendData(Data2);
  }




  let toggle_btn = document.querySelectorAll(".toggle_btn");
  console.log(toggle_btn);
 for(let tog_box of toggle_btn){
  console.log(tog_box);
   tog_box.addEventListener("click", function(event){
     console.log(tog_box);
    // console.log(event);
     let box_id = event.target.dataset.id;
     let tog_status = event.target.dataset.access;
     if(tog_status === true){
       tog_status = false;
       toggle_checkbox(box_id, tog_status, "completed");
     } else {
       tog_status = true;
       toggle_checkbox(box_id, tog_status, "completed");
     }
     console.log(box_id,tog_status);
    //toggle_checkbox(box_id, tog_status, "completed");
   })
 }
