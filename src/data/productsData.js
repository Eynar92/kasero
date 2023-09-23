export const productsData = [
    {
        id: 1,
        nombre: "Bobinas",
        materiales: [
            {
                id: 1,
                material: "AISI 430 de 1.2m",
                opciones: [
                    { id: 1, descripcion: "0.4mm Brillo", precio: "125Bs/metro lineal", mejorvendido: 'false' },
                    { id: 2, descripcion: "0.6mm Brillo", precio: "180Bs/metro lineal", mejorvendido: 'false' },
                    { id: 3, descripcion: "0.8mm Brillo", precio: "235Bs/metro lineal", mejorvendido: 'true' },
                    { id: 4, descripcion: "0.8mm Esmerilado", precio: "295Bs/metro lineal", mejorvendido: 'false' }
                ]
            }
        ]
    },
    {
        id: 2,
        nombre: "Tubos Cuadrados",
        materiales: [
            {
                id: 5,
                material: "AISI 304",
                opciones: [
                    { id: 5, descripcion: "30x30x1.5mm", mejorvendido: 'false' },
                    { id: 6, descripcion: "40x40x1.5mm", mejorvendido: 'false' }
                ]
            }
        ]
    },
    {
        id: 3,
        nombre: "Tubo Circular",
        materiales: [
            {
                id: 7,
                material: "AISI 201 de Espesor 1.2mm",
                opciones: [
                    { id: 7, descripcion: "Ø16mm", mejorvendido: 'false' },
                    { id: 8, descripcion: "Ø22mm", mejorvendido: 'false' },
                    { id: 9, descripcion: "Ø25mm", mejorvendido: 'false' }
                ]
            }
        ]
    },
    {
        id: 4,
        nombre: "Plancha",
        materiales: [
            {
                id: 10,
                material: "AISI 304",
                opciones: [
                    { id: 10, descripcion: "3000x1500x1.2mm", mejorvendido: 'false' },
                    { id: 11, descripcion: "3000x1500x1.5mm", mejorvendido: 'false' }
                ]
            }
        ]
    }
];