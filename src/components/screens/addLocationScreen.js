import React from "react";
import { Container, Content, Footer, Header, Button, Text } from "native-base";

class AddLocationScreen extends React.Component {
  render() {
    return (
      <Container>
        <Header>
          <Text> Add Location Screen </Text>
        </Header>
        <Content>
          <Text>Sreen Area</Text>
        </Content>
        <Footer>
          <Button
            rounded
            light
            onPress={() =>
              this.props.navigation.navigate("LocationRangeScreen")}
          >
            <Text> Go to Add Location Range Page </Text>
          </Button>
        </Footer>
      </Container>
    );
  }
}
export default AddLocationScreen;
