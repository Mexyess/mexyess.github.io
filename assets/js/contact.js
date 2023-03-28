const form = document.querySelector("form");
let statusTxt = document.getElementById("message-status");

form.onsubmit =(e)=>{
    e.preventDefault();
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "message.php", true);
    xhr.onload = ()=> {
        if (xhr.readyState == 4 && xhr.status == 200){
            let response = xhr.response;
            if (response.indexOf("Votre message n'a pas pu être envoyé") != -1 
            || response.indexOf("Veuillez saisir une adresse email valide") != -1 
            || response.indexOf("L'e-mail est requis pour envoyer votre message") != -1 
            || response.indexOf("Veuillez ecrire un message") != -1){
                // En cas d'erreur d'envoi du message
            }else{
                form.reset();
                setTimeout(()=>{
                    statusTxt.innerHTML = "Laissez moi un message si vous avez besoin d'aide";
                }, 3000);
            }   
            statusTxt.innerHTML = response;
        }
    }
    let formData = new FormData(form);
    xhr.send(formData);
}

             
       