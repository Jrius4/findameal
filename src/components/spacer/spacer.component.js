import React from 'react';

import styled, { useTheme } from 'styled-components';
const positionVariant = {
    top: 'margin-top',
    left: 'margin-left',
    bottom: 'margin-bottom',
    right: 'margin-right',
}

const sizeVariant = {
    small: 1,
    medium: 2,
    large: 3,
}

const getVariant = (position, size, theme) => {
    const sizeIndex = sizeVariant[size];
    const property = positionVariant[position];
    const sizeValue = theme.space[sizeIndex];
    return `${property}:${sizeValue};`;
}

const SpacerView = styled.View`
${({ variant }) => variant}
`
const SpacerComponent = ({ position, size, children }) => {
    const theme = useTheme();
    const variant = getVariant(position, size, theme);
    return (<SpacerView variant={variant}>
        {children}
    </SpacerView>)
}

SpacerComponent.defaultProps = {
    position: 'top',
    size: 'small',
}

export default SpacerComponent