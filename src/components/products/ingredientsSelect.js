import React from "react";
import { Text, View, TextInput } from "react-native";

class IngredientsSelect extends React.Component {
  render() {
    return (
      <View>
        <View>
          <Text>Enter Name of Catagory</Text>
          <TextInput
            placeholder={"Ex : Tea "}
            value={this.state.catagoryName}
            onChangeText={text => this.setState({ catagoryName: text })}
          />
        </View>

        <View>
          <View>
            <View>
              <Text>Ingredients:</Text>
              <Text>5</Text>
            </View>
            <View>
              <View>
                <TextInput
                  placeholder={"Ex : Sugar "}
                  value={this.state.ingredientName}
                  onChangeText={text => this.setState({ ingredientName: text })}
                />
              </View>
              <View>
                <View>
                  <Text>Ingredient it is </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
export default IngredientsSelect;
