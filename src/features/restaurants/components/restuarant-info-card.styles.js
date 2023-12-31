import { Card } from "react-native-paper";
import styled from "styled-components/native";
import { SvgXml } from 'react-native-svg'
import { Text } from "../../../components/typography/text.component";


export const RestaurantCard = styled(Card)`
background-color:  ${props => props.theme.colors.bg.primary};
`;

export const RestaurantCardCover = styled(Card.Cover)`
background-color: ${props => props.theme.colors.bg.primary};
padding: ${props => props.theme.space[3]};
padding-bottom: 0;
`;
export const Info = styled.View`
padding:${props => props.theme.space[3]} ${props => props.theme.space[3]};
color:  ${props => props.theme.colors.ui.primary};
`
export const Address = styled(Text)`
font-family: ${props => props.theme.fonts.body};
font-size: ${props => props.theme.fontSizes.caption};
`;

export const Icon = styled.Image`
width: 15px;
height: 15px;
`;


export const Section = styled.View`
flex-direction: row;
align-items: center;
`;
export const SectionEnd = styled.View`
flex: 1;
flex-direction: row;
justify-content: flex-end;
`;

export const Open = styled(SvgXml)`
flex-direction: row;
`;


export const RatingRow = styled.View`
flex-direction:row;
padding-top:${props => props.theme.space[2]};
padding-bottom:${props => props.theme.space[2]};
`;
