export interface Aviso{
    id: String;
    titulo: String;
    nota:String;
    estado:String;
}

export interface Pago{
        id: String;
        nombre: String;
        nombre1: String;
        apellido: String;
        apellido1: String;
        email: String;
        periodo: String;
        telefono: String;
        password: String;
        plan: String;
        activador: String;
    
    }

    export interface Queja{
        id: number;
        posprobl: String;
        telf: number;
        mensage: String;
        estado: String;
    }