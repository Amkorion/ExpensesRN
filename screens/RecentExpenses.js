import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../constants/Colors";
import ExpenseItem from "../components/ExpenseItem";

const RecentExpenses = () => {
  return (
    <View style={styles.mainContainer}>
      <ExpenseItem />
    </View>
  );
};

export default RecentExpenses;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.primary700,
  },
});
