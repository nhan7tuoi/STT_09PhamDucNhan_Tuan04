import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { PlusSquareFilled, MinusSquareFilled, FundFilled } from '@ant-design/icons';
import { Input, Button } from 'antd';


export default function Page2() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerDetail}>
                    <View style={styles.headerItem}>
                        <View style={{ width: '100%', height: 150, flexDirection: 'row' }}>
                            <View style={{ width: '35%' }}>
                                <Image style={styles.book} source={require('../assets/book.png')}></Image>
                            </View>
                            <View style={{ width: '65%' }}>
                                <Text style={{ fontSize: 16, fontWeight: 700 }}>Nguyên hàm tích phân và ứng dụng</Text>
                                <Text style={{ fontSize: 12, fontWeight: 700 }}>Cung cấp bởi Tiki Trading</Text>
                                <Text style={{ fontSize: 20, fontWeight: 700, color: 'red' }}>141.800 đ</Text>
                                <Text style={{ fontSize: 12, fontWeight: 700, color: '#808080', textDecorationLine: 'line-through' }}>299.000 đ</Text>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <View style={{ flexDirection: 'row', paddingTop: 10 }}>
                                        <TouchableOpacity>
                                            <MinusSquareFilled />
                                        </TouchableOpacity>
                                        <Text style={{ paddingRight: 10, paddingLeft: 10, fontSize: 20, fontWeight: 700, marginTop: -7 }}>1</Text>
                                        <TouchableOpacity>
                                            <PlusSquareFilled />
                                        </TouchableOpacity>
                                    </View>
                                    <TouchableOpacity>
                                        <Text style={{ fontSize: 15, fontWeight: 700, color: '#134FEC', marginTop: 7 }}>Mua sau</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontSize: 15, fontWeight: 700, paddingRight: 30 }}>Mã giảm giá đã lưu</Text>
                            <TouchableOpacity style={{ marginTop: 2 }}>
                                <Text style={{ fontWeight: 700, color: "#134FEC" }}>Xem tại đây</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 40 }}>
                            <Input prefix={<FundFilled style={{ color: 'yellow', fontSize: 28 }} />} style={{ width: 230, height: 50, borderRadius: 0 }} placeholder="Nhập mã giảm giá"></Input>
                            <Button style={{ textAlign: 'center', borderRadius: 5, width: 100, height: 50, color: '#fff', backgroundColor: '#0A5EB7', fontSize: 18, fontWeight: 700 }} >Áp dụng</Button>
                        </View>
                    </View>
                    <View style={{ height: 15, backgroundColor: '#C4C4C4', width: '109%', marginLeft: -15 }}></View>
                    <View style={{ flexDirection: 'row', height: 55, justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#fff' }}>
                        <Text style={{ fontWeight: 700, fontSize: 13 }}>Bạn có phiếu quà tặng Tiki/Got it/ Urbox?</Text>
                        <Text style={{ color: '#134FEC', fontSize: 13, fontWeight: 700 }}>Nhận tại đây?</Text>
                    </View>
                    <View style={{ height: 15, backgroundColor: '#C4C4C4', width: '109%', marginLeft: -15 }}></View>
                    <View style={{ height: 55, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={{ fontSize: 18, fontWeight: 700 }}>Tạm tính</Text>
                        <Text style={{ fontSize: 18, fontWeight: 700, color: 'red' }}>141.800 đ</Text>
                    </View>
                </View>
            </View>
            <View style={styles.footer}>
                <View style={{ height: 55, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text style={{ fontSize: 18, fontWeight: 700 }}>Thành tiền</Text>
                    <Text style={{ fontSize: 18, fontWeight: 700, color: 'red' }}>141.800 đ</Text>
                </View>
                <Button style={{ borderRadius:0, width: "100%", height: 55, color: '#fff', backgroundColor: '#E53935', fontSize: 20, fontWeight: 700 }} >TIẾN HÀNH ĐẶT HÀNG</Button>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundImage: "linear-gradient(to bottom , #3B3B98, #C4C4C4)",
        width: 390,
        height: 844,
    },
    header: {
        width: "100%",
        height: "60%",
        backgroundColor: '#fff',
        padding: 15,
    },
    headerDetail: {
        width: "100%",
        height: "100%",
    },
    headerItem: {
        backgroundColor: '#fff',
        height: 300,
    },
    book: {
        width: 105,
        height: 127,
    },
    footer: {
        width: "100%",
        height: "20%",
        backgroundColor: '#fff',
        padding: 15,
    }

}
);