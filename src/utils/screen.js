// import SignInScreen from '../components/Screens/SingnIn';
import SignInScreen from '../components/Screens/SignInSignUp';
import DrawerNavigator from '../components/Screens/Drawer';
import CartScreen from '../components/Screens/Cart';
import ProductsDetailsScreen from '../components/Screens/ProductDetail';
import ProfileScreen from '../components/Screens/Profile';
import OrderManagementScreen from '../components/Screens/OrderManagement';
import SignUpScreen from '../components/Screens/SignUp';
import CheckoutScreen from '../components/Screens/CheckoutScreen';
//ben nay qua ne
export default {
    initialRouteName: 'SignInScreen',
    screens: [
        {
            name: 'SignInScreen',
            component: SignInScreen
        },
        {
            name: 'HomeScreen',
            component: DrawerNavigator
        },
        {
            name: 'CartScreen',
            component: CartScreen
        },
        {
            name: 'Profile',
            component: ProfileScreen
        },
        {
            name: 'ProductsDetailsScreen',
            component: ProductsDetailsScreen
        },
        {
            name: 'OrderManagementScreen',
            component: OrderManagementScreen
        },
        {
            name: 'SignUpScreen',
            component: SignUpScreen
        },
        {
            name: 'CheckoutScreen',
            component: CheckoutScreen
        }
        
    ]
};
