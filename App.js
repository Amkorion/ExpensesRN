import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ManageExpense from "./screens/ManageExpense";
import AllExpenses from "./screens/AllExpenses";
import RecentExpenses from "./screens/RecentExpenses";
import { Entypo, Ionicons } from "@expo/vector-icons";
import Colors from "./constants/Colors";

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

function ExpensesOverwiew() {
  return (
    <BottomTab.Navigator
      screenOptions={{
        tabBarActiveTintColor: Colors.secondary500,
        tabBarActiveBackgroundColor: Colors.primary500,
        tabBarInactiveBackgroundColor: Colors.primary500,
        headerStyle: { backgroundColor: Colors.primary500 },
        headerTintColor: "white",
        headerRight: ({ color, size }) => (
          <Entypo
            style={styles.plus}
            name="plus"
            size={32}
            color="white"
            onPress={() => console.log("pressed!")}
          />
        ),
      }}
    >
      <BottomTab.Screen
        name="Recent Expenses"
        component={RecentExpenses}
        options={{
          tabBarLabelStyle: { fontSize: 14, color: Colors.secondary300 },
          tabBarLabel: "Recent",
          tabBarIcon: (Recent) => (
            <Ionicons
              name="card-outline"
              size={30}
              color={Recent.focused ? Colors.secondary500 : Colors.secondary300}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="All Expenses"
        component={AllExpenses}
        options={{
          tabBarLabelStyle: { fontSize: 14, color: Colors.secondary300 },

          tabBarLabel: "All Expenses",
          tabBarIcon: (AllExpenses) => (
            <Ionicons
              name="calendar-sharp"
              size={30}
              color={
                AllExpenses.focused ? Colors.secondary500 : Colors.secondary300
              }
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: Colors.secondary500 },
          }}
        >
          <Stack.Screen
            name="BottomTab"
            component={ExpensesOverwiew}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="ManageExpense" component={ManageExpense} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  plus: {
    paddingRight: 10,
  },
});
