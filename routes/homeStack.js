import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import Home from '../screens/Home'
import ReviewDetails from '../screens/ReviewDetails'
const screens = {
    Home : {
        screen : Home,
        navigationOptions : {
            title: 'Gamezone',
            headerStyle : {
                backgroundColor: '#43e8d8',
                color: '#fff'
            },
            headerTitleStyle: {
                fontWeight: 'bold',
                color: '#fff',
              },
        }
    },
    ReviewDetails : {
        screen : ReviewDetails,
        navigationOptions : {
            title: 'Review Details',
            headerStyle : {
                backgroundColor: '#c1f9ff'
            },
            
        }
    }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);