import style from './style.module.css';

export function IdCard(props) {
  return (
    <div>
      <div>
        <img />
      </div>
      <div>
        <p>
          <strong>First Name:</strong>
          {props.firstName}
        </p>
        <p>
          <strong>Last Name:</strong>
          {props.lastName}
        </p>
        <p>
          <strong>Gender:</strong>
          {props.gender}
        </p>
        <p>
          <strong>First Name:</strong>
          {props.height}
        </p>
        <p>
          <strong>First Name:</strong>
          {props.firstName}
        </p>
      </div>
    </div>
  );
}
