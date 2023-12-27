

import React from 'react'
import { StatusBar, StyleSheet, Text, View, SafeAreaView, Platform } from 'react-native';
import { Searchbar } from 'react-native-paper';
import RestaurantInfoComponents from '../components/restaurant-info.components';
import styled from 'styled-components';






const SafeArea = styled(SafeAreaView)`
flex: 1;
${StatusBar.currentHeight && 'paddingTop: ' + StatusBar.currentHeight + 'px'};
background-color:  ${props => props.theme.colors.bg.primary};
`;

const SearchContainer = styled(View)`
padding:  ${props => props.theme.space[4]};
padding-bottom: ${props => props.theme.space[0]};
background-color:  ${props => props.theme.colors.bg.primary};
`;

const SearchComp = styled(Searchbar)`
background-color:  ${props => props.theme.colors.bg.primary};
`;

const RestaurantListContainer = styled(View)`
padding: ${props => props.theme.space[3]};
`;


const RestaurantsScreen = () => {
    return (
        <>
            <SafeArea>
                <SearchContainer>
                    <SearchComp elevation={5} placeholder='Search...' />
                </SearchContainer>
                <RestaurantListContainer>
                    <RestaurantInfoComponents />
                </RestaurantListContainer>
            </SafeArea>

        </>
    )
}

export default RestaurantsScreen
