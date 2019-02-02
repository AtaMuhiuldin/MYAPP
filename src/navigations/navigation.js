import {
  createAppContainer,
  createSwitchNavigator,
  createDrawerNavigator
} from "react-navigation";
import LoginScreen from "../components/screens/loginScreen";
import AddLocationScreen from "../components/screens/addLocationScreen";
import HomeScreen from "../components/screens/homeScreen";
import LocationRangeScreen from "../components/screens/locationRangeScreen";
import ProductCatagories from '../components/products/catagories';

const AppDrawerNavigator = createDrawerNavigator({
  Home: { screen: HomeScreen },
  ProductCatagories: { screen: ProductCatagories }
});

const AppSwitchNavigator = createSwitchNavigator({
  HomeScreen: { screen: AppDrawerNavigator },
  LoginScreen: { screen: LoginScreen },
  AddLocationScreen: { screen: AddLocationScreen },
  LocationRangeScreen: { screen: LocationRangeScreen }
});

const AppContainer = createAppContainer(AppSwitchNavigator);

export default AppContainer;
