import './index.scss'
import { useState } from 'react'
import { View } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import { AtTabs, AtTabsPane } from 'taro-ui'

export default function Index() {

  useLoad(() => {
    console.log('Page loaded.')
  })


  return (
    <View className='at-row'>
      <View className='at-col at-col-3 menu-tabs'>A</View>
      <View className='at-col at-col-7 menu-main'>B</View>
    </View>
  )
}
