import React from 'react';
import { Header, Left, Right, Content, H3, Icon } from 'native-base';

class SimpleHeader extends React.Component {
    render() {
        return (<Header>
            <Left>
                <Icon type="FontAwesome" name="angle-left" style={{ color: "white" }} />
            </Left>
            <Content>
                <H3>Add Catagories </H3>
            </Content>
            <Right>

            </Right>
        </Header>
        );
    }
}
export default SimpleHeader;