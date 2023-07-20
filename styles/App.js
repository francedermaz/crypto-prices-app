import { StyleSheet } from "react-native";

export const stylesApp = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A171A",
    justifyContent: "flex-end",
  },
  reloadOption: {
    position: "absolute",
    top: 10,
    right: 0,
    width: 40,
    height: 40,
    zIndex: 9999,
  },
  reloadImage: {
    paddingTop: 80,
    width: 20,
    height: 20,
  },
  navbar: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    backgroundColor: "#1A171A",
    borderTopWidth: 1,
    borderTopColor: "#000000",
  },
  navbarOption: {
    paddingHorizontal: 25,
    paddingVertical: 10,
  },
  selectedOption: {
    borderBottomWidth: 2,
    borderBottomColor: "#84A7A1",
  },
  optionText: {
    fontSize: 16,
    color: "#fff",
  },
  optionImage: {
    width: 30,
    height: 30,
  },
  selectedOptionText: {
    color: "blue",
  },
  selectedOptionImage: {
    tintColor: "#84A7A1",
  },
});
