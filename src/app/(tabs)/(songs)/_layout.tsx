import { StacksScreenWithSearchBar } from '@/constants/layout'
import { defaultStyles } from '@/styles'
import { BlurView } from 'expo-blur'
import { Stack } from 'expo-router'
import { Text, StyleSheet, View, SafeAreaView } from 'react-native'

const SongsScreenLayout = () => {
	return (
		<View style={defaultStyles.container}>
			<Stack>
				<Stack.Screen
					name="index"
					options={{
						...StacksScreenWithSearchBar,
						headerTitle: 'Songs',
						statusBarColor: 'black',
						headerBackground: () => (
							<BlurView
								intensity={80}
								tint="dark"
								style={StyleSheet.absoluteFill}
								experimentalBlurMethod="dimezisBlurView"
							/>
						),
						// header font size
						headerTitleStyle: { fontSize: 30, fontWeight: 'bold' },
					}}
				/>
			</Stack>
		</View>
	)
}
export default SongsScreenLayout
