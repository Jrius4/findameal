import { View, StyleSheet } from 'react-native'
import React from 'react';
import { SvgXml } from 'react-native-svg'
import star from './../../../../assets/star'
import open from './../../../../assets/open'
import SpacerComponent from '../../../components/spacer/spacer.component';
import { Text } from '../../../components/typography/text.component';

import { RatingRow, RestaurantCard, RestaurantCardCover, Icon, Info, Address, Section, SectionEnd, Open } from './restuarant-info-card.styles';

const RestaurantInfoComponents = ({ restaurant = {} }) => {
    console.log({ restaurant })

    const {
        name, icon = 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png', photos = ["https://www.foodiesfeed.com/wp-content/uploads/2023/05/juicy-cheeseburger.jpg", 'https://www.foodiesfeed.com/wp-content/uploads/2023/06/pouring-honey-on-pancakes.jpg', 'https://www.foodiesfeed.com/wp-content/uploads/2023/04/pouring-syrup-over-waffles-with-berries.jpg',], address = 'Julius Avenue', isOpenNow = true, rating = 0, isClosedTemporarily = true
    } = restaurant.item;



    const ratingArray = Array.from(new Array(Math.floor(rating)));
    return (
        <View>
            <RestaurantCard elevation={1}>
                <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
                <Info>
                    <Text variant="label" > {name}</Text>
                    <Section>
                        <RatingRow>
                            {ratingArray.map((i, k) => (<SvgXml key={k} xml={star} width={20} height={20} />))}

                        </RatingRow>
                        <SectionEnd>
                            {isClosedTemporarily && (<Text variant="error">
                                CLOSED TEMPORARILY
                            </Text>)}
                            <SpacerComponent position='left' size='large'>
                                {isOpenNow && <Open xml={open} width={20} height={20} />}
                            </SpacerComponent>

                            <SpacerComponent position='left' size='large'>
                                <Icon src={icon} />
                            </SpacerComponent>
                        </SectionEnd>
                    </Section>


                    <Address > {address}</Address>
                </Info>
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