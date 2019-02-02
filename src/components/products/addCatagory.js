import React from "react";
import { View, Text, StyleSheet, Switch, TextInput } from "react-native";
import { PRIMARY_COLOR } from "../../themes/colors";
import Add from "./add";
import IngredientsSelect from "./ingredientsSelect";
import { Item, Label, Input } from "native-base";

class AddCatagory extends React.Component {
  state = {
    enableEditing: false,
    catagoryName: "",
    ingredientName: ""
  };

  render() {
    return (
      <View style={Styles.container}>
        <View id={1} style={Styles.row0}>
          <View style={Styles.row0TextC}>
            <Text style={Styles.row0Text}>Enable Customization </Text>
          </View>
          <Switch
            style={Styles.row0Switch}
            value={this.state.enableEditing}
            thumbColor={PRIMARY_COLOR}
            onValueChange={value => this.setState({ enableEditing: value })}
          />
        </View>
        <View style={Styles.catagoryName}>
          <Item >
            <Input />
          </Item>
        </View>


        <IngredientsSelect id={2} style={Styles.row1} />
        <Add id={3} style={Styles.row2} text={"Finish"} />
      </View>
    );
  }
}
export default AddCatagory;

const Styles = StyleSheet.create({
  container: {
    flex: 1
  },
  row0: {
    height: 50,
    flexDirection: "row"
  },
  row0TextC: {
    flex: 4,
    justifyContent: "center"
  },
  row0Text: {
    color: PRIMARY_COLOR,
    fontSize: 25,
    fontWeight: "500"
  },
  row0Switch: {
    flex: 1,
    justifyContent: "flex-start"
  },

  catagoryName: {
    height: 70,
    backgroundColor: "white",
    borderRadius: 30,
    padding: 20,
    marginTop: 20,
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 10
  },

  row1: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: 30,
    padding: 20,
    marginLeft: 30,
    marginRight: 30
  },
  row1Catagory: {
    height: 100
  },
  row1Ingredients: {
    flex: 1
  },
  row2: {
    height: 100
  }
});
