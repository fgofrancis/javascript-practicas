/**
 * Dado un texto comprobar que sea un email válido
 */
/**
* My solucion
 */

function email(email){

    let result = false;
    let email_limpio = email.split('')
    result = ((email_limpio.includes('@')) && (!email_limpio.includes(' ')))?true:false
    console.log(email_limpio);
    return result
}

//  console.log(email('francis@gmail.com'))

 /**
  * Soluction Teacher
  * expresion regular
  */
 function comprobarEmail(email){

    return /^\w+@\w+\.\w+$/gi.test(email)
 }

 console.log( comprobarEmail('francsi @gmail.com'))