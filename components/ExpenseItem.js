import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../constants/Colors";

const ExpenseItem = () => {
  return (
    <View style={styles.main}>
      <View>
        <Text style={styles.title}>A book</Text>
        <Text style={styles.date}>30-01-2023</Text>
      </View>
      <View style={styles.priceCont}>
        <Text style={styles.amount}>18.44$</Text>
      </View>
    </View>
  );
};

export default ExpenseItem;

const styles = StyleSheet.create({
  main: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 25,
    backgroundColor: Colors.primary500,
    borderRadius: 8,
    padding: 10,
  },
  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: "16",
  },
  date: {
    color: Colors.secondary300,
    fontSize: "13",
    fontStyle: "italic",
  },
  priceCont: {
    backgroundColor: "white",
    height: 50,
    width: 80,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  amount: {
    fontWeight: "bold",
    fontSize: "16",
  },
});
