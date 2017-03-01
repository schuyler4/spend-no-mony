import React from 'react';
import Text from './Text';

function Item(props) {
  return (
    <div>
      <Text>{ props.item.title }</Text>
      <Text>{ props.item.description }</Text>
    </div>
  );
}

export default Item;
