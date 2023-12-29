

import React, { useContext } from 'react'
import { ActivityIndicator, Searchbar, MD2Colors } from 'react-native-paper';
import RestaurantInfoComponents from '../components/restaurant-info.components';
import styled from 'styled-components';
import SpacerComponent from '../../../components/spacer/spacer.component';
import { SafeArea } from '../../../components/utility/safe-area.component';
import { RestaurantsContext } from '../../../services/restaurants/restaurants.context';
import { Search } from '../components/search.component';


export const RestaurantList = styled.FlatList.attrs({
    contentContainerStyle: {
        padding: 20
    }
})``;

const LoadingContainer = styled.View`
position:absolute;
top:50%;
left:50%;
`;
const Loading = styled(ActivityIndicator)`
margin-left: -25px;
`;


const RestaurantsScreen = () => {
    const { restaurants, isLoading, error } = useContext(RestaurantsContext);
    return (
        <>
            <SafeArea>
                {
                    isLoading && (
                        <LoadingContainer>
                            <Loading color={MD2Colors.blue300} animating={true} size={50}></Loading>
                        </LoadingContainer>
                    )
                }
                <Search />
                <RestaurantList
                    data={restaurants}
                    renderItem={(item) => {

                        return (<SpacerComponent position='bottom' size='large'>
                            <RestaurantInfoComponents restaurant={item} />
                        </SpacerComponent>)
                    }
                    }
                    keyExtractor={(item) => item.name}

                >

                </RestaurantList>

            </SafeArea>

        </>
    )
}

export default RestaurantsScreen
