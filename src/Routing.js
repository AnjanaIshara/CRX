import { createStackNavigator,
createAppContainer } from "react-navigation";

import Splash from './Splash';
import Homepage from "./Homepage";
const MainNavigator=createStackNavigator({
    Splash:{screen:Splash},
    Home:{screen:Homepage},

},
{
    headerMode:'none',
    navigationOptions:{
        headerVisible:false,
    }
}
);
export default createAppContainer(MainNavigator);