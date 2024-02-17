import React, { ReactElement, useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Text, Input, Button, FAB } from "@rneui/base";
import { solveEquation } from "./actions/SolveEquation";
import Card from "../shared/Card";

const CalculatorScreen = () => {
  const [equation, setEquation] = useState("");
  const [solutions, setSolutions] = useState<ReactElement[]>([]);

  const handleClearSolutions = () => {
    setSolutions([]);
  };

  const createSolutionCard = async () => {
    const response = await solveEquation(equation);

    setSolutions([
      ...solutions,
      <View key={solutions.length + 1} style={{ width: "90%" }}>
        <Card style={{ marginTop: 10 }}>
          <Text style={{ fontSize: 19, fontWeight: "bold" }}>
            {response.input}
          </Text>
          <Text>Answer: {response.solution}</Text>
        </Card>
      </View>,
    ]);
  };

  return (
    <View style={styles.wrapper}>
      <ScrollView contentContainerStyle={styles.main}>
        <Card>
          <Text style={styles.cardComponentWidth}>
            Please input a math equation to solve
          </Text>
          <Input
            keyboardType="numbers-and-punctuation"
            placeholder="2+2"
            textAlign="center"
            inputContainerStyle={styles.cardComponentWidth}
            onChange={(x) => setEquation(x.nativeEvent.text)}
            onEndEditing={() => createSolutionCard()}
          />
          <Button onPress={() => createSolutionCard()}>Submit</Button>
        </Card>
        <View style={styles.solutionContainer}>{solutions.reverse()}</View>
      </ScrollView>
      <FAB
        onPress={() => handleClearSolutions()}
        visible
        placement="right"
        title="Clear Solutions"
        titleStyle={styles.fabTitle}
        color="#f55d42"
        upperCase
        icon={{ name: "close", color: "white" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    width: "100%",
    height: "100%",
    paddingBottom: 20,
  },
  solutionContainer: { width: "100%", height: "100%", alignItems: "center" },
  main: {
    alignItems: "center",
    marginTop: 20,
  },
  cardComponentWidth: { width: "90%" },
  fabTitle: { fontSize: 15 },
});

export default CalculatorScreen;
