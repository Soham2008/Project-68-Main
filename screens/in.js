import * as React from "react";
import { View, Text } from "react-native";
import { Header } from "react-native-elements";

export default class Instagram extends React.Component {

    render() {

        return (

            <View style={{ flex: 1 }}>
                <Header
                    backgroundColor={"#ffbfbd"}
                    centerComponent={

                        {

                            text: "Buzz App",
                            style: {

                                fontSize: 28,

                                color: "black"
                            }

                        }

                    }
                />
                <View
                    style={

                        {

                            flex: 1,
                            justifyContent: "center",
                            alignItems: "center",

                        }

                    }
                >
                    <Text
                        style={

                            {

                                fontSize: 20,
                                textAlign: "center",
                                color: "#745bc3",
                                fontWeight: "bold",

                            }

                        }
                    >

                        Instagram
          </Text>

                </View>

            </View>

        );

    }

}