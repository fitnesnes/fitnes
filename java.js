function requiredElement() {
    var nom = document.getElementById("nom").value;
    var prenom = document.getElementById("prenom").value;
    var email = document.getElementById("email").value;
    
    if(nom== "") {
    alert("Veillez insérer votre Nom");
    document.getElementById("nom").style.backgroundColor="red";
    document.getElementById("nom").focus();
    //nom.focus();
    return false;
    }
    if(prenom == "") {
    alert("Veillez insérer votre Prénom");
    document.getElementById("prenom").style.backgroundColor="red";
    document.getElementById("prenom").focus();
    return false;
    }
    if(email == "") {
    alert("Veillez insérer votre Email");
    document.getElementById("email").style.backgroundColor="red";
    document.getElementById("email").focus();
    return false;
    }
    return true;
    }
    