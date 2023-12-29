import { Card } from "react-native-paper";
import styled from "styled-components/native";
import { Dimensions } from "react-native";
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;


export const AnalyticsCard = styled(Card)`
background-color:  ${props => props.theme.colors.bg.primary};
margin:${props => props.theme.space[2]};
padding:${props => props.theme.space[2]};
width:${screenWidth * 0.95}px;
height:${screenHeight * 0.48}px;
`;

export const AnalyticsInfo = styled.View`
padding:${props => props.theme.space[3]} ${props => props.theme.space[3]};
color:  ${props => props.theme.colors.ui.primary};
`