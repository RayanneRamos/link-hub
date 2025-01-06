import { colors } from "@/src/styles/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { Pressable, PressableProps, Text } from "react-native";
import { styles } from "./styles";

interface CategoryProps extends PressableProps {
  name: string;
  icon: keyof typeof MaterialIcons.glyphMap;
}

export function Category({ name, icon, ...props }: CategoryProps) {
  return (
    <Pressable style={styles.container} {...props}>
      <MaterialIcons name={icon} size={16} color={colors.gray[400]} />
      <Text style={styles.name}>{name}</Text>
    </Pressable>
  );
}
