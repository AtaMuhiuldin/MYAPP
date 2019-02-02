import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { Container, Content, H3, CheckBox } from 'native-base';
import { ACTIVITY_BACKGROUND } from '../../themes/colors';

class RawItem extends React.Component {

    render() {
        // const {raw} = this.props;
        return (
            <View style={Styles.rawItem}>
                <View style={Styles.rawItemText}>
                    <H3>{this.props.raw ? this.props.raw.text : "Name"}</H3>
                </View>
                <View style={Styles.rawItemCB}>
                    <CheckBox checked={this.props.raw ? this.props.raw.checked : false} />
                </View>
            </View>
        );
    }
}
export default RawItem;

const Styles = StyleSheet.create({
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

});