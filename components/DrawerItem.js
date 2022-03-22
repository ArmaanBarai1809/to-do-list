import { View, Text } from 'react-native'
import React from 'react'

export default function DrawerItem() {
     [
        {
            name:'Profile',
            iconType:'Material',
            iconName:'face-profile'
        },
        {
            name:'Settings',
            iconType:'Feather',
            iconName:'settings'
        },
        {
            name:'Task',
            iconType:'Task',
            iconName: 'Task'
        }
     ]
  return (
    <View>
      <Text>DrawerItem</Text>
    </View>
  )
}