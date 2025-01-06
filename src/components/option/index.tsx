import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity, TouchableOpacityProps, Text } from "react-native";
import { styles } from "./styles";
import { colors } from "@/src/styles/colors";

interface OptionProps extends TouchableOpacityProps {
  name: string;
  icon: keyof typeof MaterialIcons.glyphMap;
  variant?: "primary" | "secondary";
}

export function Option({
  name,
  icon,
  variant = "primary",
  ...props
}: OptionProps) {
  return (
    <TouchableOpacity style={styles.container} {...props}>
      <MaterialIcons
        name={icon}
        size={20}
        color={variant === "primary" ? colors.green[300] : colors.gray[400]}
      />
      <Text
        style={
          variant === "primary" ? styles.primaryTitle : styles.secondaryTitle
        }
      >
        {name}
      </Text>
    </TouchableOpacity>
  );
}
