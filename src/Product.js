import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { useRoute } from "@react-navigation/native"
import { Icon } from 'react-native-elements';

const image = [
    require("D:/Cart/Cart/assets/orange.jpg"),
    require("D:/Cart/Cart/assets/Apple.jpg"),
    require("D:/Cart/Cart/assets/Cauliflower.jpg"),
    require("D:/Cart/Cart/assets/spinach.jpg")
]

export default function Product() {
    const route = useRoute();

    // const Applebutton = () => {
    //     setapple(true)
    //     setorange(false)
    //     setspanich(false)
    //     setCauliflower(false)
    // }
    // const Orangebutton = () => {
    //     setapple(false)
    //     setorange(true)
    //     setspanich(false)
    //     setCauliflower(false)
    // }
    // const Cauliflowerbutton = () => {
    //     setapple(false)
    //     setorange(false)
    //     setspanich(false)
    //     setCauliflower(true)
    // }
    // const Spanichbutton = () => {
    //     setapple(false)
    //     setorange(false)
    //     setspanich(true)
    //     setCauliflower(false)
    // }

    return (
        <View>
            <Row/>
            {route.params.Press ? <Orange /> : null}
            {route.params.Press1 ? <Apple /> : null}
            {route.params.Press2 ? <Cauliflower /> : null}
            {route.params.Press3 ? <Spanich /> : null}
            <Buton />
            <Search />
        </View>
    )
}

const Orange = () => {
    return (
        <View>
            <Detail Fruit="Orange" />
        </View>
    )
}
const Apple = () => {
    return (
        <View>
            <Detail Fruit="Apple" />
        </View>
    )
}
const Cauliflower = () => {
    return (
        <View>
            <Detail Fruit="Cauiflower" />
        </View>
    )
}
const Spanich = () => {
    return (
        <View>
            <Detail Fruit="Spinach" />
        </View>
    )
}
const Filter = ({ Request }) => {
    return (

        <Image source={Request} style={{
            height: 80,
            width: 80,
            borderRadius: 20
        }} />

    )
}

const Row = () => {
    return (
        <View style={{
            flexDirection: "row",
            marginLeft: 20,
            marginRight: 20,
            marginTop: 20,
            justifyContent: "space-between"
        }}>
            <Filter Request={image[0]} />
            <Filter Request={image[1]} />
            <Filter Request={image[2]} />
            <Filter Request={image[3]} />
        </View>
    )
}

const Detail = ({ Fruit }) => {
    return (
        <View style={{
            marginLeft: 20,
            marginTop: 10
        }}>
            <View style={{ height: 50 }} />
            <RowDetail normal="Business: " bold="Grocery" />
            <RowDetail normal="Product Category: " bold="Fruits & Vegetable" />
            <RowDetail normal="Item Name: " bold={Fruit} />
            <View style={{ height: 30 }} />
            <RowDetail normal="MRP: " bold="Rs 65" />
            <RowDetail normal="Your Price: " bold="Rs 60" offer="      (7% off)" />
            <RowDetail normal="Unit: " bold="per Kg" />
            <RowDetail normal="In Stock" />
            <RowDetail normal="Description:" />
            <RowDetail bold="Lorem ipsum dolor sit amet" />
            <RowDetail bold="consectetur adipiscing elit." />
        </View>
    )
}

const Buton = () => {
    return (
        <View style={{ flexDirection: "row", justifyContent: "space-evenly", marginTop: 20 }}>
            <View style={{ height: 50, width: 50, borderRadius: 40, backgroundColor: "#A2A3A7" }}>
                <Icon name="edit-2"
                    type='feather' color='#000000'
                    style={{ margin: 10 }}
                />
            </View>
            <View style={{ height: 50, width: 50, borderRadius: 40, backgroundColor: "#A2A3A7" }}>
                <Icon name="trash-2"
                    type='feather' color='#000000'
                    style={{ margin: 10 }}
                />
            </View>
        </View>
    )
}

const Search = () => {
    return (
        <View style={{ height: 50, width: 350, borderRadius: 40, backgroundColor: "#4CAF50", justifyContent: "center", alignSelf: "center", marginTop: 20 }}>
            <View style={{ flexDirection: "row", justifyContent: "center", alignSelf: "center" }}>
                <Text style={{ fontWeight: "bold", color: "white", marginRight: 16 }}>Share</Text>
                <Icon name="whatsapp"
                    type="font-awesome" color="white" />
            </View>
        </View>
    )

}
const RowDetail = ({ normal, bold, offer }) => {
    return (
        <View style={{ flexDirection: "row" }}>
            <Text style={{ fontSize: 20, color: "#50555C", fontWeight: "900" }}>{normal}</Text>
            <Text style={{ fontWeight: "bold", fontSize: 20 }}>{bold}</Text>
            <Text style={{ color: 'red', fontSize: 16, margin: 4 }}>{offer}</Text>
        </View>
    )
}
