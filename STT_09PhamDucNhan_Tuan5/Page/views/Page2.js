import { View, Image, Text, StyleSheet } from "react-native";
import { Rate, Button, Input } from 'antd';
import { CameraFilled } from '@ant-design/icons';

const { TextArea } = Input;

export default function Page2() {
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row' }}>
                <Image style={{ width: 70, height: 70 }} source={require('../assets/usb.png')}></Image>
                <Text style={{ fontSize: 16, fontWeight: 700 }}>USB Bluetooth Music Receiver HJX-001- Biến loa thường thành loa bluetooth</Text>
            </View>
            <View style={{ alignItems: 'center',justifyContent:'space-around',height:'500px' }}>
                <Text style={{ fontSize: 18, fontWeight: 700 }}>Cực kỳ hài lòng</Text>
                <Rate style={{ fontSize: 45 }} defaultValue={5} />
                <Button style={{ width: 330, height: 70, fontSize: 18, fontWeight: 700, alignItems: 'center', display: 'flex', justifyContent: 'center' }} icon={<CameraFilled style={{ fontSize: 40 }} />}>Thêm hình ảnh</Button>
                <TextArea
                    style={{ height: 220,fontSize:18,fontWeight:700}}
                    placeholder="Hãy chi sẻ những điều mà bạn thích về sản phẩm">
                </TextArea>
                <Button style={{ width: 330, height: 50, color: '#fff', backgroundColor: '#0d5db6', fontSize: 20, fontWeight: 700 }} >Gửi</Button>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#fff',
        width: 390,
        height: 844,
        padding: 20,
    },
}
);