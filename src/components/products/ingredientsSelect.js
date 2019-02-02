import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { PRIMARY_COLOR, ACTIVITY_BACKGROUND } from "../../themes/colors";

import {
  Container,
  Content,
  Text,
  Badge,
  Item,
  Icon,
  Input,
  CheckBox,
  H3
} from "native-base";
import RawItem from "./rawItemSelect";

class IngredientsSelect extends React.Component {
  state = {
    data: [
      { key: "1", text: "cheeni", checked: false },
      { key: "2", text: "patti", checked: true },
      { key: "3", text: "milk", checked: true },
      { key: "4", text: "powder milk", checked: false },
      { key: "5", text: "ilaichi", checked: false },
      { key: "6", text: "adrak", checked: true },
      { key: "7", text: "darcheeni", checked: false },]
  }

  render() {
    return (
      <Container style={this.props.style}>

        <Content scrollEnabled={false}>



          {/* <Badge><Text>05</Text></Badge> */}
          <Item style={Styles.row0}>
            <Icon name="search" />
            <Input placeholder="Search Ingridients" />
          </Item>


          <View style={Styles.row1}>

            <FlatList
              data={this.state.data}
              keyExtractor={(item) => item.key}
              renderItem={({ item }) => <RawItem raw={item} />}
            />

            {/* <RawItem id={4} raw={{ text: "cheeni", checked: true }} />
            <RawItem id={1} raw={{ text: "cheeni", checked: true }} /> */}

          </View>

        </Content>

        {/* <Footer style={Styles.footer}>
          <Button block iconLeft style={Styles.btnFinish}>
            <Icon name="home" style={{ color: PRIMARY_COLOR }} />
            <Text style={Styles.btnFinishText}>Finish</Text>
          </Button>
        </Footer> */}
      </Container>
    );
  }
}
export default IngredientsSelect;

const Styles = StyleSheet.create({


  row0: {
    flex: 1,
    height: 50
  },

  row1: {
    flex: 1,

  },
  rawItem: {
    flex: 1,
    flexDirection: "row",
    height: 35,
    borderRadius: 5,
    padding: 5,
    backgroundColor: ACTIVITY_BACKGROUND,
    margin: 5
  },
  rawItemText: {
    flex: 8,
  },
  rawItemCB: {
    flex: 1
  },














  footer: {
    backgroundColor: "transparent",
    height: 80
  },
  btnFinish: {
    backgroundColor: ACTIVITY_BACKGROUND,

    marginRight: 20,
    marginLeft: 20,
    marginBottom: 20,
    borderRadius: 30,
    paddingLeft: 30,
    paddingRight: 30,
    height: 60
  },
  btnFinishText: {
    color: PRIMARY_COLOR,
    fontSize: 30
  }
});
