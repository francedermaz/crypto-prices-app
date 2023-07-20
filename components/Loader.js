import { Image, View } from "react-native";
import { stylesLoader } from "../styles/Loader";

const loadingGif = require("../assets/loadingPicture.gif");

export default function Loader() {
  return (
    <View style={stylesLoader.container}>
      <Image
        source={loadingGif}
        style={[stylesLoader.loadingGif]}
        resizeMode="contain"
      />
    </View>
  );
}
