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
