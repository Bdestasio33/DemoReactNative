import { ReactNode } from "react";
import { ViewStyle } from "react-native";
import { View, StyleSheet } from "react-native";

interface Props<T> {
  children: ReactNode;
  style?: ViewStyle;
}

function Card<T>(props: Props<T>) {
  return <View style={[styles.container, props.style]}>{props.children}</View>;
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "white",
    shadowColor: "#3d3d3d",
    shadowOffset: { width: 10, height: 10 },
    shadowOpacity: 0.5,
    borderRadius: 12,
    alignItems: "center",
  },
});

export default Card;
