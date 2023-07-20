const nameRates = [
  { nombre: "Dolar Oficial", attr: "USD Oficial" },
  { nombre: "Dolar Blue", attr: "USD Blue" },
  { nombre: "Dolar Soja", attr: "USD Soja" },
  { nombre: "Dolar Contado con Liqui", attr: "USD CCL" },
  { nombre: "Dolar Bolsa", attr: "USD MEP" },
  { nombre: "Dolar turista", attr: "USD Turista" },
];

export const filterRatesUsdArs = (ratesFromApi) => {
  const filteredData = ratesFromApi.map((item) => {
    const matchedRate = nameRates.find(
      (rate) => rate.nombre === item.casa.nombre
    );
    if (matchedRate) {
      return { ...item, casa: { ...item.casa, nombre: matchedRate.attr } };
    } else {
      return null;
    }
  });

  return filteredData.filter((item) => item !== null);
};
