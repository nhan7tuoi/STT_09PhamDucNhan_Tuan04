// import React from 'react';
import { UserOutlined, EyeInvisibleOutlined, EyeTwoTone, LockOutlined } from '@ant-design/icons';
import { Input, Space, Button } from 'antd';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Page1() {
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 30, fontWeight: 700, color: "#000", alignItems: 'flex-start', width: '100%' }}>LOGIN</Text>
            <View style={{ width: 350 }}>
                <Input style={{ height: 54, marginBottom: 20 }} placeholder="Name" prefix={<UserOutlined style={{ fontSize: 35 }} />} />
                <Space direction="vertical">
                    <Input.Password
                        prefix={<LockOutlined style={{ fontSize: 35 }} />}
                        style={{ height: 54 }}
                        backgroundColor="#DDBE#B"
                        placeholder="input password"
                        iconRender={(visible) => (visible ? <EyeTwoTone style={{ fontSize: 35 }} /> : <EyeInvisibleOutlined style={{ fontSize: 32 }} />)}
                    />
                </Space>
            </View>
            <View>
                <Button style={{ width: 350, height: 50, color: '#fff', backgroundColor: '#000', fontSize: 20, fontWeight: 700 }} >LOGIN</Button>
            </View>
            <TouchableOpacity>
                <Text style={{ fontSize: 25, fontWeight: 700 }}>Forgot your password?</Text>
            </TouchableOpacity>
        </View>
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