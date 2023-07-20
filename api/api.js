import axios from "axios";

const API_CRYPTOS =
  process.env.API_CRYPTOS || "https://api.coingecko.com/api/v3/coins/markets";
const API_DOLARSI =
  process.env.API_DOLARSI ||
  "https://www.dolarsi.com/api/api.php?type=valoresprincipales";

export const getDataCrypto = async () => {
  try {
    const response = await axios.get(API_CRYPTOS, {
      params: {
        vs_currency: "usd",
        order: "market_cap_desc",
        per_page: 10,
        page: 1,
      },
    });
    return response.data;
  } catch (e) {
    console.error(e);
  }
};

export const getPriceUSDARS = async () => {
  try {
    const response = await axios.get(API_DOLARSI);
    return response.data;
  } catch (e) {
    console.error(e);
  }
};
