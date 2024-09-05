/**
 * Dzielenie 2 wartosci jedna przez druga
 * @param x dzielna
 * @param y dzielnik
 * @returns {number} wynik dzielenia (int)
 * @author Mateusz Sałata 5D gr 2 &lt;mateusz.salata@uczen.zsk.poznan.pl>
 * @throws {Error} If `y` is `0`
 * @example
 *  const x = 10;
 *  const y = 2;
 *
 *  const result = divide(x, y);
 *  console.log(result);
 *  // Logs: 5
 */
function divide(x, y) {
    if (y!=0) {
        return x/y;
    }
    else {
        console.log("nie mozna dzielic przez 0");
    }
}

divide