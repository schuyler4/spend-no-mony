import React from 'react';

function Text(props) {
  return <p style={styles}>{props.children}</p>;
}

const styles = {
  fontSize: 30,
  fontFamily: 'arial'
}

export default Text;
