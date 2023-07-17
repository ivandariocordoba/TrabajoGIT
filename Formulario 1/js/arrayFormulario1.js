$(document).ready(function() {
    var categorias = {};

    $("#formulario1").submit(function(event) {
        event.preventDefault();
        var titulo = $("#titulo").val();
        var categoria = $("#categoria").val();

        if (!categoria) {
            alert("Por favor, selecciona una categoría.");
            return;
        }

        if (!categorias[categoria]) {
            categorias[categoria] = [];
        }
        categorias[categoria].push(titulo);

        $("#listadoCategorias").empty();
        for (const [cat, titulos] of Object.entries(categorias)) {
            for (const titulo of titulos) {
                $("#listadoCategorias").append("<li>" + titulo + " - " + cat + "</li>");
            }
        }

        $("#titulo").val("");
        $("#categoria").val("");
    });

    // Checkbox change event handler
    $("input[type='checkbox']").on("change", function() {
        var categoria = $(this).val();
        if ($(this).is(":checked")) {
            $("#categoria").val(categoria);
            if (!categorias[categoria]) {
                categorias[categoria] = [];
            }
        } else {
            $("#categoria").val("");
            if (categorias[categoria]) {
                delete categorias[categoria];
            }
        }

        $("#listadoCategorias").empty();
        for (const [cat, titulos] of Object.entries(categorias)) {
            for (const titulo of titulos) {
                $("#listadoCategorias").append("<li>" + titulo + " - " + cat + "</li>");
            }
        }
    });
});