function handleClick(event) {
    event.preventDefault();

    const form = document.getElementById("myForm");
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("pass").value;
    const gender = form.querySelector('input[name="group"]:checked')?.nextElementSibling.innerText || "";
    const group = document.getElementById("group").value;
    const bio = document.getElementById("bio").value;
    const age = document.getElementById("age").value;

    const spans = document.querySelectorAll(".info__content-wrapper .info");
    spans[0].textContent = name;
    spans[1].textContent = email;
    spans[2].textContent = password;
    spans[3].textContent = gender;
    spans[4].textContent = group;
    spans[5].textContent = bio;
    spans[6].textContent = age;
}
