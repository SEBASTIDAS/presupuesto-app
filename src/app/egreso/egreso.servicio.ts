import { Egreso } from "./egreso.model";

export class EgresoServicio {
    
    egresos: Egreso[] = [
        new Egreso("Renta Dpto", 400000),
        new Egreso("Ropa", 200000)
    ];

    eliminar(egreso: Egreso) {
        const indice:number=this.egresos.indexOf(egreso);
        this.egresos.splice(indice,1);

    }
}