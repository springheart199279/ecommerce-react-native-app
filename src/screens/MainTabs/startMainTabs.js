import { Navigation } from 'react-native-navigation';
import { Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const startTabs = () => {
    Promise.all([
        Icon.getImageSource(Platform.OS === "android" ? "md-menu" : "ios-menu", 30),
        Icon.getImageSource(Platform.OS === "android" ? "md-cart" : "ios-cart", 30),
        Icon.getImageSource(Platform.OS === "android" ? "md-heart" : "ios-heart", 30),
        Icon.getImageSource(Platform.OS === "android" ? "md-bookmark" : "ios-bookmark", 30),
        Icon.getImageSource(Platform.OS === "android" ? "md-cart" : "ios-cart", 30)
    ]).then((icons) => {    
        Navigation.startTabBasedApp({
            tabs: [
                {
                    screen: 'EcommerceApp.MainScreen',
                    label: "Products",
                    title: "Products",
                    icon: icons[1],
                    navigatorButtons: {
                        leftButtons: [
                            {
                                icon: icons[0],
                                title: "Menu",
                                id: 'SideDrawerToggle'
                            }
                        ]
                    }
                },
                // {
                //     screen: 'EcommerceApp.FavouritesScreen',
                //     label: "Favourites",
                //     title: "Favourites",
                //     icon: icons[2],
                //     navigatorButtons: {
                //         leftButtons: [
                //             {
                //                 icon: icons[0],
                //                 title: "Menu",
                //                 id: 'SideDrawerToggle'
                //             }
                //         ]
                //     }
                // },
                // {
                //     screen: 'EcommerceApp.WishListScreen',
                //     label: "Wish list",
                //     title: "Wish list",
                //     icon: icons[3],
                //     navigatorButtons: {
                //         leftButtons: [
                //             {
                //                 icon: icons[0],
                //                 title: "Menu",
                //                 id: 'SideDrawerToggle'
                //             }
                //         ]
                //     }
                // },
                // {
                //     screen: 'EcommerceApp.ShoppingCartScreen',
                //     label: "Shopping cart",
                //     title: "Shopping cart",
                //     icon: icons[4],
                //     navigatorButtons: {
                //         leftButtons: [
                //             {
                //                 icon: icons[0],
                //                 title: "Menu",
                //                 id: 'SideDrawerToggle'                                
                //             }
                //         ]
                //     }
                // }
            ],
            tabsStyle: {
                tabBarSelectedButtonColor: "orange"
            },
            drawer: {
                left: {
                    screen: 'EcommerceApp.SideDrawer'
                }
            },
            appStyle: {
                tabBarSelectedButtonColor: "orange"
            },
        });
    });
    
}

export default startTabs;