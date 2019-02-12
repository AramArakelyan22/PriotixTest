import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { deleteTournament } from "../../../actions";
import {TournamentItem} from "../../common/TournamentItem";


const Wrapper = styled.div`
  margin-right: 40px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  
  @media (max-width: 910px) {
    display: block
    margin: 0 auto;
    justify-content: center;
  }
`;

const Heading = styled.p`
  text-align: center
  font-weight: 800
`;


class MyTournament extends Component {

  deleteTournament = id => {
    this.props.deleteTournament(id)
  };

  render() {
    return (
      <Wrapper>
        <Heading>My tournaments</Heading>
        <div>
          {this.props.addedTournaments && this.props.addedTournaments.map(item => (
              <TournamentItem
                key={item.id}
                item={item}
                deleteTournament={this.deleteTournament}
                deletable
              />
            )
          )}
        </div>
      </Wrapper>
    )

  }
}

const mapStateToProps = state => {
  return {
    addedTournaments: state.addedTournaments
  }
};

export default connect(mapStateToProps, {deleteTournament})(MyTournament)