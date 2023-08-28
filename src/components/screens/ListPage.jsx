import React from "react";
import { FlatList, SafeAreaView, View, Text, StyleSheet} from "react-native";

const pokemontData = [
    {
        name: "Pikachu",
        type: "eletrico",
    },
    {
        name: "Chamnader",
        type: "Fire",
    },
    {
        name: "Psyduck",
        type: "Psiquico",
    },
]

const styles = StyleSheet.create({
    pokemonCard: {
        padding: 16,
        backgroundColor: "#fc8b3d",
        margin: 8,
        borderRadius: 20,
    },
    text: {
        color: "#ffffff",
        fontSize: 24,
    }
})

const PokemonItem = ({pokemon}) => {
    const {name, type} = pokemon

    return (
        <View style={styles.pokemonCard}>
            <Text style={styles.text}> Pokemin: {name}</Text>
            <Text style={styles.text}> Tipo: {type}</Text>
        </View>
    )
}

const ListPage = () => {
    return (
        <SafeAreaView style={{marginTop: 20}}>
            <FlatList
                data={pokemontData}
                renderItem={({item}) => <PokemonItem pokemon={item}/>}
            />
        </SafeAreaView>
    );
}

export default ListPage;