import React from 'react';
import { HeaderButton } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';
import Color from '../constants/Color';
import { Platform } from 'react-native';

const CuatomHeaderButton = props => {
    return <HeaderButton
        {...props}
        IconComponent={Ionicons}
        iconSize={23}
        color={Platform.OS === 'android' ? 'white' : Color.primaryColor}
    />
}
export default CuatomHeaderButton