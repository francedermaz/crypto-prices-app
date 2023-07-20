import React from "react";
import { View, Text, FlatList } from "react-native";
import { stylesUsdArsPrices } from "../styles/usdArsPrices";

export default function UsdArsPrices({ rates }) {
  return (
    <View style={stylesUsdArsPrices.container}>
      <Text style={stylesUsdArsPrices.title}>USD/ARS rates:</Text>
      <View style={stylesUsdArsPrices.tableHeader}>
        <Text style={stylesUsdArsPrices.headerTextName}>Name</Text>
        <Text style={stylesUsdArsPrices.headerTextBuy}>Buy</Text>
        <Text style={stylesUsdArsPrices.headerTextSell}>Sell</Text>
      </View>
      <FlatList
        data={rates}
        renderItem={({ item }) => {
          const { casa } = item;
          return (
            <View style={stylesUsdArsPrices.ratesContainer}>
              <Text style={stylesUsdArsPrices.rateName}>{casa.nombre}</Text>
              <Text style={stylesUsdArsPrices.ratePrice}>
                {casa.compra === "No Cotiza" ? "-" : `$${casa.compra}`}
              </Text>
              <Text style={stylesUsdArsPrices.ratePrice}>
                {casa.venta === "No Cotiza" ? "-" : `$${casa.venta}`}
              </Text>
            </View>
          );
        }}
        keyExtractor={(item) => item.casa.nombre}
      />
    </View>
  );
}
