var q,a,b,c,d,ans;

function showscores(){
var body = document.getElementsByTagName("body")[0];
var tbl = document.createElement("table");
tbl.id = "sTable";
var tblBody = document.createElement("tbody");

var row = document.createElement("tr");
var headerCell = document.createElement("TH");
headerCell.innerHTML = "Email";
row.appendChild(headerCell);
tblBody.appendChild(row);

var headerCell = document.createElement("TH");
headerCell.innerHTML = "Score";
row.appendChild(headerCell);
tblBody.appendChild(row);

var ref = firebase.database().ref('Score/');
    ref.once('value', function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
       var childKey = childSnapshot.key;
       var childData = childSnapshot.val();
    
    

        console.log(childData.q);
          
            var row = document.createElement("tr");

            var cell = document.createElement("td");
            cell.id = "tcell"
            var cellText = document.createTextNode(childData.email);
            cell.appendChild(cellText);
            row.appendChild(cell);
            tblBody.appendChild(row);


            var cell = document.createElement("td");
            cell.id = "tscell"
            var cellText = document.createTextNode(childData.score);
            cell.appendChild(cellText);
            row.appendChild(cell);
            tblBody.appendChild(row);

            });

            tbl.appendChild(tblBody);
            body.appendChild(tbl);
            tbl.setAttribute("border", "0");
});
}
function upload(){
    var Key = firebase.database().ref().child("questions/").push().key;
    q = document.getElementById("q").value;
    a = document.getElementById("a").value;
    b = document.getElementById("b").value;
    c = document.getElementById("c").value;
    d = document.getElementById("d").value;
    ans = document.getElementById("ans").value;
    firebase.database().ref('Questions/'+Key).set({
        q: q,
        a: a,
        b: b,
        c: c,
        d: d,
        ans: ans
    }, function(error) {
      if (error) {} else {
          alert("Uploaded");
          document.getElementById("q").innerHTML = "";
          document.getElementById("a").innerHTML = "";
          document.getElementById("b").innerHTML = "";
          document.getElementById("c").innerHTML = "";
          document.getElementById("d").innerHTML = "";
          document.getElementById("ans").innerHTML = "";
        }
    });
}
function logout() {
    firebase.auth().signOut().then(function() {
      alert("Signed out Succesfully")
      window.location.href = "Authentication.html";
    }).catch(function(error) {
      // An error happened.
    });
}