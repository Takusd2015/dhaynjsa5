function firstFunction(){
    const options = { 
        method:'GET',
        headers: new Headers({'content-type': 'application/json'}),
        mode: 'no-cors',
        credential:"include"

    };

    fetch('https://csunix.mohawkcollege.ca/~adams/10259/a6_responder.php',  {method:'GET',mode:'no-cors', credentials: 'include' } )
    .then(response => response.text())
    .then(data => console.log(data))
  
}