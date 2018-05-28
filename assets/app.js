//Crea una web que pida, por medio de un prompt(), la edad de una persona, en años. 


window.onload = () => {

    const age = prompt("Ingresa la edad a consultar");
    
    // Si la persona ingresa un dato que no es un número entero, un string, un número decimal, un cero, o un campo vacío), la web debe dar un mensaje de error. 
    if (age % 1 !== 0 || age === "0" || age === NaN || age === "") {
        alert("ERROR, debes ingresar un numero entero");

    //toddler: 1-3, preschooler: 3-5, gradeschooler: 5-12, teenager: 12-18, young adult: 18-21 and adult: 21 +
    }else if (age <=1 && age <=3){
        alert("La edad ingresada pertenece al segmento 'Toddler'")     
    }else if (age <=3 && age <=5){
        alert("La edad ingresada pertenece al segmento 'Preschooler'")     
    }else if (age <=5 && age <=15){
        alert("La edad ingresada pertenece al segmento 'Gradeschooler'")     
    }else if (age <=12 && age <=18){
        alert("La edad ingresada pertenece al segmento 'Teenager'")     
    }else if (age <=18 && age <=21){
        alert("La edad ingresada pertenece al segmento 'Young Adult'")     
    }else if (age >=21){
        alert("La edad ingresada pertenece al segmento 'Adult'")     
    }
}





