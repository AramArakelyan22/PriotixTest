import React from 'react';
import styled from 'styled-components';


const ItemWrapper = styled.div(props => ({
  display: "flex",
  flex: 1,
  alignItems: "center",
  position: "relative",
  padding: "15px 10px",
  backgroundColor: props.deletable ? "#ffffff" : "transparent",
  maxWidth: "414px",
  width: "100%",
  height: "100%",
  cursor: "pointer",
  boxSizing: "border-box",
  maxHeight: "95px",
  marginBottom: props.deletable ? "20px" : "0",
  '@media(max-width: 455px)': {
      flexDirection: "column",
      boxSizing: "content-box",
      maxHeight: "none",
      display: "block",
      padding: 0
    }
  }))
;

const ImageWrapper = styled.div`
  height: 94px;
  width: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media(max-width: 455px) {
      margin: 0 auto;
      height: auto
    }
`;

const ItemTitle = styled.h2`
  margin: 0;
  font-weight: 800;
  max-width: 320px;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  @media(max-width: 455px) {
      white-space: wrap;
      max-width: 320px;
      text-align: center;
    }
`;
const TitleWrapper = styled.div`
  margin-left: 15px;
  @media(max-width: 455px) {
      margin: 0;
      text-align: center
    }
`
const ItemDesc = styled.p`
    margin:15px 0 0 15px
    width: 100%;
    max-width: 300px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    @media(max-width: 455px) {
      white-space: wrap;
      margin: 0;
      text-align: center;
    }
`;

const ItemImage = styled.img`
  display: block;
  width: 100%;
  height: auto;
`;

const DeleteButton = styled.button`
  position: absolute;
  right: -14px;
  top: -7px;
  background-color: transparent;
  border: 1px solid grey;
   border-radius: 50%;
   outline: none;
   cursor: pointer;
   background-color: aliceblue;
`;

export const TournamentItem = (props) => {

  const {
    id,
    image,
    title,
    description,
  } = props.item;

  const {
    deleteTournament,
    deletable
  } = props;

  return(
    <ItemWrapper deletable={deletable} >
      {
        deletable ? <DeleteButton onClick={() => deleteTournament(id)}>X</DeleteButton> : null
      }
      <ImageWrapper>
        <ItemImage src={image} />
      </ImageWrapper>
      <TitleWrapper>
        <ItemTitle>{title}</ItemTitle>
        <ItemDesc>{description}</ItemDesc>
      </TitleWrapper>
    </ItemWrapper>
)}