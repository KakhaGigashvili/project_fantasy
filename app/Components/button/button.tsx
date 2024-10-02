import { ReactNode } from "react"
import styles from './button.module.scss'

type Props ={
    children: ReactNode;
    className?: string;
    mode?: 'fill' | 'outline';
    htmlType?: string;
    onClick?: () => void;
}

export default (props:Props) =>{

    const classes = [styles.container, props.className]
    if(props.mode == 'outline'){classes.push(styles.outline)}
    else{classes.push(styles.fill)}

    return(
        <button className={classes.join(' ').trim()}>
            {props.children}
        </button>
    )
}