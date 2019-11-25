import React from 'react';

const InputLabel = ({ labelName, name, typeOfText, placehoder, value, onChange}) => (
    <label>
            {labelName}
            <input
              type={typeOfText}
              placeholder={placehoder}
              className="form-control"
              value={value}
              name={name}
              onChange={onChange}
            />
    </label>
);

export default InputLabel;