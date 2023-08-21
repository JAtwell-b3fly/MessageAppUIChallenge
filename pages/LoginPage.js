import { View,Text, TouchableOpacity,StyleSheet, Image } from "react-native";

const LoginPage = () => {
    return(
        <View>
            <View style={styles.header}>
                <Text style={styles.logo_text}>lpy.</Text>
            </View>

            <View>
                <TouchableOpacity
                    style={styles.btns}
                >
                    <Text style={styles.btn_text}>Sign In</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.btns}
                >
                    <Text style={styles.btn_text}>Create Account</Text>
                </TouchableOpacity>

                <View style={styles.socials}>
                    <TouchableOpacity
                        style={styles.circles}
                    >
                        <Text style={styles.socials_links}>fb</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                         style={styles.circles}
                    >
                        <Text style={styles.socials_links}>in</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                         style={styles.circles}
                    >
                        <Text style={styles.socials_links}>g+</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                         style={styles.circles}
                    >
                        <Text style={styles.socials_links}>tw</Text>
                    </TouchableOpacity>
                </View>
                
                <View>
                    <TouchableOpacity>
                    <Text style={styles.other_text}>Sign in with another account?</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>

    )
};

const styles = StyleSheet.create({
    socials: {
        flexDirection: "row",
        marginLeft: 85,
        marginTop: 35,
    },
    socials_links: {
        textAlign: "center",
        paddingTop: 7,
        color: "red",
        fontSize: 18,
        fontWeight: "bold",
    },
    btns: {
        borderColor: "red",
        margin: 25,
        width: 280,
        marginLeft: 55,
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
        width: 40,
        height: 40,
        marginRight: 15,
    },
    other_text: {
        textAlign: "center",
        position: "relative",
        marginTop: 20,
    },
    header: {
        flexDirection: "row",
        backgroundColor: "#f8f8f2",
    },
    logo_text: {
        color: "#fd5645",
        fontWeight: "bold",
        fontSize: 70,
        textAlign: "center",
        paddingRight: 50,
        paddingLeft: 130,
        paddingTop: 320,
        paddingBottom: 10,
        height: 450,
    }
})

export default LoginPage;