import * as React from "react";
import { View, Text } from "react-native";
import { Header } from "react-native-elements";

export default class Instagram extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header
          backgroundColor={"#E60576"}
          centerComponent={{
            text: "Buzz App",
            style: { fontSize: 28, color: "white" },
          }}
        />
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 20,
              textAlign: "center",
              color: "blue",
              fontWeight: "bold",
            }}
          >
            INSTAGRAM
          </Text>
        </View>
      </View>
    );
  }
}