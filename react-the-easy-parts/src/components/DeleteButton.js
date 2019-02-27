import React from 'react';
import styled from 'styled-components'

const Button = styled.div`
   background-color: pink;
  border: none;
  padding: 7px 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1rem;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 5px;
  width: 320px;
  text-shadow: none;
`


export default function DeleteButton(props) {
  return (
    <Button onClick={() => props.deleteCardData()} id="delete-button">
      Delete all creatures. Are you sure? This can not be un-done!
    </Button>
  );
}
