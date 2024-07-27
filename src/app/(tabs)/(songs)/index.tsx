import { TrackList } from '@/components/TrackList'
import { defaultStyles } from '@/styles'
import { View, Text, ScrollView } from 'react-native'

const Songscreen = () => {
	return (
		<View style={defaultStyles.container}>
			<ScrollView>
				<TrackList scrollEnabled={false}/>
			</ScrollView>
		</View>
	)
}
export default Songscreen
