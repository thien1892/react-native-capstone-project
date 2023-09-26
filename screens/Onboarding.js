import { View, Image, StyleSheet, KeyboardAvoidingView, 
        Platform, TextInput, Text, Button, Alert, ScrollView } from "react-native";
// import { TextInput } from 'react-native-paper';
// import { Text } from 'react-native-paper';
import * as React from 'react';
import { Pressable } from "react-native";

export default function Onboarding() {
    const [firstName, setFirstName] = React.useState("");
    const [email, setEmail] = React.useState("");

    return(
        <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            {/* <ScrollView > */}
                <View style={styles.imgContainer}>
                    <Image
                        source={require('../assets/Logo.png')}
                        resizeMode='contain'
                        accessible={true}
                        accessibilityLabel={'Little Lemon Logo'}
                        style={styles.img}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <View>
                        <Text style={styles.innerText}>Let us get to know you</Text>
                    </View>
                    <View>
                    <Text style={styles.innerText}>First Name</Text>
                    <TextInput
                        placeholder='First name'
                        // secureTextEntry = {true}
                        keyboardType="default"
                        style = {styles.inputText}
                        value={firstName}
                        onChange={setFirstName}
                        clearButtonMode={'always'}
                        cursorColor='#4D616F'
                        // onFocus={() => Alert.alert('First name is focused!')}
                        // onBlur={() => Alert.alert('First name is blurred!!')}
                        />
                    <Text style={styles.innerText}>Email</Text>
                    <TextInput
                        placeholder='Email'
                        // secureTextEntry = {true}
                        keyboardType='email-address'
                        inputMode="email"
                        style = {styles.inputText}
                        value={email}
                        onChange={setEmail}
                        clearButtonMode={'always'}
                        cursorColor='#4D616F'
                        />
                    </View>
                </View>
                <View style={styles.buttonContainer}>
                    <Pressable
                        onPress={() => Alert.alert('Ok!')}
                        style={styles.button}>
                        <Text style= {styles.buttonText}>Next</Text>
                    </Pressable>
                </View>
        
            {/* </ScrollView> */}
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems:'center',
        // backgroundColor: '#DEE3E9',
    },
    imgContainer: {
        flex: 0.18,
        // alignSelf: 'center',
        // backgroundColor: '#DEE3E9',
        alignSelf:'stretch',
        justifyContent:'center',
        backgroundColor: '#DEE3E9',
        alignItems:'center',
    }
    ,
    img: {
        // flex: 0.5,
        width: 300,
        height: 140,
        marginTop: 10,
    },
    inputContainer: {
        alignSelf:'stretch',
        flex: 0.7,
        backgroundColor: '#CBD2D9',
        justifyContent:'space-between',
        paddingVertical:16
        // margin: 20,
    },
    inputText: {
        marginVertical:16,
        marginHorizontal:24,
        borderWidth: 3,
        borderColor:'#4D616F',
        padding:8,
        paddingHorizontal:16,
        fontSize: 18,
        borderRadius:8,
    },
    innerText: {
        fontSize: 24,
        textAlign: 'center',
        color:'#4D616F',
        // marginVertical:16,
        // padding:16,
    },
    buttonContainer: {
        flex: 0.18,
        alignSelf:'stretch',
        justifyContent:'center',
        backgroundColor: '#DEE3E9',
        // alignItems:'flex-end',
        // alignContent: 'center',
        // color:'#4D616F',
    },
    button: {
        // color:'#4D616F',
        backgroundColor: '#CBD2D9',
        marginRight: 24,
        marginLeft: 'auto',
        borderRadius:8
    },
    buttonText: {
        fontSize: 24,
        textAlign:'right',
        // marginRight: 24,
        // backgroundColor: '#CBD2D9',
        paddingHorizontal:32,
        paddingVertical:8
    }
})