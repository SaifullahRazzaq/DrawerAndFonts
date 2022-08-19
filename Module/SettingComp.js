import React from 'react';
import { Image, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
const SettingComp = ({ title, ImageUrl, onPress }) => {
    return (
        <View style={{ flex: 1, paddingHorizontal: 20 }} >
            <TouchableOpacity onPress={onPress}>
                <View style={Styles.Container}>
                    <View style={Styles.Row}>
                        <Image source={ImageUrl} style={Styles.LeftImage} />
                        <Text style={Styles.title}>{title}</Text>
                    </View>

                    {/* <View style={Styles.RightContainer}>
                        <Image source={Images.Arrow} style={Styles.Setting.RightImage} />
                    </View> */}
                </View>
            </TouchableOpacity>
        </View>

    )
}
export default SettingComp;

const Styles = StyleSheet.create({
    Container: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        borderRadius: 10,
        alignSelf: "center",
        backgroundColor: "white",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        height: 60
        // Metrix.VerticalSize(50)
    },
    Account: {
        // fontFamily: Font.Bold,
        fontSize: 12,
        // Metrix.customFontSize(22),
        top: 50,
        // Metrix.VerticalSize(50),
        marginHorizontal: 20,
        // Metrix.HorizontalSize(20),
        color: 'Black'
        // Colors.Black
    },
    Row: {
        flexDirection: "row",
        alignItems: "center",
        flex: 1,
        marginHorizontal: 10
        // Metrix.HorizontalSize(10)
    },
    LeftImage: {
        width: 22,
        // Metrix.HorizontalSize(22),
        height: 22,
        // Metrix.VerticalSize(22),
        resizeMode: "contain"
    },
    title: {
        color: "Black",
        // Colors.Black,
        fontSize: 15,
        // Metrix.customFontSize(15),
        fontFamily: "Roboto-Black",
        marginHorizontal: 5
        // Metrix.HorizontalSize(5)
    },
    RightContainer: {
        marginHorizontal: 10,
        // Metrix.HorizontalSize(10),
        alignItems: "center",
        justifyContent: "center"
    },
    RightImage: {
        width: 20,
        // Metrix.HorizontalSize(20),
        height: 20,
        // Metrix.VerticalSize(20),
        justifyContent: "center",
        resizeMode: "contain"
    }
})