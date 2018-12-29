import { StyleSheet, PixelRatio, Dimensions } from 'react-native';
const {
	width,
} = Dimensions.get('window');

const unit = {
  onePx: 1 / PixelRatio.get(),
};
const Styles = StyleSheet.create({
	container: {
		flex:1
	},
	flatListStyle: {
      marginTop:100
	},
    itemViewStyle :{
	  height :55,
	  backgroundColor:'#CCCCCC',
	  flexDirection : 'row',
	  alignItems: 'center',
	},
	separator:{
		height: 4,
		backgroundColor: "white",
	},
	itemTestStyle:{
	  marginLeft:15,
	},
    touchContainer: {
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },

	touchContainerLeft:{
		height: 50,
		width: width - 20,
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'flex-start',
	},

	touchContainerRight:{
		height: 50,
		width: width - 20,
		flex: 1,
		flexDirection: 'row-reverse',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	
	label: {
		// flex: 1,
	},
	
	checkedIcon: {
		height: 14,
		width: 14,
		marginHorizontal: 2,
		marginVertical: 3,
	},
	icon: {
		height: 20,
		width: 20,
		borderRadius: 20 / PixelRatio.get(),
		borderWidth: unit.onePx,
	},
	iconDefault: {
		backgroundColor: '#ffffff',
		borderColor: '#CCCCCC',
	},
	
});


export default Styles