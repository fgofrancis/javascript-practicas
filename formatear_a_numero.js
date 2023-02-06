// var formatNumber= {
//   separador: ",", // separador para los miles
//   sepDecimal: ".", // separador para los decimales
//   formatear: function (num) {
//     num += "";
//     var splitStr = num.split(".");
//     var splitLeft = splitStr[0];
//     var splitRight = splitStr.length > 1 ? this.sepDecimal + splitStr[1] : "";
//     var regx = /(\d+)(\d{3})/;
//     while (regx.test(splitLeft)) {
//       splitLeft = splitLeft.replace(regx, "$1" + this.separador + "$2");
//     }
//     return this.simbol + splitLeft + splitRight;
//   },
//   new: function (num, simbol) {
//     this.simbol = simbol || "";
//     return this.formatear(num);
//   },
// };
// // console.log(formatNumber.new(123456779.18, "RD$")) // retorna "$123.456.779,18"
// console.log(formatNumber.new(1234.18, "RD$")) // retorna "$123.456.779,18"

// const formato = new Intl.NumberFormat('es-ES');
// const numeros = [ 123, 1234, 12345, 12345.678, 12345678.9 ];

// numeros.forEach(numero =>
//     console.log(`${numero} -> ${formato.format(numero)}`)
// );

var numero = 1234567.89;
var numeroFormateado = numero.toLocaleString("en-EN", {style: 'decimal', 
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2});
console.log(numeroFormateado)