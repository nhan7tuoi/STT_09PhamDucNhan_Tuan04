
import { useState } from 'react';
import { Button } from 'antd';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';

const name = 'nhan';
const pass = '123';
const login = (user, password) => {
    if (user === name) {
        if (user === name && password === pass) {
            alert('Login success');
        } else {
            alert('Login fail');
        }
    } else {
        alert('User not found');
    }
}

export default function Page1() {
    const [user, setUser] = useState('');
    console.log(user);
    const [password, setPassword] = useState('');
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 30, fontWeight: 700, color: "#000", alignItems: 'flex-start', width: '100%' }}>LOGIN</Text>
            <View style={{ width: 350 }}>
                <TextInput
                    style={{ marginTop: 20, height: 60, backgroundColor: '#f4c500', fontSize: 20, fontWeight: 700, borderWidth: 1, borderColor: '#fff' }}
                    label="Name"
                    left={<TextInput.Icon icon="account" size={40} />}
                    onChangeText={setUser}
                />
                <TextInput
                    onChangeText={setPassword}
                    style={{ marginTop: 20, height: 60, backgroundColor: '#f4c500', fontSize: 20, fontWeight: 700, borderWidth: 1, borderColor: '#fff' }}
                    label="Password"
                    // secureTextEntry
                    left={<TextInput.Icon icon="lock" size={40} />}
                    right={<TextInput.Icon icon="eye" size={40} />}
                />
            </View>
            <View>
                <Button
                    onClick={() => {
                        login(user, password);
                    }}
                    style={{ width: 350, height: 50, color: '#fff', backgroundColor: '#000', fontSize: 20, fontWeight: 700 }} >LOGIN</Button>
            </View>
            <TouchableOpacity>
                <Text style={{ fontSize: 25, fontWeight: 700 }}>Forgot your password?</Text>
            </TouchableOpacity>
        </View >
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundImage: "linear-gradient(to bottom , #FBCB00, #BF9A00)",
        width: 390,
        height: 844,
    },
}
)