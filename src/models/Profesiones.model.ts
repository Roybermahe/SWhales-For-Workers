export class Profesiones {
    private ID_KEY:     number;
    Titulo:             string;
    Descripcion:        string;
    Categoria?:         number; // categoria sera opcional si la profesion es escrita por el mismo usuario
    Estado:             boolean;
    Observacion:        string;
    
    constructor(){}
    
    public get Key() : number {
        return this.ID_KEY;
    }
    
    public set key(ID_KEY : number) {
        this.ID_KEY = ID_KEY;
    }
    
}