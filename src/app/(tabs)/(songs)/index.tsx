import { TrackList } from '@/components/TrackList'
import { screenPadding } from '@/constants/tokens'
import { defaultStyles } from '@/styles'
import { View, Text, ScrollView } from 'react-native'

const Songscreen = () => {
	return (
		<View style={defaultStyles.container}>
			<ScrollView
			contentInsetAdjustmentBehavior='automatic'
			style={{paddingHorizontal: screenPadding.horizontal}}>
				<TrackList scrollEnabled={false}/>
			</ScrollView>
		</View>
	)
}
export default Songscreen
