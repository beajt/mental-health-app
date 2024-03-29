function InPerson() {
  return (
    <div className="flexMain">
      <h2>Want to chat with someone today? (In Person)</h2>
      <h3>Strides Toronto (Ages up to 29) </h3>
      <p>Number - 123-4567</p>
      {/* add contact number - ensure contact number can be clicked */}
      <ul>
        <li>Monday: 2 PM – 8 PM</li>
        <li>Tuesday: 9:30 AM – 5 PM</li>
        <li>Thursday: 12 Noon – 8 PM</li>
        <li>
          *Registration closed 1h 30 mins prior to the end of service hours.
        </li>
      </ul>
      <h3>Yorktown Family Services (Ages up to 29) </h3>
      <p>Number - 123-4567</p>
      <ul>
        <li>Monday: 11 AM to 4 PM</li>
        <li>Tuesday: 3 PM to 8 PM</li>
        <li>Wednesday: 3 PM to 8 PM</li>
        <li>Thursday: 11 AM to 4 PM</li>
        <li>Friday: 10:30 AM to 3:30 PM</li>
        <li>
          *Registration closed 1h 30 mins prior to the end of service hours.
        </li>
      </ul>
    </div>
  );
}

export default InPerson;
