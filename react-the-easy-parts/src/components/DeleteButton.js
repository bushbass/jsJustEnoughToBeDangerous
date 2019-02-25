import React from 'react';

export default function DeleteButton(props) {
  return (
    <div onClick={() => props.deleteCardData()} id="delete-button">
      Delete all creatures. Are you sure? This can not be un-done!
    </div>
  );
}
