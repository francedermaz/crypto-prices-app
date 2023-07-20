import React, { useEffect, useState } from "react";
import { View, TouchableOpacity, Image } from "react-native";
import CryptoPrices from "./components/cryptoPrices";
import UsdArsPrices from "./components/usdArsPrices";
import { stylesApp } from "./styles/App";
import Loader from "./components/Loader";
import { getDataCrypto, getPriceUSDARS } from "./api/api";
import { filterRatesUsdArs } from "./utils/helpers";

const analyticsImg = require("./assets/analytics.png");
const usdImg = require("./assets/usd.png");
const reloadOption = require("./assets/reload.png");

export default function App() {
  const [cryptos, setCryptos] = useState([]);
  const [rates, setRates] = useState([]);
  const [selectedOption, setSelectedOption] = useState("crypto");
  const [isLoading, setIsLoading] = useState(true);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const fetchPrices = async () => {
    try {
      const [cryptoResponse, usdArsResponse] = await Promise.all([
        getDataCrypto(),
        getPriceUSDARS(),
      ]);

      setCryptos(cryptoResponse);
      setRates(filterRatesUsdArs(usdArsResponse));
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPrices();
  }, []);

  return (
    <View style={stylesApp.container}>
      <TouchableOpacity
        onPress={() => fetchPrices()}
        style={stylesApp.reloadOption}
      >
        <Image
          source={reloadOption}
          style={stylesApp.reloadImage}
          resizeMode="contain"
        />
      </TouchableOpacity>
      {selectedOption === "crypto" ? (
        <CryptoPrices cryptos={cryptos} />
      ) : (
        <UsdArsPrices rates={rates} />
      )}

      <View style={stylesApp.navbar}>
        <TouchableOpacity
          style={[
            stylesApp.navbarOption,
            selectedOption === "crypto" && stylesApp.selectedOption,
          ]}
          onPress={() => handleOptionChange("crypto")}
        >
          <Image
            source={analyticsImg}
            style={[
              stylesApp.optionImage,
              selectedOption === "crypto" && stylesApp.selectedOptionImage,
            ]}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            stylesApp.navbarOption,
            selectedOption === "usdToArs" && stylesApp.selectedOption,
          ]}
          onPress={() => handleOptionChange("usdToArs")}
        >
          <Image
            source={usdImg}
            style={[
              stylesApp.optionImage,
              selectedOption === "usdToArs" && stylesApp.selectedOptionImage,
            ]}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
      {isLoading ? <Loader /> : <></>}
    </View>
  );
}
