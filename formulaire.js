document.getElementById("Envoyer").addEventListener("click",function(){
        document.getElementById("errorname").innerHTML="";
        document.getElementById("errorprenom").innerHTML="";
        document.getElementById("erroremail").innerHTML="";
        document.getElementById("errortelefon").innerHTML="";
        var regex=/^[A-Z]{0}[a-z]{7,15}$/;
        var regexx=/^[A-Z]{0}[a-z]{7,15}$/;
        var regeex=/^.+@.+\.+/;
        var reegex=/^[0-9]{8}$/;
        if(!regex.test(document.getElementById("name").value)){
            document.getElementById("errorname").innerHTML="your error message for the user";
        }
        if(!regexx.test(document.getElementById("prenom").value)){
            document.getElementById("errorprenom").innerHTML="your error message for the user";
        }
        if(!regeex.test(document.getElementById("email").value)){
            document.getElementById("erroremail").innerHTML="your error message for the user";
        }
        if(!reegex.test(document.getElementById("tel").value)){
            document.getElementById("errortelefon").innerHTML="your error message for the user";
        }
        if(regex.test(document.getElementById("name").value) &&
        regexx.test(document.getElementById("prenom").value) &&
        regeex.test(document.getElementById("email").value) &&
        reegex.test(document.getElementById("tel").value)){
            window.location.href="projet.html";
        }});
        