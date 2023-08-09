// let nameinput = document.getElementById("name");
// alert(nameinput.value);
// alert("name is", nameinput);
// alert("name is" + nameinput.value);
// if (nameinput.value == "")  {
//     alert("enter name");
// }
// let seccessmmessege = document.getElementById (" ")



function validateform(event) {
    event.previes ();
    let name = document.getElementById("name")
    let email = document.getElementById("email")
    let subject = document.getElementById("subject")
    let text = document.getElementById("text")

    if (name.value == "") {
        alert("enter your name")
    }
    if (email.value == "") {
        alert("enter your email")
    }
    if (subject.value == "") {
        alert(" please add subject !")
    }
    if (text.value == "") {
        alert("please add a text !")
    }
}
