import React, { useState } from 'react';
import './MultiStepForm.css';

const MultiStepForm = () => {
  // Step 1 fields
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  // Step 2 fields
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  // Step 3 fields
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [zipcode, setZipcode] = useState('');

  const [currentStep, setCurrentStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const handleNext = () => {
    // Validate current step's input fields before moving to the next step
    if (currentStep === 1 && (!firstName || !lastName)) {
      alert('Please fill all fields in Step 1');
      return;
    }
    if (currentStep === 2 && (!email || !phone)) {
      alert('Please fill all fields in Step 2');
      return;
    }
    if (currentStep === 3 && (!address || !city || !zipcode)) {
      alert('Please fill all fields in Step 3');
      return;
    }

    // Move to the next step
    setCurrentStep(currentStep + 1);
  };

  const handlePrevious = () => {
    // Move to the previous step
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = () => {
    // Log the form data to the console
    console.log({
      firstName,
      lastName,
      email,
      phone,
      address,
      city,
      zipcode
    });
    // Set the form as submitted
    setSubmitted(true);
  };

  return (
    <div className="multi-step-form-container">
      <h2>Multi-Step Form</h2>
      {currentStep === 1 && (
        <div className="step">
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
      )}
      {currentStep === 2 && (
        <div className="step">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="tel"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
      )}
      {currentStep === 3 && (
        <div className="step">
          <input
            type="text"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <input
            type="text"
            placeholder="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <input
            type="text"
            placeholder="Zipcode"
            value={zipcode}
            onChange={(e) => setZipcode(e.target.value)}
          />
        </div>
      )}
      {submitted && (
        <div className="thank-you">Thank You!</div>
      )}
      {!submitted && (
        <div className="buttons">
          {currentStep > 1 && (
            <button className="previous" onClick={handlePrevious}>Previous</button>
          )}
          {currentStep < 3 ? (
            <button className="next" onClick={handleNext}>Next</button>
          ) : (
            <button className="next" onClick={handleSubmit}>Submit</button>
          )}
        </div>
      )}
    </div>
  );
};

export default MultiStepForm;




// import React, { useState } from 'react';
// import './MultiStepForm.css';

// const MultiStepForm = () => {
//   // Step 1 fields
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');

//   // Step 2 fields
//   const [email, setEmail] = useState('');
//   const [phone, setPhone] = useState('');

//   // Step 3 fields
//   const [address, setAddress] = useState('');
//   const [city, setCity] = useState('');
//   const [zipcode, setZipcode] = useState('');

//   const [currentStep, setCurrentStep] = useState(1);

//   const handleNext = () => {
//     // Validate current step's input fields before moving to the next step
//     if (currentStep === 1 && (!firstName || !lastName)) {
//       alert('Please fill all fields in Step 1');
//       return;
//     }
//     if (currentStep === 2 && (!email || !phone)) {
//       alert('Please fill all fields in Step 2');
//       return;
//     }
//     if (currentStep === 3 && (!address || !city || !zipcode)) {
//       alert('Please fill all fields in Step 3');
//       return;
//     }

//     // Move to the next step
//     setCurrentStep(currentStep + 1);
//   };

//   const handlePrevious = () => {
//     // Move to the previous step
//     setCurrentStep(currentStep - 1);
//   };

//   const handleSubmit = () => {
//     // Log the form data to the console
//     console.log({
//       firstName,
//       lastName,
//       email,
//       phone,
//       address,
//       city,
//       zipcode
//     });
//     // Redirect to thanks page or show a thanks message
//     // For now, just resetting the form fields
//     setFirstName('');
//     setLastName('');
//     setEmail('');
//     setPhone('');
//     setAddress('');
//     setCity('');
//     setZipcode('');
//     setCurrentStep(1);
//   };

//   return (
//     <div className="multi-step-form-container">
//       <h2>Multi-Step Form</h2>
//       {currentStep === 1 && (
//         <div className="step">
//           <input
//             type="text"
//             placeholder="First Name"
//             value={firstName}
//             onChange={(e) => setFirstName(e.target.value)}
//           />
//           <input
//             type="text"
//             placeholder="Last Name"
//             value={lastName}
//             onChange={(e) => setLastName(e.target.value)}
//           />
//         </div>
//       )}
//       {currentStep === 2 && (
//         <div className="step">
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <input
//             type="tel"
//             placeholder="Phone"
//             value={phone}
//             onChange={(e) => setPhone(e.target.value)}
//           />
//         </div>
//       )}
//       {currentStep === 3 && (
//         <div className="step">
//           <input
//             type="text"
//             placeholder="Address"
//             value={address}
//             onChange={(e) => setAddress(e.target.value)}
//           />
//           <input
//             type="text"
//             placeholder="City"
//             value={city}
//             onChange={(e) => setCity(e.target.value)}
//           />
//           <input
//             type="text"
//             placeholder="Zipcode"
//             value={zipcode}
//             onChange={(e) => setZipcode(e.target.value)}
//           />
//         </div>
//       )}
//       <div className="buttons">
//         {currentStep > 1 && (
//           <button className="previous" onClick={handlePrevious}>Previous</button>
//         )}
//         {currentStep < 3 ? (
//           <button className="next" onClick={handleNext}>Next</button>
//         ) : (
//           <button className="next" onClick={handleSubmit}>Submit</button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default MultiStepForm;
