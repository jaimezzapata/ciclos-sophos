// let nombre = "Jaime Zapata";
// const profesion = "Desarrollador";
// let edad = 32;
// if (edad > 18) {
//   var estado = "Puede hacer una maestría";
//   profesion = 'Magister en UX/UI'
// }
// console.log(nombre, profesion, edad, estado);

// for (let index = 1; index < 10; index++) {
//   let numero = Number(prompt("Ingrese un numero: "));
//   if (numero % 2 == 0) {
//     console.log(numero + " Ciclo for");
//   }
// }

// let index = 1;
// while (index < 10) {
//   let numero = Number(prompt("Ingrese un numero: "));
//   if (numero % 2 == 0) {
//     console.log(numero + " Ciclo While");
//   }
//   index++;
// }

// let i = 1;
// do {
//   let numero = Number(prompt("Ingrese un numero: "));
//   if (numero % 2 == 0) {
//     console.log(numero + " Ciclo Do While");
//   }
//   i++;
// } while (i < 10);

// let numero = Number(prompt('Ingrese un numero: '))
// for (let index = 1; index <= 10; index++) {
//    console.log(numero + ' * ' + index + ' ' + (numero*index))
// }

// let totalCompra = 0
// let valorProducto = 0
// for (let index = 1; index <= 5; index++) {
//     valorProducto = Number(prompt('Ingrese un valor: '))
//     totalCompra += valorProducto
// }
// console.log(totalCompra)

// let repetir = true
// let contador = 0
// while(repetir){
//     let opcion = Number(prompt('Seleccione:\n1-Registrar\n2-Salir'))
//     contador++
//     if(opcion == 2){
//         repetir = false
//     }
// }
// console.log('Numero de registros: ' + contador)

let usuario = prompt("Ingrese su usuario: ");
let contrasena = prompt("Ingrese su contraseña: ");
let saldoCuenta = 100000;
let valor = 0;
if (usuario == "Jaime" && contrasena == "1234") {
  let repetir = true;
  let opcion;
  while (repetir) {
    opcion = Number(
      prompt(
        "Seleccione:\n1-Consultar saldo\n2-Retirar dinero\n3-Transferir\n4-Consignar\n5-Salir"
      )
    );
    switch (opcion) {
      case 1:
        console.log("Su saldo es: " + saldoCuenta);
        break;
      case 2:
        valor = Number(prompt("Ingrese el valor que desea retirar"));
        if (valor < saldoCuenta) {
          saldoCuenta -= valor;
          console.log("Su nuevo saldo es: " + saldoCuenta);
        } else {
          console.log("Fondos insuficientes");
        }
        break;
      case 3:
        let numeroCuenta = prompt("Ingrese el numero de cuenta: ");
        valor = Number(prompt("Ingrese el valor que desea transferir"));
        if (valor < saldoCuenta) {
          saldoCuenta -= valor;
          console.log(
            "Transferencia exitosa a la cuenta: " +
              numeroCuenta +
              " Su nuevo saldo es: " +
              saldoCuenta
          );
        } else {
          console.log("Fondos insuficientes");
        }
        break;
      case 4:
        valor = Number(prompt("Ingrese el valor que desea consignar"));
        saldoCuenta += valor;
        break;
      case 5:
        repetir = false;
        break;
      default:
        break;
    }
  }
} else {
  console.log("Credenciales incorrectas");
}