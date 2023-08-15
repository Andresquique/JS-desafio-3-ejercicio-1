
let ingresoTotal = 0;
let egresoTotal = 0;
let periodo;
let ingreso;
let egreso;

let suma = () =>{ 
    for (let index = 0; index < anual.length; index++){
        ingresoTotal += anual[index].ingreso;
        egresoTotal += anual[index].egreso; 
        }
}

let balance =()=>{
    if (ingresoTotal>egresoTotal){
        alert(`La empresa gano ${ingresoTotal-egresoTotal} dinero`);
    }
    else if (ingresoTotal<egresoTotal){
        alert(`La empresa perdio ${egresoTotal-ingresoTotal} dinero`);
    }
    else{
        alert("La empresa no gano ni perdio dinero");
    }
}

const anual = [
    {
        periodo :"Enero",
        ingreso : 1500,
        egreso : 1500
    },
    {
        periodo :"Febrero",
        ingreso : 2500,
        egreso : 2500
    },{
        periodo :"Marzo",
        ingreso : 84683,
        egreso : 1155
    },{
        periodo :"Abril",
        ingreso : 135353,
        egreso : 1533
    },{
        periodo :"Mayo",
        ingreso : 1535,
        egreso : 5434
    },
    {
        periodo :"Junio",
        ingreso : 4343354,
        egreso : 5434543
    },{
        periodo :"Julio",
        ingreso : 435453,
        egreso : 4543
    },{
        periodo :"Agosto",
        ingreso : 78351,
        egreso : 7816
    },{
        periodo :"Septiembre",
        ingreso : 1878,
        egreso : 95634
    },{
        periodo :"Octubre",
        ingreso : 48483,
        egreso : 9433
    },{
        periodo :"Noviembre",
        ingreso : 35483,
        egreso : 53133
    },{
        periodo :"Diciembre",
        ingreso : 3843,
        egreso : 348133
    },
];

suma();

alert(`Ingreso total anual $${ingresoTotal}`);
alert(`Egreso total anual $${egresoTotal}`);

balance();


