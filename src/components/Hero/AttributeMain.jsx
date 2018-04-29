import React from 'react';
import { shape, bool, string, number } from 'prop-types';
import styled from 'styled-components';

import constants from '../constants'

const Wrapper = styled.div`
  flex: 1 1 0;
  padding: 0 16px;
  display: flex;
  align-items: center;

  &:first-child {
    padding-left: 0;
  }

  &:last-child {
    padding-right: 0;
  }
`;

const AttributeDot = styled.div`
  background: ${props => constants.colorAttributes[props.attribute]};
  border-radius: 50%;
  flex-shrink: 0;
  height: 8px;
  margin-right: 8px;
  width: 8px;
`

const AttributeValue = styled.div`
  color: ${props => ((props.isPrimary) ? constants.colorAttributes[props.attribute] : constants.primaryTextColor)};
  flex-shrink: 0;
  font-size: 12px;
  font-weight: 600;
  line-height: 1;
`

const AttributeMain = ({
  style, attribute, isPrimary, base, gain
}) => (
  <Wrapper style={style}>
    <AttributeDot attribute={attribute} />
    <AttributeValue attribute={attribute} isPrimary={isPrimary}>{base} + {gain}</AttributeValue>
  </Wrapper>
);

AttributeMain.propTypes = {
  style: shape({}),
  attribute: string,
  isPrimary: bool,
  base: number,
  gain: number
};

export default AttributeMain;
