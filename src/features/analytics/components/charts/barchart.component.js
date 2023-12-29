import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import { Dimensions } from "react-native";
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;


const BarchartComponent = () => {
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
            {
                data: [20, 45, 28, 80, 99, 46],
            },
        ],
    };

    return (
        <View style={styles.container}>
            <BarChart
                data={data}
                width={screenWidth * 0.90}
                height={screenHeight * 0.40}
                withVerticalLabels={true}
                withHorizontalLabels={true}
                yAxisLabel="UGX "
                chartConfig={chartConfig}
                verticalLabelRotation={60}
                showBarTops={true}
            />
        </View>
    )
}
// rgb(156,39,176)
// rgb(76, 175, 80)
// rgb(27,94,32)
const chartConfig = {
    backgroundGradientFrom: '#fff',
    backgroundGradientTo: '#fff',
    decimalPlaces: 0,
    color: (opacity = 1) => `rgba(27,94,32, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    style: {
        borderRadius: 10,
    },
    propsForDots: {
        r: '6',
        strokeWidth: '2',
        stroke: '#ffa726',
    },
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    chartTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
});

export default BarchartComponent;