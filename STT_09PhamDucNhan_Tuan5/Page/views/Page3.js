import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Checkbox, Button } from 'antd';
import { TextInput } from 'react-native-paper';

export default function Page2() {
    const [password, setPassword] = useState('');
    const [length, setLength] = useState(0);
    const [isChecked1, setChecked1] = useState(false);
    const [isChecked2, setChecked2] = useState(false);
    const [isChecked3, setChecked3] = useState(false);
    const [isChecked4, setChecked4] = useState(false);

    const checbox1 = () => {
        setChecked1(!isChecked1);
    };
    const checbox2 = () => {
        setChecked2(!isChecked2);
    };
    const checbox3 = () => {
        setChecked3(!isChecked3);
    };
    const checbox4 = () => {
        setChecked4(!isChecked4);
    };
    const GeneratePassword = (length, isChecked1, isChecked2, isChecked3, isChecked4) => {
        const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
        const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const numberChars = '0123456789';
        const symbolChars = '!@#$%^&*()-_+=<>?/{}';
        let regex = '';
        if (isChecked1) regex += '(?=.*[a-z])';
        if (isChecked2) regex += '(?=.*[A-Z])';
        if (isChecked3) regex += '(?=.*\\d)';
        if (isChecked4) regex += `(?=.*[${symbolChars.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&')}])`;

        const finalRegex = new RegExp(`^[${lowercaseChars + uppercaseChars + numberChars + symbolChars}]+$`);
        let password;
        do {
            password = '';
            for (let i = 0; i < length; i++) {
                const randomIndex = Math.floor(Math.random() * finalRegex.source.length);
                password += finalRegex.source[randomIndex];
            }
        } while (!password.match(finalRegex) || !password.match(regex));
        setPassword(password);
        return password;
    }
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View>
                    <Text style={{ fontSize: 25, fontWeight: 700, color: '#fff' }}>PASSWORD</Text>
                    <Text style={{ fontSize: 25, fontWeight: 700, color: '#fff' }}>GENERATOR</Text>
                </View>
                <TextInput
                    style={{ color:'#fff', width: 300, height: 55, backgroundColor: '#151537', borderRadius: 0, fontSize: 20, fontWeight: 'bold' }}
                    theme={{colors:{text:'#fff',primary:'#fff'}}}
                    value={password}
                />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 20, fontWeight: 700, color: '#fff', paddingRight: 35 }}>Password length</Text>
                    <TextInput
                        onChangeText={setLength}
                        style={{ width: 110, height: 32, borderRadius: 0, backgroundColor: '#fff', fontSize: 20, fontWeight: 'bold' }}
                    />
                </View>
                <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 20, fontWeight: 700, color: '#fff', paddingRight: 20 }}>Include lower case letters</Text>
                    <Checkbox value={isChecked1} onChange={checbox1} ></Checkbox>
                </View>
                <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 20, fontWeight: 700, color: '#fff', paddingRight: 20 }}>Include upcase letters</Text>
                    <Checkbox value={isChecked2} onChange={checbox2}></Checkbox>
                </View>
                <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 20, fontWeight: 700, color: '#fff', paddingRight: 20 }}>Include number</Text>
                    <Checkbox value={isChecked3} onChange={checbox3} ></Checkbox>
                </View>
                <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 20, fontWeight: 700, color: '#fff', paddingRight: 20 }}>Include special symbol</Text>
                    <Checkbox value={isChecked4} onChange={checbox4}></Checkbox>
                </View>
                <Button
                    onClick={() => {
                        GeneratePassword(length, isChecked1, isChecked2, isChecked3, isChecked4);
                    }}
                    style={{ borderRadius: 0, width: 330, height: 55, color: '#fff', backgroundColor: '#3B3B98', fontSize: 20, fontWeight: 700 }} >GENERATE PASSWORD </Button>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        backgroundImage: "linear-gradient(to bottom , #3B3B98, #C4C4C4)",
        width: 390,
        height: 844,
        padding: 20,
    },
    content: {
        padding: 20,
        alignItems: 'center',
        justifyContent: 'space-around',
        width: "100%",
        height: "100%",
        borderRadius: 20,
        backgroundImage: "linear-gradient(to bottom , #23235B, #23235B)",
        borderWidth: 1,
    }
}
);