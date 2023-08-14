import axios from "axios";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { View, Text, SafeAreaView,  } from "react-native";
import MyButton from "../MyButton";

const CatFacts = () => {

    const [catFact, setCatFact] = useState()

const fetchCatFact = async () => {
    try {
        const {data} = await axios.get('https://catfact.ninja/fact')
        setCatFact(
            data.fact
        )
    } catch(error){
        console.log(error)
    }
}

    return (
        <SafeAreaView>
            <StatusBar/>
                <View>
                    <Text>Cats facts</Text>
                    <MyButton title='Fato sobre gatos' 
                    onPressButton={fetchCatFact} />
                    <Text>{catFact ? catFact : ""}</Text>
                </View>
        </SafeAreaView>
    );
}

export default CatFacts;