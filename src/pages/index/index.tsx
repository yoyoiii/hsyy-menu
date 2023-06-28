import './index.scss'
import { View } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import { AtButton } from 'taro-ui'

export default function Index() {

  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className='index'>
        <AtButton type='primary'>按钮文案</AtButton>
    </View>
  )
}
