console.log("welcome");
let addbtn = document.getElementById("add_btn");
addbtn.addEventListener("click", function (e) {
  let addTxt = document.getElementById("add_txt");
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.push(addTxt.value);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  addTxt.value = "";
  console.log(notesObj);

  showNotes();
});
function showNotes() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let html = "";
  notesObj.forEach(function (element, index) {
    html += ` <div class=" notecard my-2 mx-2 card" style="width: 18rem">
        <div class="card-body">
          <h5 class="card-title">Note ${index + 1}</h5>
          <p  class="card-text"> ${element} </p>
          <button href="#" class="btn btn-primary">Delete Note</button>
        </div>
      </div>
   `;
  });
  let noteElement = document.getElementById("notes");
  if (notesObj.length != 0) {
    noteElement.innerHTML = html;
  }
  else{
      noteElement.innerHTML=`Nothing to show yet, add a note in the above section.`;
  }
}
