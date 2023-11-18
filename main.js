// 1 Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar.

function paridad(numero) {
  if (numero % 2 === 0) {
    console.log("El número " + numero + " es par");
  } else {
    console.log("El número " + numero + " es impar");
  }
}

paridad(3);

// 2  Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales.

function compareNumbers(num1, num2) {
  if (num1 > num2) {
    console.log(num1 + " es mayor que el número " + num2 + ".");
  } else if (num1 < num2) {
    console.log(num2 + " es mayor que el número " + num1 + ".");
  } else {
    console.log("Ambos números son iguales");
  }
}

compareNumbers(5, 8);

// 3  Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.

function multiplodecinco(numero) {
  if (numero % 5 === 0) {
    console.log(numero + " es multiplo de 5.");
  } else {
    console.log(numero + " no es multiplo de 5.");
  }
}

multiplodecinco(7);

// 4 Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número.

function impresiondenumeros(numero) {
  for (let i = 0; i <= numero; i++) {
    console.log(i);
  }
}

impresiondenumeros(10);

// 5 Crear una función que reciba una palabra y un número por parámetro e imprima por consola  esa palabra la cantidad correspondiente al número indicado.

function imprimirpalabra(palabra, numero) {
  for (let i = 0; i < numero; i++) {
    console.log(palabra);
  }
}

imprimirpalabra("JavaScript", 10);

// 6 Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array.

function printArray(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

// Ejemplo
const miArray = [1, 2, 3, 4, 5];
printArray(miArray);

// 7 Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, menos el que se encuentre en la 5ta posición del mismo. Ayuda: Recuerden que el primer índice de un array es "0".

function printArraysinquintoElemento(array) {
  for (let i = 0; i < array.length; i++) {
    if (i !== 4) {
      console.log(array[i]);
    }
  }
}

// Ejemplo
const miArray2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
printArraysinquintoElemento(miArray2);

// 8 Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada número del array multiplicado por el número pasado por parámetro.

function multiplicarArrayPor(array, numero) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i] * numero);
  }
}

// Ejemplo
const miArray3 = [1, 2, 3, 4, 5];
multiplicarArrayPor(miArray3, 10);
