import style from "./style.module.css";

export function IdCard(props) {
  const birthReturn = props.birth.toDateString();

  return (
    <div className={style.idCard}>
      <div className={style.boxImage}>
        <img src={props.picture} />
      </div>
      <div className={style.contentList}>
        <p className={style.content}>
          <strong>First Name: </strong>
          {props.firstName}
        </p>
        <p className={style.content}>
          <strong>Last Name: </strong>
          {props.lastName}
        </p>
        <p className={style.content}>
          <strong>Gender: </strong>
          {props.gender}
        </p>
        <p className={style.content}>
          <strong>Birth: </strong>
          {birthReturn}
        </p>
      </div>
    </div>
  );
}
