class Estudante {
    private matricula: number;
    private nome: string;
    private notasProvas: number[]
    private notasTrabalhos: number[]

    constructor(m: number, n: string, np: number[], nt: number[]) {
        this.matricula = m;
        this.nome = n;
        this.notasProvas = np;
        this.notasTrabalhos = nt
    }
    somaNotas = (): number => {
        const somaNotasProvas = this.notasProvas.reduce((a, b) => a + b)
        const somaNotasTrabalho = this.notasTrabalhos.reduce((a, b) => a + b)
        return somaNotasProvas + somaNotasTrabalho
    }
    mediaNotas = (): number => {
        const somaNotasProvas = this.notasProvas.reduce((a, b) => a + b)
        const somaNotasTrabalho = this.notasTrabalhos.reduce((a, b) => a + b)
        return (somaNotasProvas + somaNotasTrabalho) / (this.notasProvas.length + this.notasTrabalhos.length)
    }

}

const maria = new Estudante(2010, 'maria', [10, 9, 10, 9], [10, 9])
console.log(maria.somaNotas())
console.log(maria.mediaNotas())

class Cliente {
    protected nome: string;
    constructor(n: string) {
        this.nome = n
    }
}

class ItemDoPedido {
    private _nome: string;
    private _preco: number

    constructor(n: string, p: number) {
        this._nome = n;
        this._preco = p
    }
    get preco(): number {
        return this._preco
    }

    set preco(newPreco: number) {
        this._preco = newPreco
    }
}

class Pedido {
    private cliente: Cliente;
    private formaPagamento: string;
    private itensConsumidos: ItemDoPedido[]
    private desconto: number;

    constructor(c: Cliente, fp: string, ic: ItemDoPedido[], d: number) {
        this.cliente = c;
        this.formaPagamento = fp;
        this.itensConsumidos = ic;
        this.desconto = d
    }

    total = (): number => {
        const valores = this.itensConsumidos.map((item) => item.preco)
        console.log(valores)
        const total = valores.reduce((a, b) => a + b)
        return total
    }

    totalComDesconto = (): number => {
        return this.total() * (1 - this.desconto)
    }

}
const cliente1 = new Cliente('joana')
const pedido1 = new Pedido(cliente1, 'debito', [new ItemDoPedido('cafe', 10), new ItemDoPedido('pao', 5)], 0.1)
console.log(pedido1.total())
console.log(pedido1.totalComDesconto())

class doDate {
    private day: number;
    private month: number;
    private year: number;

    constructor(d: number, m: number, y: number) {
        const dateAdd = new Date(`${y}-${m}-${d}`)

        if (dateAdd instanceof Date) {
            this.day = d;
            this.month = m,
                this.year = y
        } else {
            this.day = 1;
            this.month = 1,
                this.year = 1900
        }
    }

    getMonthName = () => {
        const months = [
            'janeiro',
            'fevereiro',
            'março',
            'abril',
            'maio',
            'junho',
            'julho',
            'agosto',
            'setembro',
            'outubro',
            'novembro',
            'dezembro',
        ];

        return months[this.month - 1]
    }

    isLeapYear = (): string => {
        if ((this.year % 4 == 0) && ((this.year % 100 != 0) || (this.year % 400 == 0))) {
            return 'this year is leap'
        }
        else
            return 'this year isnt leap'

    }

    compare = (): number | undefined => {
        if (new Date() === new Date(`${this.year}-${this.month}-${this.day}`)) {
            return 0
        }
        if (new Date() > new Date(`${this.year}-${this.month}-${this.day}`)) {
            return 1
        }

        if (new Date() < new Date(`${this.year}-${this.month}-${this.day}`)) {
            return -1
        }
    }

}

const date1 = new doDate(19, 10, 1987)
console.log(date1.getMonthName())
console.log(date1.isLeapYear())
console.log(date1.compare())