# Readme Second Challenge Push Up

### Enunciado 
>  El método de multiplicación rusa consiste en multiplicar sucesivamente por 2 el multiplicando y
dividir por 2 el multiplicador hasta que el multiplicador tome el valor 1.
Luego, se suman todos los multiplicandos correspondientes a los multiplicadores impares.
Dicha suma es el producto de los dos números. La siguiente tabla muestra el cálculo realizado para
multiplicar 37 por 12, cuyo resultado final es 12 + 48 + 384 = 444.

| Multiplicador | Multiplicando | Multiplicador Impar | Suma |
| ------------- | ------------- | ------------------- | ---- |
|      37       |       12      |          Si         |  12  |
|      18       |       24      |          No         |      |
|      09       |       48      |          Si         |  60  |
|      04       |       96      |          No         |      |
|      02       |      192      |          No         |      |
|      01       |      384      |          Si         |  444 |

> En la consola se muestran los numeros con multiplicador impar y el resultado total hasta que este mismo llega a 1

* Desarrolle un programa que reciba como entrada el multiplicador y el multiplicando, y entregue
como resultado el producto de ambos, calculado mediante el método de multiplicación rusa.