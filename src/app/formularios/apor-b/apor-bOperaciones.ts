
export class Multiplicador {

  static multiplicarConSumas(numero1: number, numero2: number): number {
    let resultado = 0;
    if (numero2 === 0 || numero1 === 0) {
      return 0;
    }
    for (let i = 0; i < numero2; i++) {
      resultado = resultado + numero1;
    }
    return resultado;
  }

  static texto(numero1: number, numero2: number): string {
    if (numero2 === 0) {
      return '0';
    }
    const resultadoT = numero1.toString() + ' + ';
    const cadena = resultadoT.repeat(numero2);
    return cadena;
  }
}