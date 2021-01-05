import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import {HeaderButton} from 'react-navigation-header-buttons';

const HeaderButton = (props) => (
  <HeaderButton IconComponent={Ionicons} iconSize={23} color="blue" {...props} />
);

export default HeaderButton