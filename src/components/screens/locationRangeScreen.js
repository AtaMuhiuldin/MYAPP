import React from "react";
import { Container, Content, Footer, Header, Button, Text } from "native-base";
class LocationRangeScreen extends React.Component {
  render() {
    return (
      <Container>
        <Header>
          <Text> Add Location Range </Text>
        </Header>
        <Content>
          <Text>Sreen Area</Text>
        </Content>
        <Footer>
          <Button
            rounded
            light
            onPress={() => this.props.navigation.navigate("HomeScreen")}
          >
            <Text> Go to Add Home Screen </Text>
          </Button>
        </Footer>
      </Container>
    );
  }
}
export default LocationRangeScreen;
