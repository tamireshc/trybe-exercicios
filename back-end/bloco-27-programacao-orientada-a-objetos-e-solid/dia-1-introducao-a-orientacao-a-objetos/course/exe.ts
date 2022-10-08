class Tv {
    brand: string;
    size: number;
    resolution: number;
    connections: string;
    connectedTo?:string;

    constructor(b:string, s: number, r:number, c:string){
        this.brand =b;
        this.size = s;
        this.resolution =r;
        this.connections = c;
    }
    
    turnOn =()=>{
        console.log(`a tv de marca ${this.brand} e tamanho ${this.size} e resolucao ${this.resolution} possui conecao ${this.connections} foi ligada`)
    }
}

const tv1 = new Tv ('samsumg', 29, 1080, 'hdmi')

tv1.turnOn()