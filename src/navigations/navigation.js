import {
  createAppContainer,
  createSwitchNavigator,
  createDrawerNavigator
} from "react-navigation";
import LoginScreen from "../components/screens/loginScreen";
import AddLocationScreen from "../components/screens/addLocationScreen";
import HomeScreen from "../components/screens/homeScreen";
import LocationRangeScreen from "../components/screens/locationRangeScreen";

const AppDrawerNavigator = createDrawerNavigator({
  Home: { screen: HomeScreen }
});

const AppSwitchNavigator = createSwitchNavigator({
  LoginScreen: { screen: LoginScreen },
  HomeScreen: { screen: AppDrawerNavigator },
  AddLocationScreen: { screen: AddLocationScreen },
  LocationRangeScreen: { screen: LocationRangeScreen }
});

const AppContainer = createAppContainer(AppSwitchNavigator);

export default AppContainer;
