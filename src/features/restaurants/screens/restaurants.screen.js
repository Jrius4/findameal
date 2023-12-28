

import React from 'react'
import { View, FlatList } from 'react-native';
import { Searchbar } from 'react-native-paper';
import RestaurantInfoComponents from '../components/restaurant-info.components';
import styled from 'styled-components';
import SpacerComponent from '../../../components/spacer/spacer.component';
import { SafeArea } from '../../../components/utility/safe-area.component';









export const SearchContainer = styled(View)`
padding:  ${props => props.theme.space[4]};
padding-bottom: ${props => props.theme.space[0]};
margin-bottom:${props => props.theme.space[3]};
background-color:  ${props => props.theme.colors.bg.primary};
`;

export const SearchComp = styled(Searchbar)`
background-color:  ${props => props.theme.colors.bg.primary};
font-family: ${props => props.theme.fonts.body};

`;


export const RestaurantList = styled(FlatList).attrs({
    contentContainerStyle: {
        padding: 20
    }
})``;


const RestaurantsScreen = () => {
    return (
        <>
            <SafeArea>
                <SearchContainer>
                    <SearchComp elevation={5} placeholder='Search...' />
                </SearchContainer>
                <RestaurantList
                    data={[{ name: 1 }, { name: 2 }, { name: 3 }, { name: 4 }, { name: 5 }]}
                    renderItem={() =>
                        <SpacerComponent position='bottom' size='large'>
                            <RestaurantInfoComponents />
                        </SpacerComponent>
                    }
                    keyExtractor={(item) => item.name}

                >

                </RestaurantList>

            </SafeArea>

        </>
    )
}

export default RestaurantsScreen
