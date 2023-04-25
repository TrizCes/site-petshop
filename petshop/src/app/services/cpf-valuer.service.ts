import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CpfValuerService {

  constructor() { }

  cpfSequency(cpf: string) {
    const valoresRepetidos = [
        '00000000000',
        '11111111111',
        '22222222222',
        '33333333333',
        '44444444444',
        '55555555555',
        '66666666666',
        '77777777777',
        '88888888888',
        '99999999999'
    ]
    let cpfValido = true

    valoresRepetidos.forEach(valor => {
        if(valor == cpf) {
            cpfValido = false
        }
    })

    return cpfValido
}

checaEstruturaCPF(cpf: any) {
    const multiplicador = 10

    return this.checaDigitoVerificador(cpf, multiplicador)
}

checaDigitoVerificador(cpf: string, multiplicador: number) {
    if(multiplicador >= 12) {
        return true
    }

    let multiplicadorInicial = multiplicador
    let soma = 0
    const cpfSemDigitos = cpf.substr(0, multiplicador - 1).split('')
    const digitoVerificador = cpf.charAt(multiplicador - 1)
    for(let contador = 0; multiplicadorInicial > 1 ; multiplicadorInicial--) {
        soma = soma + cpfSemDigitos[contador] * multiplicadorInicial
        contador++
    }

    if(digitoVerificador == this.confirmaDigito(soma)) {
        return this.checaDigitoVerificador(cpf, multiplicador + 1)
    }

    return false
}

confirmaDigito(soma) {
    return 11 - (soma % 11)
}
}
