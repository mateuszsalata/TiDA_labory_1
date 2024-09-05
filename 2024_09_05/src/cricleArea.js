/**
 * Funkcja obliczająca pole koła o podanym promieniu
 * @param {number} radius promień koła
 * @returns {number} pole koła
 * @throws {Error} If `y` &lt;= `0`
 * @author Mateusz Sałata 5D gr 2 &lt;mateusz.salata@uczen.zsk.poznan.pl>
 */
function calculateArea(radius) {
    if(radius < 0) {
        return 3.141592*(radius*radius);
    }
    else {
        console.log("promien musi byc wiekszy od 0")
    }
}