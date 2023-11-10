import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View } from "react-native"

export default function App() {
	return (
		<View style={s.container}>
			<View style={s.header}>
				<Text style={s.bold_text}>Hello, World!</Text>
			</View>
			<View style={s.body}>
				<Text>Lorem ipsum dolor sit amet consectur.</Text>
				<Text>Lorem ipsum dolor sit amet consectur.</Text>
				<Text>Lorem ipsum dolor sit amet consectur.</Text>
			</View>

			<StatusBar style="auto" />
		</View>
	)
}

const s = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
	header: {
		backgroundColor: "pink",
		padding: 20,
		borderRadius: 5,
	},
	bold_text: {
		fontWeight: "bold",
	},
	body: {
		backgroundColor: "yellow",
		padding: 20,
	},
})
