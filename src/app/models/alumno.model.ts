export class AlumnoModel{
    Id : number = 0;
    Nombre : string | null = "";
    Apellido : string | null = "";
    Email : string | null = "";
    FNacimiento : Date | null = new Date();

    constructor(Id:number, Apellido:string, Nombre:string, Email:string, FNacimiento:Date){
        this.Id = Id;
        this.Nombre = Nombre;
        this.Apellido = Apellido;
        this.Email = Email;
        this.FNacimiento = FNacimiento
    }    
}