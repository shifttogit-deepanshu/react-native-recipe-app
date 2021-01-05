import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import {HeaderButton} from 'react-navigation-header-buttons';

const HeaderIconButton = (props) => (
  <HeaderButton IconComponent={Ionicons} iconSize={23} color="white" {...props} />
);

export default HeaderIconButton