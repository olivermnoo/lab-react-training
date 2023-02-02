import style from "./style.module.css";
import imgVisa from "../../assets/images/visa.png";
import imgMaster from "../../assets/images/mastercard.png";

export function CreditCard(props) {
  let imgCreditCard = 0;
  if (props.type == "Visa") {
    imgCreditCard = imgVisa;
  } else {
    imgCreditCard = imgMaster;
  }

  const creditNumber = props.number;
  const arr = creditNumber.split("");
  const lastNumbers = arr.slice(arr.length - 4).join("");

  const styleDiv = {
    backgroundColor: props.bgColor,
    color: props.color,
    display: "flex",
    flexDirection: "column",
    justifyContent: `space-between`,
    width: "350px",
    height: "180px",
    borderRadius: `10px`,
    fontFamily: "sans-serif",
  };
  return (
    <div style={styleDiv}>
      <div className={style.divLogotipo}>
        <img src={imgCreditCard} className={style.logotipo} />
      </div>
      <div className={style.numberInfo}> ●●●● ●●●● ●●●● {lastNumbers}</div>
      <div className={style.contentInfo}>
        <div className={style.bankInfo}>
          <p className={style.bankInfoLine}>
            Expires {props.expirationMonth}/{props.expirationYear}
          </p>
          <p className={style.bankInfoLine}> {props.bank}</p>
        </div>
        <p className={style.bankInfoLine}>{props.owner}</p>
      </div>
    </div>
  );
}
