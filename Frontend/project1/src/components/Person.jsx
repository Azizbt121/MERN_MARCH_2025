const Person = (props) => {
  const { firstName, lastName, age, hairColor } = props; 

  return (
    <fieldset>
      <h1>{firstName}, {lastName}</h1>
      <h3>Age: {age}</h3>
      <h3>Hair Color: {hairColor}</h3>
    </fieldset>
  );
};

export default Person;
