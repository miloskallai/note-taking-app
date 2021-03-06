import React from 'react';
import { Link } from 'react-router-dom';

const Input = ({ onChange, titleValue, textValue }) => {
  return (
    <div className='input-container'>
      <label className='input-label' htmlFor='note_title'>
        title
      </label>
      <input
        className='form-control'
        type='text'
        id='note_title'
        name='note_title'
        label='note_title'
        onChange={onChange}
        value={titleValue}
      />

      <label className='input-label' htmlFor='note_text'>
        note
      </label>
      <textarea
        className='form-control'
        onChange={onChange}
        label='note_text'
        id='note_text'
        name='note_text'
        value={textValue}
        rows='30'
      />

      <div className='btn-container'>
        <Link className='link' to='/'>
          <button className='btn btn-danger'>Discard</button>
        </Link>
        <button className='btn btn-primary'>Save</button>
      </div>
    </div>
  );
};

export default Input;
