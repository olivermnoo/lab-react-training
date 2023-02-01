import style from './style.module.css';

export function Greeting(props){
let aux = ""
    if(props.lang == "de") {
        aux = "Hallo"
    } else if (props.lang =="en"){
        aux = "Hello"
    }else if (props.lang == "es"){
        aux = "Holla"
    }else if (props.lang == "fr"){
        aux = "Bonjour"
    }

    return <div className = {style.greetingDiv}>
        <p className={style.content}>{aux} {props.children}</p>
    </div>
}