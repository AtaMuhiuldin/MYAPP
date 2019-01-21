import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import SingleCatagory from "./singleCatagory";
import { ACTIVITY_BACKGROUND } from "../themes/colors";
import Add from "./add";

class Catagories extends React.Component {
  state = {
    catagories: [
      { id: 1, key: "Tea" },
      { id: 2, key: "Cofee" },
      { id: 3, key: "Juice" },
      { id: 4, key: "Water" },
      { id: 5, key: "Cake" },
      { id: 6, key: "Cookies" },
      { id: 7, key: "Cofee" }
    ]
  };

  render() {
    return (
      <View style={Styles.container}>
        <FlatList
          style={Styles.container}
          data={this.state.catagories}
          renderItem={({ item }) =>
            <SingleCatagory _id={item.id} catagory={item} />}
          numColumns={2}
        />
        <Add text={"Add Catagory"} style={Styles.btbAddStyle} />
      </View>
    );
  }
}

export default Catagories;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ACTIVITY_BACKGROUND
  },
  btnAddStyle: {
    height: 180,
    flex: 1
  }
});
