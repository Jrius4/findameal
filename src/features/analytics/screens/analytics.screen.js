import { View, Text } from 'react-native'
import React from 'react'
import { SafeArea } from '../../../components/utility/safe-area.component'
import AnalyticsInfoComponent from '../components/analytics-info.component'

const AnalyticsScreen = () => {
  return (
    <SafeArea>
      <AnalyticsInfoComponent />
    </SafeArea>
  )
}

export default AnalyticsScreen