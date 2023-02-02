import style from "./style.module.css";

export function DriverCard(props) {
  let stars;
  if (+props.rating === 0) {
    stars = "☆☆☆☆☆";
  } else if (+props.rating < 1.5) {
    stars = "★☆☆☆☆";
  } else if (+props.rating < 2.5) {
    stars = "★★☆☆☆";
  } else if (+props.rating < 3.5) {
    stars = "★★★☆☆";
  } else if (+props.rating < 4.5) {
    stars = "★★★★☆";
  } else {
    stars = "★★★★★";
  }

  return (
    <div className={style.card}>
      <div>
        <img src={props.img} className={style.imageDriver} />
      </div>
      <div>
        <div className={style.name}>{props.name}</div>
        <div className={style.stars}>{stars}</div>
        <div className={style.car}>
          {props.car.model} - {props.car.licensePlate}
        </div>
      </div>
    </div>
  );
}
