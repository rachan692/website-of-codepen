import React, { useState } from 'react';
import { FaEnvelope, FaEye, FaEyeSlash } from 'react-icons/fa';

const UserAuthInput = ({ label, placeholder, isPass, setStateFunction, Icon }) => {
  const [value, setValue] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev); // Toggle password visibility
  };

  return (
    <div className="flex flex-col items-center justify-start gap-1 w-full">
      <label className="text-sm text-gray-200">{label}</label>
      <div className="flex items-center justify-center gap-3 w-full md:w-96 rounded px-4 py-1 bg-gray-300">
        {Icon} {/* Display the passed Icon (email, password icon, etc.) */}
        <input
          type={isPass && !showPassword ? 'password' : 'text'} // Show password if showPassword is true
          placeholder={placeholder}
          className="flex-1 h-full py-2 outline-none border-none bg-transparent text-text555 text-lg"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            setStateFunction(e.target.value); // Pass the value back to parent component
          }}
        />

        {/* Password Visibility Toggle */}
        {isPass && (
          <div className="cursor-pointer" onClick={handleTogglePassword}>
            {showPassword ? (
              <FaEyeSlash className="text-text555 text-2xl" />
            ) : (
              <FaEye className="text-text555 text-2xl" />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default UserAuthInput;
