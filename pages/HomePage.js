import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const HomePage = () => {
    return(
        <View>
            <View style={styles.header}>
                <Text style={styles.logo_text}>lpy.</Text>
                <TouchableOpacity>
                    <Image
                        source={require("../assets/menu.png")}
                        style={styles.menupic}
                    />
                </TouchableOpacity>
            </View>

            <View style={styles.dashboard}>
                <TouchableOpacity>
                    <Text style={styles.dashboard_1}>Dashboard</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={styles.dashboard_2}>Timeline</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.midsection}>
                    <Image
                        source={require("../assets/smiling.png")}
                        style={styles.bigsmile}
                    />
                <Text style={styles.user}>Hello Evelyn,</Text>
                <Text style={styles.headline}>Here's an update</Text>
            </View>

            <View>
                <View style={styles.midsection_styling}>
                    <Image
                        source={require("../assets/smiling.png")}
                        style={styles.smallsmile}
                    />
                    <Text style={styles.messages}>Jessica Blanke sent you a message 6 hours ago</Text>
                </View>

                <View style={styles.midsection_styling}>
                    <Image
                        source={require("../assets/message.png")}
                        style={styles.smallsmile}
                    />
                    <Text style={styles.messages}>Melissa Patterson sent you a message 6 hours ago</Text>
                </View>
            </View>

            <View>
                <TouchableOpacity
                    style={styles.btns}
                >
                    <Text style={styles.btn_text}>Make a Post</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.footer}>
                <TouchableOpacity
                         style={styles.circles}
                    >
                        <Image
                        source={require("../assets/email.png")}
                        style={styles.footer_icon1}
                        />
                </TouchableOpacity>

                <TouchableOpacity
                         style={styles.circles}
                    >
                        <Image
                        source={require("../assets/people.png")}
                        style={styles.footer_icon2}
                        />
                </TouchableOpacity>

                <TouchableOpacity
                         style={styles.circles}
                    >
                        <Image
                        source={require("../assets/home.png")}
                        style={styles.footer_icon2}
                        />
                </TouchableOpacity>

                <TouchableOpacity
                         style={styles.circles}
                    >
                        <Image
                        source={require("../assets/folder.png")}
                        style={styles.footer_icon2}
                        />
                </TouchableOpacity>

                <TouchableOpacity
                         style={styles.circles}
                    >
                        <Image
                        source={require("../assets/person.png")}
                        style={styles.footer_icon2}
                        />
                </TouchableOpacity>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    dashboard: {
        flexDirection: "row",
        borderStyle: "solid",
        borderColor: "#babab8",
        borderBottomWidth: 1,
        marginTop: 15,
    },
    midsection_styling: {
        flexDirection: "row",
        borderStyle: "solid",
        borderColor: "#babab8",
        borderBottomWidth: 1,
        borderTopWidth: 1,
        marginTop: 10,
        paddingLeft: 30,
        marginLeft: 10,
        marginRight: 10,
        width: 340,
        height: 55,
        paddingTop: 8,
    },
    header: {
        flexDirection: "row",
        backgroundColor: "#f8f8f2",
    },
    dashboard_1: {
        width: 180,
        height: 40,
        color: "#ff786b",
        textAlign: "center",
    },
    dashboard_2: {
        width: 180,
        height: 40,
        color: "#ffdfdc",
        textAlign: "center",
    },
    user: {
        color: "#fc3b2b",
        fontWeight: "bold",
        fontSize: 18,
    },
    headline: {
        color: "#c5c5c5",
        fontWeight: "bold",
        fontSize: 16,
    },
    midsection: {
        marginLeft: 25,
    },
    btns: {
        borderColor: "red",
        margin: 25,
        width: 280,
        marginLeft: 65,
        marginTop: 70,
        marginBottom: 70,
    },
    btn_text: {
        color: "red",
        fontSize: 18,
        textAlign: "center",
        borderColor: "red",
        borderRadius: 15,
        borderStyle: "solid",
        borderWidth: 2,
        height: 40,
        paddingTop: 5,
        fontWeight: "bold",
    },
    circles: {
        backgroundColor: "#f8f8f2",
        borderRadius: 25,
        width: 60,
        height: 60,
        marginRight: 15,
    },
    socials_links: {
        textAlign: "center",
        paddingTop: 7,
        color: "red",
        fontSize: 18,
        fontWeight: "bold",
    },
    footer: {
        flexDirection: "row",
        paddingLeft: 20,
        backgroundColor: "#fbfaf3",
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        height: 80,
    },
    bigsmile: {
        width: 80,
        height: 80,
        marginTop: 50,
        marginBottom: 30,
    },
    smallsmile: {
        width: 40,
        height: 40,
        marginRight: 10,
    },
    menupic: {
        width: 40,
        height: 40,
        marginTop: 30,
        marginLeft: 50,
    },
    messages: {
        textAlign: "left",
        width: 260,
    },
    footer_icon1: {
        width: 70,
        height: 70,
        paddingTop: 10,
        paddingRight: 5,
        marginRight: 10,
    },
    footer_icon2: {
        width: 40,
        height: 40,
        marginTop: 15,
        paddingRight: 5,
        paddingLeft: 5,
        marginRight: 10,
        marginLeft: 10,
    },
    logo_text: {
        color: "#fd5645",
        fontWeight: "bold",
        fontSize: 50,
        textAlign: "center",
        paddingRight: 50,
        paddingLeft: 150,
        paddingTop: 15,
        paddingBottom: 10,
    }
})

export default HomePage;