import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { BORDER_COLOR, PRIMARY_COLOR } from "../themes/colors";

class SingleCatagory extends React.Component {
  render() {
    const { catagory } = this.props;
    return (
      <View style={Styles.container}>
        <View style={Styles.subContainer}>
          <View style={Styles.thumbnail}>
            <Image
              source={{ uri: "https://facebook.github.io/react/logo-og.png" }}
              style={{ width: 70, height: 70 }}
            />
          </View>
          <View style={Styles.title}>
            <Text style={Styles.titleText}>
              {catagory.key}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

export default SingleCatagory;

const Styles = StyleSheet.create({
  container: {
    width: "50%",
    height: 150
  },
  subContainer: {
    flex: 1,
    margin: 10,
    padding: 10,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: BORDER_COLOR,
    backgroundColor: "white"
  },
  thumbnail: {
    flex: 5,
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center"
  },
  titleText: {
    fontSize: 25,
    color: PRIMARY_COLOR,
    fontWeight: "600"
  }
});
