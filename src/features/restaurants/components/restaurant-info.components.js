import { View, Text, StyleSheet } from 'react-native'
import React from 'react';
import { Card } from 'react-native-paper'
import { spacing } from '../../../infrasructure/theme/spacing';
import styled from 'styled-components/native';
import { colors } from '../../../infrasructure/theme/colors';
import { fontWeight, sizes } from '../../../infrasructure/theme/sizes';
const RestaurantCard = styled(Card)`
background-color:  ${props => props.theme.colors.bg.primary};
`;

const RestaurantCardCover = styled(Card.Cover)`
background-color: ${props => props.theme.colors.bg.primary};
padding: ${props => props.theme.space[3]};
padding-bottom: 0;
`;

const RestaurantCardTitle = styled(Text)`
color:  ${props => props.theme.colors.ui.primary};
font-weight: ${props => props.theme.fontWeights.bold};
font-size: ${props => props.theme.fontSizes.title};
padding:${props => props.theme.space[3]} ${props => props.theme.space[3]};
`;

const RestaurantInfoComponents = ({ restaurant = {} }) => {
    const {
        name = 'Some Restaurant', icon, photos = ["https://www.foodiesfeed.com/wp-content/uploads/2023/05/juicy-cheeseburger.jpg", 'https://www.foodiesfeed.com/wp-content/uploads/2023/06/pouring-honey-on-pancakes.jpg', 'https://www.foodiesfeed.com/wp-content/uploads/2023/04/pouring-syrup-over-waffles-with-berries.jpg',], address = 'Julius Avenue', isOpenNow = true, rating = 4, isClosedTemporarily
    } = restaurant;
    return (
        <View>
            <RestaurantCard elevation={5}>
                <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
                <RestaurantCardTitle > {name}</RestaurantCardTitle>
            </RestaurantCard>
        </View>

    )
}

const styles = StyleSheet.create({
    title: {
        color: 'yellow'
    }
})



export default RestaurantInfoComponents