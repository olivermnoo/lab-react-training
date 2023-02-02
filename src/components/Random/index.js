import style from "./style.module.css";

export function Random(props) {
  let minNumber = props.min;
  let maxNumber = props.max;
  let randomNumber = Math.floor(
    Math.random() * (maxNumber - minNumber + 1) + minNumber
  );

  return (
    <div className={style.box}>
      <p className={style.content}>
        Random value between {minNumber} and {`${maxNumber} =>`} {randomNumber}
      </p>
    </div>
  );
}
