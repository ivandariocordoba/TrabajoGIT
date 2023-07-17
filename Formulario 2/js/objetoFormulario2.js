$(document).ready(function() {
    const Pedido = {
        pedidos: [],

        agregarPedido: function(pedido, cantidad, producto, valor) {
            var total = cantidad * valor;

            var formatter = new Intl.NumberFormat("es-CO", {
                style: "currency",
                currency: "COP",
                minimumFractionDigits: 0
            });
            var valorMoneda = formatter.format(valor);
            var totalMoneda = formatter.format(total);

            var row =
                "<tr><td>" +
                pedido +
                "</td><td>" +
                cantidad +
                "</td><td>" +
                producto +
                "</td><td>" +
                valorMoneda +
                "</td><td>" +
                totalMoneda +
                "</td></tr>";

            $("#listadoPedidos").append(row);

            $("#pedido").val("");
            $("#cantidad").val("");
            $("#producto").val("");
            $("#valor").val("");

            this.pedidos.push({
                pedido: pedido,
                cantidad: cantidad,
                producto: producto,
                valor: valor,
                total: total
            });

            this.actualizarTotal();
        },

        actualizarTotal: function() {
            var totalProductos = this.pedidos.reduce((sum, pedido) => sum + pedido.total, 0);

            var formatter = new Intl.NumberFormat("es-CO", {
                style: "currency",
                currency: "COP",
                minimumFractionDigits: 0
            });
            var totalMoneda = formatter.format(totalProductos);

            $("#totalProductos").text(totalMoneda);
        }
    };

    $("#formulario2").submit(function(event) {
        event.preventDefault();
        var pedido = $("#pedido").val();
        var cantidad = parseInt($("#cantidad").val());
        var producto = $("#producto").val();
        var valor = parseFloat($("#valor").val());

        Pedido.agregarPedido(pedido, cantidad, producto, valor);
    });
});