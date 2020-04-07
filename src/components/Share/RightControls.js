import React from 'react';
import { TopNavigationAction } from '@ui-kitten/components';
import { CartIcon, SearchIcon,CartIconFill } from '../Share/IconComponent';
const navigatorCard = (refModalCartScreen) => {
    refModalCartScreen.current && refModalCartScreen.current.open();
};
const SearchAction = (props) => (
    <TopNavigationAction {...props} icon={SearchIcon} />
);
const RenderCartIcon=(props)=>(<CartIcon {...props}/>)
const CartAction = (props) => (
    <TopNavigationAction
        {...props}
        icon={RenderCartIcon}
        onPress={() => navigatorCard(props.refModalCartScreen)}
    />
);
const CartFillAction = (props) => (
    <TopNavigationAction
        {...props}
        icon={CartIconFill}
        onPress={() => navigatorCard(props.refModalCartScreen)}
    />
);
export const RightControls = ({ refModalCartScreen }) => (
    <>
        <SearchAction />
        <CartAction refModalCartScreen={refModalCartScreen}/>
    </>
)
export const CartControls = ({ refModalCartScreen }) => (
    <>
        <CartAction refModalCartScreen={refModalCartScreen}/>
    </>
)
export const CartFillControls = ({ refModalCartScreen }) => (
    <>
        <CartFillAction refModalCartScreen={refModalCartScreen} />
    </>
)

