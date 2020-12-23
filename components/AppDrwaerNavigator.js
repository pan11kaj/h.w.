import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import CheckHomeWork from '../TeachersScreen/CheckHomeWork';
import UploadHomeWork from '../TeachersScreen/UploadHomeWork';
import CustomSideBarMenu from '../components/CustomSideBarMenu';


export const AppDrawerNavigator = createDrawerNavigator({
   checkHomeWork:{
     screen:CheckHomeWork
   },
   UploadHomeWork:{
     screen:UploadHomeWork
   }
      },
        {
          contentComponent:CustomSideBarMenu
        },
        {
          initialRouteName : 'checkHomeWork'
        })



