function checkAge() {
    let age = document.getElementById("age").value;

    if (age >=18) {
        document.getElementById("result").innerHTML =
        "You are an adult";

    } else {
        document.getElementById("result").innerHTML =
        "You are a minor"
    }
}