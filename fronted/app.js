const listaCuadros = document.getElementById("listaCuadros");

async function cargarCuadros() {

    try {

        const respuesta = await fetch("http://localhost:3000/api/cuadros");

        const cuadros = await respuesta.json();

        listaCuadros.innerHTML = "";

        cuadros.forEach(cuadro => {

            listaCuadros.innerHTML += `
                <div class="col-md-4 mb-4">

                    <div class="card h-100 shadow">

                        <img src="${cuadro.imagen}" class="card-img-top" alt="${cuadro.nombre}">

                        <div class="card-body">

                            <h5 class="card-title">${cuadro.nombre}</h5>

                            <p><strong>Autor:</strong> ${cuadro.autor}</p>

                            <p><strong>Categoría:</strong> ${cuadro.categoria}</p>

                            <p class="precio">RD$ ${cuadro.precio}</p>

                            <button class="btn btn-warning w-100 mb-2">
                                Editar
                            </button>

                            <button class="btn btn-danger w-100">
                                Eliminar
                            </button>

                        </div>

                    </div>

                </div>
            `;

        });

    } catch (error) {

        console.error(error);

        listaCuadros.innerHTML = `
            <div class="alert alert-danger">
                No se pudieron cargar los cuadros.
            </div>
        `;
    }

}

cargarCuadros();
