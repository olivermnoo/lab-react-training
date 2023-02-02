import style from "./style.module.css";

export function Rating(props) {
  let stars;
  if (+props.children === 0) {
    stars = "☆☆☆☆☆";
  } else if (+props.children < 1.5) {
    stars = "★☆☆☆☆";
  } else if (+props.children < 2.5) {
    stars = "★★☆☆☆";
  } else if (+props.children < 3.5) {
    stars = "★★★☆☆";
  } else if (+props.children < 4.5) {
    stars = "★★★★☆";
  } else {
    stars = "★★★★★";
  }

  return <div>{stars}</div>;
}
