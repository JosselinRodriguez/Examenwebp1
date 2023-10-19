
// Definición de Interfaces
export interface IFunction {
  id: number;
  name: string;
  returnType: string;
  detail: string;
  status: string;
  parameters: IParameters[];
}

export interface IParameters {
  id: number;
  description: string;
  type: string;
  defaultValue: string;
  FunctionId: string;
}

// Creación de un arreglo que obedece a las interfaces
const arreglo: IFunction[] = [
  {
    id: 1,
    name: "123",
    returnType: "PrimerUno",
    detail: "Detallesfuno",
    status: "eliminado";
    parameters: [
      {
        id: 11,
        description: "Descripciónuno",
        type: "Tipo1",
        defaultValue: "Valor1",
        FunctionId: "1",
      },
    ],
  },
  {
    id: 222,
    name: "FuncionDos",
    returnType: "TipoDos",
    detail: "Detallesdos",
    status: "eliminado";
    parameters: [
      {
        id: 22,
        description: "Descripción2",
        type: "Tipo2",
        defaultValue: "Valor2",
        FunctionId: "2",
      },
    ],
  },
  {
    id: 333,
    name: "FuncionTres",
    returnType: "TipoTres",
    detail: "Detallestres",
    status: "eliminado";
    parameters: [
      {
        id: 33,
        description: "Descripción3",
        type: "Tipo3",
        defaultValue: "Valor3",
        FunctionId: "3",
      },
    ],
  },
];
console.log(arreglo);


//crear y llamar  una funcion que reciba estos parametros:
//a. Arreglo de objectos del tipo de la interfaz propuesta 
//b. ID del elemento que desea eliminar logicamente

function eliminarElementoPorID(arreglo: IFunction[], idAEliminar: number): void
 {
  const elementoA3Eliminar = arreglo.find((elemento) => elemento.id === idAEliminar);

  if (elementoAEliminar) {
    elementoAEliminar.status = "eliminado";
    console.log(`Elemento con ID ${idAEliminar} eliminado lógicamente.`);
  } else {
    console.log(`No se encontró un elemento con ID ${idAEliminar}.`);
  }
}
// Llamar a la función para eliminar el elemento con ID 222 (por ejemplo)
eliminarElementoPorID(arreglo, 222);

// Verificar el estado actual del arreglo
console.log(arreglo);



