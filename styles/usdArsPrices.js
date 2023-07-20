import { StyleSheet } from "react-native";

export const stylesUsdArsPrices = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: "#141114",
    paddingTop: 70,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#fff",
    marginLeft: 20,
  },
  tableHeader: {
    flexDirection: "row",
    alignItems: "flex-start",
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#242424",
  },
  ratesContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#242424",
  },
  headerTextName: {
    color: "#fff",
    fontSize: 16,
    flex: 1,
  },
  headerTextBuy: {
    color: "#fff",
    fontSize: 16,
    flex: 1,
    paddingLeft: 100
  },
  headerTextSell: {
    color: "#fff",
    fontSize: 16,
    flex: 0,
  },
  rateName: {
    color: "#fff",
    fontSize: 16,
    flex: 2,
    textAlign: "left",
  },
  ratePrice: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    flex: 1,
    textAlign: "right",
  },
});
