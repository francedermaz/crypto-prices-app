import React from "react";
import { View, Text, FlatList, Image } from "react-native";
import { stylesCryptoPrices } from "../styles/cryptoPrices";

export default function CryptoPrices({cryptos}) {
  return (
    <View style={stylesCryptoPrices.container}>
      <Text style={stylesCryptoPrices.title}>Top Assets</Text>
      <FlatList
        data={cryptos}
        renderItem={({ item }) => (
          <View style={stylesCryptoPrices.cryptoContainer}>
            <Image
              source={{ uri: item.image }}
              style={stylesCryptoPrices.cryptoImage}
              resizeMode="contain"
            />
            <Text style={stylesCryptoPrices.cryptoName}>{item.name}</Text>
            <Text style={stylesCryptoPrices.cryptoPrice}>
              ${item.current_price}
            </Text>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}
