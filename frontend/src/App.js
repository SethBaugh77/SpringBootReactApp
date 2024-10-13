import React, { useState } from 'react';
import './App.css';

function App() {
  // State for text fields and validation
  const [rent, setRent] = useState('');
  const [split1, setSplit1] = useState('');
  const [split2, setSplit2] = useState('');
  const [errors, setErrors] = useState({
    rent: '',
    split1: '',
    split2: ''
  });

  // Validation function for rent and splits
  const validateInputs = () => {
    let valid = true;
    const newErrors = { rent: '', split1: '', split2: '' };

    // Rent validation: Must be a valid double
    if (!rent || isNaN(rent)) {
      newErrors.rent = 'Please enter a valid number for rent';
      valid = false;
    }

    // Split1 validation: Must be a decimal between 0 and 1
    if (!split1 || isNaN(split1) || Number(split1) < 0 || Number(split1) > 1) {
      newErrors.split1 = 'Please enter a valid decimal between 0 and 1 for split 1';
      valid = false;
    }

    // Split2 validation: Must be a decimal between 0 and 1
    if (!split2 || isNaN(split2) || Number(split2) < 0 || Number(split2) > 1) {
      newErrors.split2 = 'Please enter a valid decimal between 0 and 1 for split 2';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  // Handler for button click
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate inputs before sending the request
    if (!validateInputs()) {
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:8080/calculate?rent=${rent}&split1=${split1}&split2=${split2}`
      );
      const data = await response.json();


      alert(`Rent1: ${data.cost1} Rent2: ${data.cost2}`);
    } catch (error) {
      console.error('Error:', error);
    }

  };

  return (
    <div className="App">
      <h1>Enter Your Rent and Two Decimals to Calculate Rent Costs</h1>

      {/* Rent field with $ prepended */}
      <div>
        <label>
          Rent: $
          <input
            type="text"
            value={rent}
            onChange={(e) => setRent(e.target.value)}
          />
        </label>
        {errors.rent && <p className="error">{errors.rent}</p>}
      </div>

      {/* Split1 field with . prepended */}
      <div>
        <label>
          Split 1:
          <input
            type="text"
            value={split1}
            onChange={(e) => setSplit1(e.target.value)}
          />
        </label>
        {errors.split1 && <p className="error">{errors.split1}</p>}
      </div>

      {/* Split2 field with . prepended */}
      <div>
        <label>
          Split 2:
          <input
            type="text"
            value={split2}
            onChange={(e) => setSplit2(e.target.value)}
          />
        </label>
        {errors.split2 && <p className="error">{errors.split2}</p>}
      </div>

      {/* Submit button */}
      <div>
        <button onClick={handleSubmit} disabled={!rent || !split1 || !split2}>Submit</button>
      </div>
    </div>
  );
}

export default App;
