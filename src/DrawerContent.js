import { TabRouter } from '@react-navigation/native';
import React, { Component } from 'react';
import { Dimensions, View, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height
const DrawerContent = (navigation) => {
    console.log("navigation",navigation)
    return (
        <View style={{
            flex: 1,
            backgroundColor: "green",

        }}>
            <View style={{
                padding: 20,
                marginTop: 30,
                flexDirection: "row",
                height: 100,
                alignItems: "center",
                // backgroundColor: "red"
                // justifyContent:"center"
            }}>
                <Image source={{ uri: "https://loveshayariimages.in/wp-content/uploads/2022/05/Best-Whatsapp-Dp-Profile-For-Boy-Images-photo-2021.gif" }} style={{ width: 50, height: 50, borderRadius: 25 }} />
                <Text style={{
                    marginHorizontal: 20,
                    // alignItems:"center"

                    // textAlign:"center"
                }}>Testing User</Text>
            </View>



            <View style={{ flex: 0.5,flexDirection: "column", justifyContent: "space-evenly",width:width/1.5 }}>

                <TouchableOpacity>
                    <Text style={{ textAlign: "center", color: "white" }}>Home</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={{ textAlign: "center" }}>Setting</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={{ textAlign: "center" }}>Language</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={{ textAlign: "center" }}>Terms</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={{ textAlign: "center", marginTop: 29 }}>Logout</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default DrawerContent;