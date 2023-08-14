import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

const MyButton = ({title, onPressButton}) => {

    const styles = StyleSheet.create({
        buttonContainer: {
            padding: 8,
            borderRadius: 4,
            backgroundColor: '#568945',
            margin: 4,
        },
        buttonTitle: {
            color: '#fff',
            fontSize: 25,
        }
    })
        
    return (
        <TouchableOpacity onPress={onPressButton}>
            <View style={styles.buttonContainer}>
                <Text style={styles.buttonTitle}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
}

export default MyButton;