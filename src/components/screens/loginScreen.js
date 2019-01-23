import React from "react";
import { Container, Content, Footer, Header, Button, Text } from "native-base";

class LoginScreen extends React.Component {
  render() {
    return (
      <Container>
        <Header>
          <Text> Auth Panel </Text>
        </Header>
        <Content>
          <Text>Sreen Area</Text>
        </Content>
        <Footer>
          <Button
            rounded
            light
            onPress={() => this.props.navigation.navigate("AddLocationScreen")}
          >
            <Text> Go to Add Location Screen </Text>
          </Button>
        </Footer>
      </Container>
    );
  }
}
export default LoginScreen;
