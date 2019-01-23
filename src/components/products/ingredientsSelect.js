import React from "react";
import { StyleSheet, View } from "react-native";
import { PRIMARY_COLOR, ACTIVITY_BACKGROUND } from "../../themes/colors";
import { Switch } from "react-native";
import {
  Container,
  Header,
  Footer,
  Content,
  Text,
  Button,
  Item,
  Icon,
  Input
} from "native-base";

class IngredientsSelect extends React.Component {
  state = {};

  render() {
    return (
      <Container>
        <Header style={Styles.header}>
          <View style={Styles.headerComponent}>
            <Text style={Styles.txtHeader}>Ingredients</Text>
            <Switch value={false} style={Styles.switchHeader} />
          </View>
        </Header>

        <Content>
          <Item>
            <Icon name="search" />
            <Input placeholder="Search Ingridients" />
          </Item>
          <Text>Contents here </Text>
        </Content>

        <Footer style={Styles.footer}>
          <Button block iconLeft style={Styles.btnFinish}>
            <Icon name="home" style={{ color: PRIMARY_COLOR }} />
            <Text style={Styles.btnFinishText}>Finish</Text>
          </Button>
        </Footer>
      </Container>
    );
  }
}
export default IngredientsSelect;

const Styles = StyleSheet.create({
  header: {
    backgroundColor: ACTIVITY_BACKGROUND
  },
  headerComponent: {
    flex: 1
  },
  txtHeader: {
    flex: 5
  },
  switchHeader: {
    flex: 2
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
