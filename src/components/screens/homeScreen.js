import React from "react";
import {
  Container,
  Header,
  Content,
  Footer,
  FooterTab,
  Button,
  Icon,
  Text,
  Left,
  Body,
  Right,
  Title,
  Segment
} from "native-base";

class HomeScreen extends React.Component {
  render() {
    return (
      <Container>
        <Content>
          <Container>
            <Header hasSegment>
              <Left>
                <Button transparent>
                  <Icon name="arrow-back" />
                </Button>
              </Left>
              <Body>
                <Title>Orders</Title>
              </Body>
              <Right>
                <Button transparent>
                  <Icon name="search" />
                </Button>
              </Right>
            </Header>
            <Segment>
              <Button first>
                <Text>New </Text>
              </Button>
              <Button>
                <Text>Accepted</Text>
              </Button>
              <Button last active>
                <Text>Dispatched</Text>
              </Button>
            </Segment>
            <Content padder>
              <Text>Awesome segment</Text>
            </Content>
          </Container>
        </Content>
        <Footer>
          <FooterTab>
            <Button vertical>
              <Icon name="apps" />
              <Text>Home</Text>
            </Button>
            <Button vertical>
              <Icon name="camera" />
              <Text>Guide</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
export default HomeScreen;
