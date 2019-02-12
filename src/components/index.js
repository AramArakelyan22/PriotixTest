import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

import AutoSuggestion from './views/AutoSuggestion';
import MyTournament from './views/MyTournament';

const Wrapper = styled.div`
  display: flex;
  justify-content: evenly;
   @media (max-width: 910px) {
    flex-direction: column-reverse
    
  }
`;

class Apper extends Component {
  render() {
    return (
        <Wrapper>
          <MyTournament />
          <AutoSuggestion />
        </Wrapper>
    )
  }
}


export default Apper