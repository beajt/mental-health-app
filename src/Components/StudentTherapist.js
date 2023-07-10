function StudentTherapist() {
  return (
    <div className="flexMain">
      <ul>
        <li>
          <a href={`https://referrals.psychotherapyandcounseling.ca/`}>
            Ontario Psychotherapy & Counseling Program
          </a>
        </li>
        <li>Sliding scale $20-$45/hour</li>
      </ul>
      <ul>
        <li>
          <a href={`https://gestalt.on.ca/low-cost-therapy-clinic/`}>
            Gestalt Student Clinic
          </a>
        </li>
        <li>$40/session</li>
      </ul>
      <ul>
        <li>
          <a href={`https://www.tirp-lowcost-therapy.ca/student-therapists`}>
            Toronto Institute for Relational Psychotherapy
          </a>
        </li>
        <li>$40/session</li>
      </ul>
    </div>
  );
}

export default StudentTherapist;
