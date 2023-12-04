// El método de multiplicación rusa consiste en multiplicar sucesivamente por 2 el multiplicando y
// dividir por 2 el multiplicador hasta que el multiplicador tome el valor 1.
// Luego, se suman todos los multiplicandos correspondientes a los multiplicadores impares.
// Dicha suma es el producto de los dos números. La siguiente tabla muestra el cálculo realizado para
// multiplicar 37 por 12, cuyo resultado final es 12 + 48 + 384 = 444.

function multiplicacionrusa(x,z){
    var multi = z;
    var suma = 0;
    while(x != 0){
        if(x % 2 != 0){
            console.log(x);
            suma += multi
        }
        multi = (multi*2)
        x = Math.floor(x/2)
    }
    return suma
}

console.log("El resultado de la suma es "+multiplicacionrusa(37,12));