import React from 'react';
import Autosuggest from 'react-autosuggest';
import { connect } from 'react-redux'

import {
  getTournaments,
  addTournament,
  addRequestError,
} from "../../../actions/index";
import { TournamentItem } from '../../common/TournamentItem';
import { theme } from './theme.css';




class AutoSuggesttion extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
    };
  }
  //The method for fetching Tournamnets
   getSuggestions = value => {

    this.props.getTournaments(value);
  };


  //
  getSuggestionValue = suggestion => {
    return suggestion.title
  };

  onSuggestionSelected = (event, {suggestion} ) => {
    this.props.addTournament(suggestion);
  }

  onChange = (event, { newValue }) => {
    if(!newValue.trim()) {
      this.props.addRequestError({message: ""})
    }
    console.log("Value =>", newValue);
    this.setState({
      value: newValue
    });
  };

  renderSuggestion = suggestion => (
    <TournamentItem key={suggestion.id} item = {suggestion}/>
  );

  onSuggestionsFetchRequested = ({ value }) => {
    this.getSuggestions(value)
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  render() {
    const { value, suggestions } = this.state;
    const { addTournamentError, tournaments } = this.props;
    const inputProps = {
      placeholder: 'Type here to search tournament',
      value,
      onChange: this.onChange,
    };

    return (
      <div className="autosuggest-wrapper">
        <div className="wrappaer-container">
          <p className="error-message">{addTournamentError}</p>
          <Autosuggest
            theme={theme}
            suggestions={this.props.tournaments || []}
            onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
            onSuggestionsClearRequested={this.onSuggestionsClearRequested}
            getSuggestionValue={this.getSuggestionValue}
            onSuggestionSelected={this.onSuggestionSelected}
            renderSuggestion={this.renderSuggestion}
            inputProps={inputProps}

          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tournaments: state.tournaments,
    addTournamentError : state.addTournamentError,
  }
}

export default connect(mapStateToProps, {getTournaments, addTournament, addRequestError})(AutoSuggesttion)