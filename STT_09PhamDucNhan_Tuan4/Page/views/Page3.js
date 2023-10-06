import { View, Text, StyleSheet } from "react-native";
import { Input,Checkbox,Button  } from 'antd';


export default function Page2() {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View>
                    <Text style={{ fontSize: 25, fontWeight: 700, color: '#fff' }}>PASSWORD</Text>
                    <Text style={{ fontSize: 25, fontWeight: 700, color: '#fff' }}>GENERATOR</Text>
                </View>
                <Input style={{width:300,height:55,backgroundColor:'#151537',borderRadius:0}}></Input>
                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                    <Text style={{fontSize:20,fontWeight:700,color:'#fff',paddingRight:35}}>Password length</Text>
                    <Input style={{width:110,height:32,borderRadius:0}}></Input>
                </View>
                <View style={{flexDirection:'row',width:'100%',justifyContent:'space-between'}}>
                    <Text style={{fontSize:20,fontWeight:700,color:'#fff',paddingRight:20}}>Include lower case letters</Text>
                    <Checkbox checked></Checkbox>
                </View>
                <View style={{flexDirection:'row',width:'100%',justifyContent:'space-between'}}>
                    <Text style={{fontSize:20,fontWeight:700,color:'#fff',paddingRight:20}}>Include upcase letters</Text>
                    <Checkbox></Checkbox>
                </View>
                <View style={{flexDirection:'row',width:'100%',justifyContent:'space-between'}}>
                    <Text style={{fontSize:20,fontWeight:700,color:'#fff',paddingRight:20}}>Include number</Text>
                    <Checkbox checked ></Checkbox>
                </View>
                <View style={{flexDirection:'row',width:'100%',justifyContent:'space-between'}}>
                    <Text style={{fontSize:20,fontWeight:700,color:'#fff',paddingRight:20}}>Include special symbol</Text>
                    <Checkbox></Checkbox>
                </View>
                <Button style={{ borderRadius:0, width: 330, height: 55, color: '#fff', backgroundColor: '#3B3B98', fontSize: 20, fontWeight: 700 }} >GENERATE PASSWORD </Button>
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