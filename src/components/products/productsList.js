import React from 'react';
import { StyleSheet } from 'react-native';
import { Container, View, Text, Badge, Left, Right, Body } from 'native-base';
import { ACTIVITY_BACKGROUND, PRIMARY_COLOR } from '../../themes/colors';
class ProductList extends React.Component {
    render() {
        return (
            <Container style={{ backgroundColor: ACTIVITY_BACKGROUND }}>


                <View style={Styles.container}>
                    <Text>Tea:</Text>
                    <View style={Styles.productItem}>
                        <Left>
                            <Badge>
                                <Text>03</Text>
                            </Badge>
                        </Left>
                        <Body>
                            <Text>Tea name </Text>
                        </Body>
                        <Right>
                            <Text style={Styles.productItemText}>1 tea</Text>
                        </Right>
                    </View>
                    <View style={Styles.productItem}>
                        <Left>
                            <Badge>
                                <Text>03</Text>
                            </Badge>
                        </Left>
                        <Body>
                            <Text>Tea name </Text>
                        </Body>
                        <Right>
                            <Text style={Styles.productItemText}>1 tea</Text>
                        </Right>
                    </View>
                    <View style={Styles.productItem}>
                        <Left>
                            <Badge>
                                <Text>03</Text>
                            </Badge>
                        </Left>
                        <Body>
                            <Text>Tea name </Text>
                        </Body>
                        <Right>
                            <Text style={Styles.productItemText}>1 tea</Text>
                        </Right>
                    </View>
                </View>


            </Container>
        )
    }
}
export default ProductList;

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        borderRadius: 30,
        padding: 20,
        marginLeft: 30,
        marginRight: 30
    },
    productItem: {
        flexDirection: "row",
        height: 35,
        borderRadius: 5,
        padding: 5,
        backgroundColor: ACTIVITY_BACKGROUND,
        margin: 5
    },
    productItemText: {
        backgroundColor: PRIMARY_COLOR,
        borderRadius: 5,
        color: "white",
        padding: 5
    }
});



