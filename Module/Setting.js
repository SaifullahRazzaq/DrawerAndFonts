import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'
import SettingComp from './SettingComp';
// import { Styles } from '../Styles';

const AccountSetting = ({ navigation }) => {

    return (
        <View style={{ backgroundColor: 'white', flex: 1 }}>
            <StatusBar backgroundColor={'white'} barStyle="dark-content" />
            <View style={{ flex: 0.15 }}>
                <Text style={{fontSize:18,color:"black",textAlign:"center",justifyContent:"center",marginTop:30}}>Account Settings</Text>
            </View>
            <View style={{ flex: 0.8, flexDirection: "column", justifyContent: "space-between", }}>
                <SettingComp
                    title="Profile"
                    // ImageUrl={Images.profile}
                    onPress={() => navigation.navigate('Profile')} />
                <SettingComp
                    title="Order History"
                    // ImageUrl={Images.profile}
                    onPress={() => navigation.navigate('Order')} />
                <SettingComp
                    title="Book a Table"
                    // ImageUrl={Images.profile}
                    onPress={() => navigation.navigate('Reservation')} />
                <SettingComp
                    title="Help Center"
                    // ImageUrl={Images.profile}
                    onPress={() => navigation.navigate('Help')} />
                <SettingComp
                    title="Contact Us"
                    // ImageUrl={Images.profile}
                    onPress={() => navigation.navigate('Contact')} />
                <SettingComp
                    title="Privacy Policy"
                    // ImageUrl={Images.profile}
                    onPress={() => navigation.navigate('Privacy')} />
                <SettingComp
                    title="Terms & Conditions"
                    // ImageUrl={Images.profile}
                    onPress={() => navigation.navigate('Terms')} />
            </View>


            {/* <View style={{ marginVertical: Metrix.VerticalSize(20) }}>
                <ButtonComp
                    title="Log Out" 
                    onPress={()=>navigation.navigate('Login')}/>
            </View> */}
        </View>

    )
}


export default AccountSetting;
