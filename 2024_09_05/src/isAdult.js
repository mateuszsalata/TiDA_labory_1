/**
 * Sprawdzanie czy osoba jest pełnoletnia
 * @param {number} age wiek osoby sprawdzanej
 * @returns {boolean} odpowiedz czy osoba jest pełnoletnia czy nie
 * @author Mateusz Sałata 5D gr 2 &lt;mateusz.salata@uczen.zsk.poznan.pl>
 */
function isAdult(age){
    if(age>=18){
        return true;
    }
    else if(age<0){
        console.log("Wiek nie moze byc mniejszy od 0")
    }
    else {
        return false;
    }
}