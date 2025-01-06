import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "@/src/styles/colors";
import { Categories } from "@/src/components/categories";
import { Link } from "@/src/components/link";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("../../assets/logo.png")} style={styles.logo} />
        <TouchableOpacity activeOpacity={0.8}>
          <MaterialIcons name="add" size={32} color={colors.green[300]} />
        </TouchableOpacity>
      </View>
      <Categories />
      <Link
        name="Rocketseat"
        url="https://www.rocketseat.com.br"
        onDetails={() => console.log("clicou")}
      />
    </View>
  );
}
