function generateResume() {

    document.getElementById("r-name").innerText =
        document.getElementById("name").value || "Your Name";

    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;

    document.getElementById("r-contact").innerText =
        email + " | " + phone;

    document.getElementById("r-address").innerText =
        document.getElementById("address").value || "Address";

    document.getElementById("r-objective").innerText =
        document.getElementById("objective").value ||
        "Your career objective will appear here.";

    document.getElementById("r-education").innerText =
        document.getElementById("education").value ||
        "Your education details will appear here.";

    document.getElementById("r-skills").innerText =
        document.getElementById("skills").value ||
        "Your skills will appear here.";

    document.getElementById("r-projects").innerText =
        document.getElementById("projects").value ||
        "Your projects will appear here.";

    document.getElementById("r-certifications").innerText =
        document.getElementById("certifications").value ||
        "Your certifications will appear here.";
}