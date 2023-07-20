import { StyleSheet } from "react-native";

export const stylesCryptoPrices = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: "#141114",
    paddingTop: 70,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 18,
    paddingLeft: 20,
  },
  cryptoContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#242424",
  },
  cryptoImage: {
    width: 30,
    height: 30,
  },
  cryptoName: {
    color: "#fff",
    fontSize: 16,
    marginLeft: 30,
    flex: 1,
  },
  cryptoPrice: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
