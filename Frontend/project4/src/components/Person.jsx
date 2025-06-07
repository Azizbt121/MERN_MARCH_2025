import { useState } from 'react';

const Person = (props) => {
  const { firstName, lastName, age: initialAge, hairColor } = props;
  const [age, setAge] = useState(initialAge);

  const handleBirthday = () => {
    setAge(age + 1);
  };

  return (
    <fieldset>
      <h1>{firstName} {lastName}</h1>
      <h3>Age: {age}</h3>
      <h3>Hair Color: {hairColor}</h3>
      <button onClick={handleBirthday}>Birthday Button for {firstName}</button>
    </fieldset>
  );
};

export default Person;
