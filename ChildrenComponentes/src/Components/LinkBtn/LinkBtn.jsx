import LinkBtnStyle from '../LinkBtn/LinkBtn.module.css'

function LinkBtn (props) {
    return(
        <div className={LinkBtnStyle.BtnContainer}>
            <a 
            href={props.href}
            target='blank'>
            {props.children}
            </a>
        </div>
    )
}

export default LinkBtn