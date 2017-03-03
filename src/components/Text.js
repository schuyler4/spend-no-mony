import React from 'react';

const styles = {
  fontSize: 30,
  fontFamily: 'arial'
}

function Text(props) {
  return <p style={styles}>{props.children}</p>;
}

export default Text;
