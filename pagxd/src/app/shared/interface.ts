export interface Aviso{
    id: String;
    titulo: String;
    nota:String;
}
export interface Usuario{
    _id: String;
    name: String;
    apellido: String;
    email: String;
    telefono: number;
    plan:string;
}
export interface Queja{
    id: number;
    telf: number;
    mensage: String;
}