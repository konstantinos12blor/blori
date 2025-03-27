document.getElementById("loginButton").addEventListener("click", function() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (email === "" || password === "") {
        document.getElementById("message").innerText = "Συμπληρώστε όλα τα πεδία!";
        return;
    }

    // Προσωρινό μήνυμα επιτυχίας
    document.getElementById("message").innerText = "Συνδεθήκατε με επιτυχία!";
    
    // Μεταφορά στη σελίδα των posts μετά από 1,5 δευτερόλεπτο
    setTimeout(function() {
        window.location.href = "posts.html";
    }, 1500);
});

document.getElementById("registerButton").addEventListener("click", function() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (email === "" || password === "") {
        document.getElementById("message").innerText = "Συμπληρώστε όλα τα πεδία!";
        return;
    }

    // Προσωρινό μήνυμα εγγραφής
    document.getElementById("message").innerText = "Η εγγραφή ολοκληρώθηκε!";
});
