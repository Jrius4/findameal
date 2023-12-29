import { ScrollView, View } from 'react-native'
import React from 'react'
import { AnalyticsCard, AnalyticsInfo } from './analytics-info.styles'
import { Text } from '../../../components/typography/text.component'
import BarchartComponent from './charts/barchart.component'
import SpacerComponent from '../../../components/spacer/spacer.component'
import PieChartComponent from './charts/piechart.component'

const AnalyticsInfoComponent = () => {
  return (
    <ScrollView>


      <AnalyticsInfo>
        <Text variant='label'>Monthly Sales Chart (in Millions)</Text>
        <SpacerComponent position='bottom' size='medium' />
        <BarchartComponent />
      </AnalyticsInfo>
      <SpacerComponent position='bottom' size='large' />
      <AnalyticsInfo>
        <Text variant='label'>Monthly Sales Chart (in Millions)</Text>
        <SpacerComponent position='bottom' size='medium' />
        <PieChartComponent />
      </AnalyticsInfo>



    </ScrollView>
  )
}

export default AnalyticsInfoComponent