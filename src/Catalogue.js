
import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { Switch } from 'react-native-switch'
//import Icon from 'react-native-vector-icons/AntDesign'
import { Icon } from 'react-native-elements';
import { BlurView } from '@react-native-community/blur'
import { useNavigation } from '@react-navigation/native'



export default function Catalogue() {
    const [orange, setorange] = useState(false)
    const [apple, setappple] = useState(false)
    const [cauliflower, setCauliflower] = useState(false)
    const [spanich, setspanich] = useState(false)

    const [isPress, setPress] = useState(false)
    const [isPresss, setPresss] = useState(false)

    const navigation = useNavigation();

    //const img = "D:/Cart/assets/orange.jpg"
    //const orangeImage = require(img)
    const orangeImage = require("D:/Cart/Cart/assets/orange.jpg")
    const appleImage = require("D:/Cart/Cart/assets/Apple.jpg")
    const cauliflowerImage = require("D:/Cart/Cart/assets/Cauliflower.jpg")
    const spanichImage = require("D:/Cart/Cart/assets/spinach.jpg")

    const presss = () => setPress(previousState => !previousState)
    const pressss = () => setPresss(previousState => !previousState)
    const Orange = () => setorange(previousState => !previousState)
    const Apple = () => setappple(previousState => !previousState)
    const Cauliflower = () => setCauliflower(previousState => !previousState)
    const Spanich = () => setspanich(previousState => !previousState)

    // const Orange = ()=>{
    //     setorange(true)
    //     setappple(false)
    //     setCauliflower(false)
    //     setspanich(false)
    // }
    // const Apple = ()=>{
    //     setorange(false)
    //     setappple(true)
    //     setCauliflower(false)
    //     setspanich(false)
    // }
    // const Cauliflower =() =>{
    //     setorange(false)
    //     setappple(false)
    //     setCauliflower(true)
    //     setspanich(false)
    // } 
    // const Spanich = () =>{
    //     setorange(false)
    //     setappple(false)
    //     setCauliflower(false)
    //     setspanich(true)
    // }
    return (
        <View>
            <Buttons press={presss} press1={pressss} value={isPress} value1={isPresss} />
            <Row />
            <Banner
                Fruit='Orange'
                Request={orangeImage}
                value={orange}
                toggle={Orange}
                onPress={() => navigation.navigate('Product', { Press: { orange }, Name: 'Orange' })}
            />
            <View style={{ height: 5 }} />
            <Banner
                Fruit='Apple'
                Request={appleImage}
                value={apple}
                toggle={Apple}
                onPress={() => navigation.navigate('Product', { Press1: { apple }, Name: 'Apple' })}
            />

            <View style={{ height: 5 }} />
            <Banner
                Fruit='Cauliflower'
                Request={cauliflowerImage}
                value={cauliflower}
                toggle={Cauliflower}
                onPress={() => navigation.navigate('Product', { Press2: { cauliflower }, Name: 'Cauliflower' })}

            />
            <View style={{ height: 5 }} />
            <Banner
                Fruit='Spinach'
                Request={spanichImage}
                value={spanich}
                toggle={Spanich}
                onPress={() => navigation.navigate('Product', { Press3: { spanich }, Name: 'Spanich' })}
            />
            <View style={{ height: 5 }} />
            <Buton />
        </View>
    )
}

// const BlurSystem = () => {
//     return (
//         <Banner
//             Fruit='Orange'
//             Request={require("D:/project/Cart/assets/orange.jpg")}
//             value={orange}
//             toggle={Orange}
//         />


//     )
// }
const Row = () => {
    return (
        <View style={{ flexDirection: "row", backgroundColor: "white", height: 60, justifyContent: "space-evenly" }}>
            <Text style={{ fontWeight: "bold", marginTop: 20, fontSize: 20 }}>Products</Text>
            <Text style={{ fontWeight: "bold", marginTop: 20, fontSize: 20 }}>In Stock</Text>
        </View>
    )
}

const Buton = () => {
    return (
        <View style={{ flexDirection: "row", justifyContent: "space-evenly", backgroundColor: "white", height: 100, }}>
            <View style={{ height: 60, width: 150, borderRadius: 30, backgroundColor: "#FF322F", marginTop: 20 }}>
                <Text style={{ margin: 15, color: "#FFFFFF", fontWeight: "bold", fontSize: 16 }}>+ Add Product</Text>
            </View>
            <View style={{ height: 60, width: 150, borderRadius: 30, backgroundColor: "#4CAF50", marginTop: 20 }}>
                <View style={{flexDirection:"row",justifyContent:"center"}}>
                    <Text style={{ margin: 15, color: "#FFFFFF", fontWeight: "bold", fontSize: 16 }}>Share</Text>
                    <Icon name="whatsapp"
                    type="font-awesome" color="white" style={{marginTop:16}} />
                </View>
            </View>
        </View>
    )
}

const Banner = ({ Fruit, Request, value, toggle, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={{ flexDirection: "row", backgroundColor: "white", height: 100 }}>
                <View style={styles.image}>
                    <Image source={Request} style={{ height: 80, width: 80, borderRadius: 20 }} />
                </View>
                <View style={{ flexDirection: "column", height: 75, width: 100, marginLeft: 10, marginTop: 10 }}>
                    <Text style={{ fontWeight: 'bold' }}>{Fruit}</Text>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", textDecorationColor: "red" }}>
                        <Text>Rs 60</Text>
                        <Text style={{ textDecorationLine: "line-through" }}>Rs 65</Text>
                    </View>
                    <Text style={{ color: "red" }}>(7% off)</Text>
                </View>
                <Icon size={20} name='chevrons-right' type='feather' color='red' style={{ marginTop: 10, marginLeft: 30 }} />
                <View style={{ flexDirection: "column" }}>
                    <View style={{ justifyContent: "center", marginLeft: 60, marginTop: 30, flexDirection: "row" }}>
                        <Switch
                            value={value}
                            onValueChange={toggle}
                            disabled={false}
                            circleSize={20}
                            barHeight={22}
                            backgroundActive={'#DADADA'}
                            backgroundInactive={'#DADADA'}
                            circleActiveColor={'#4CAF50'}
                            circleInActiveColor={'white'}
                            innerCircleStyle={{ alignItems: "center", justifyContent: "center" }}
                            renderActiveText={false}
                            renderInActiveText={false}
                            switchLeftPx={2}
                            switchRightPx={2}
                            switchWidthMultiplier={2}

                        />
                        <View style={{ justifyContent: "center", marginLeft: 10 }}>
                            <Icon size={20} name='dots-three-vertical' type='entypo' color='#898A8D' />
                        </View>
                    </View>
                    {value ? <Show /> : null}
                </View>


            </View>
        </TouchableOpacity>
    )
}

const Buttons = ({ press, press1, value, value1 }) => {
    return (
        <View style={styles.headerbutton}>
            <TouchableOpacity style={[styles.button, value ? { backgroundColor: "red" } : {}]} onPress={press}>
                <Text style={{ fontWeight: "bold" }}>Catalogue</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, value1 ? { backgroundColor: "red" } : {}]} onPress={press1}>
                <Text style={{ fontWeight: "bold" }}>Category</Text>
            </TouchableOpacity>
        </View>
    )
}
const Blur = () => {
    return (
        <BlurView
            style={styles.absolute}
            blurType="dark"
            blurAmount={20}
            reducedTransparencyFallbackColor="light"
        />
    )
}
const Show = () => {
    return (
        <View>
            <BlurView
                style={styles.absolute}
                blurType="dark"
                blurAmount={100}
                reducedTransparencyFallbackColor="light"
            />
            <View style={{ flexDirection: "row", backgroundColor: 'white', width: 75, marginLeft: 60, justifyContent: "space-between", borderRadius: 6 }}>
                <Icon name="edit-2"
                    type='feather' color='#A2A3A7'
                />
                <Icon name="trash-2"
                    type='feather' color='#A2A3A7'
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        width: 150,
        height: 40,
        backgroundColor: '#F2F0F1',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: "center",
        marginTop: 15
    },
    absolute: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },

    changebutton: {
        width: 150,
        height: 40,
        backgroundColor: '#FF322F',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: "center",
        marginTop: 15
    },
    headerbutton: {
        height: 75,
        flexDirection: "row",
        justifyContent: "space-evenly",
        margin: 5,
        backgroundColor: "#FFFFFF"
    },
    image: {
        height: 80,
        width: 80,
        borderRadius: 20,
        // elevation: 2,
        // shadowColor: "light",
        // shadowColor: "#000",
        // shadowOffset: {
        //     width: 0,
        //     height: 2,
        // },
        marginTop: 10,
        marginLeft: 10,
        backgroundColor: "white",
    }
})

// {/* <Switch
//                         trackColor={{ false: "#767577", true: "#81b0ff" }}
//                         thumbColor={value ? "#f5dd4b" : "#f4f3f4"}
//                         onValueChange={toggle}
//                         value={value}
//                     /> */}

// // {/* <Switch
// //                         value={value}
// //                         onValueChange={toggle}
// //                         disabled={false}
// //                         circleSize={20}
// //                         barHeight={22}
// //                         backgroundActive={'#DADADA'}
// //                         backgroundInactive={'#DADADA'}
// //                         circleActiveColor={'#4CAF50'}
// //                         circleInActiveColor={'white'}
// //                         changeValueImmediately={true}
// //                         //renderInsideCircle={() => Show} // custom component to render inside the Switch circle (Text, Image, etc.)
// //                         changeValueImmediately={true} // if rendering inside circle, change state immediately or wait for animation to complete
// //                         innerCircleStyle={{ alignItems: "center", justifyContent: "center" }} // style for inner animated circle for what you (may) be rendering inside the circle
// //                         outerCircleStyle={{}} // style for outer animated circle
// //                         renderActiveText={false}
// //                         renderInActiveText={false}
// //                         switchLeftPx={2} // denominator for logic when sliding to TRUE position. Higher number = more space from RIGHT of the circle to END of the slider
// //                         switchRightPx={2} // denominator for logic when sliding to FALSE position. Higher number = more space from LEFT of the circle to BEGINNING of the slider
// //                         switchWidthMultiplier={2} // multipled by the `circleSize` prop to calculate total width of the Switch
// //                     //switchBorderRadius={20} // Sets the border Radius of the switch slider. If unset, it remains the circleSize.
// //                     />*/}