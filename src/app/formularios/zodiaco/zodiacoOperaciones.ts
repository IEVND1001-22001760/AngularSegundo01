export class HoroscopoChino{


    nombre:string="";
    imagen:string="";
    //calculoH!:number;
    //anio!:number;
    edadF!:number;



    public signo(anio: number): {nombre: string, imagen: string} | null {

        if (anio < 1900){
            return null;
        }

        const calculoH = (anio - 1900) % 12;

        let resultado: {nombre:string, imagen:string} | null = null;

        switch(calculoH){
            case 0:
                resultado = { nombre: 'Rata', imagen: 'https://confuciomag.com/wp-content/uploads/2016/01/06_horoscopo_chino_Rata.jpg'};
                break;
            case 1:
                resultado = { nombre: 'Buey', imagen: 'https://confuciomag.com/wp-content/uploads/2016/01/06_horoscopo_chino_Buey.jpg'};
                break;
            case 2: 
                resultado = { nombre: 'Tigre', imagen: 'https://confuciomag.com/wp-content/uploads/2016/01/06_horoscopo_chino_Tigre.jpg'};
                break;
            case 3:
                resultado = { nombre: 'Conejo', imagen: 'https://confuciomag.com/wp-content/uploads/2016/01/06_horoscopo_chino_Conejo.jpg'};
                break;
            case 4:
                resultado = { nombre: 'Dragón', imagen: 'https://confuciomag.com/wp-content/uploads/2016/01/06_horoscopo_chino_Dragon.jpg'};
                break;
            case 5: 
                resultado = { nombre: 'Serpiente', imagen: 'https://confuciomag.com/wp-content/uploads/2016/01/06_horoscopo_chino_Serpiente.jpg'};
                break;
            case 6:
                resultado = { nombre: 'Caballo', imagen: 'https://confuciomag.com/wp-content/uploads/2016/01/06_horoscopo_chino_Caballo.jpg'};
                break;
            case 7:
                resultado = {nombre: 'Cabra', imagen: 'https://confuciomag.com/wp-content/uploads/2016/01/06_horoscopo_chino_Cabra.jpg'};
                break;
            case 8: 
                resultado = { nombre: 'Mono', imagen: 'https://confuciomag.com/wp-content/uploads/2016/01/06_horoscopo_chino_Mono.jpg'};
                break;
            case 9:
                resultado = { nombre: 'Gallo', imagen: 'https://confuciomag.com/wp-content/uploads/2016/01/06_horoscopo_chino_Gallo.jpg'};
                break;
            case 10:
                resultado = { nombre: 'Perro', imagen: 'https://confuciomag.com/wp-content/uploads/2016/01/06_horoscopo_chino_Perro.jpg'};
                break;
            case 11:
                resultado = { nombre: 'Cerdo', imagen: 'https://confuciomag.com/wp-content/uploads/2016/01/06_horoscopo_chino_Cerdo.jpg'};
                break;
                default: resultado = null;
                break;
        }
        return resultado;
    }

    public edad ( anio: number): number{

        const anioA = 2025;
        return anioA - anio;
    }

    




    
    

}