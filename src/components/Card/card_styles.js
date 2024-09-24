import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#e0e0e0",
      },
      card_container: {
        backgroundColor: "white",
        margin: 10,
        borderWidth: 1,
        borderColor: "gray",
        borderRadius: 10,
      },
      card_body: {
        padding: 10,
      },
      person: {
        backgroundColor: "white",
        fontSize: 20,
        fontWeight: "bold",
        margin: 10,
        marginBottom: 3,
      },
      toSay: {
        fontSize: 18,
        margin: 10,
        marginTop: 3,
      },
      button_container: {
        backgroundColor: "#00C2FF",
        padding: 10,
        alignItems: "center",
        borderRadius: 10,
        borderTopRightRadius: 0,
        borderTopLeftRadius: 0,
      },
      card_button_title: {
        fontWeight: "bold",
        color: "white",
        fontSize: 20,
      },
})