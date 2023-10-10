import DescriçaoStyle from './DescriçaoStyle.module.css'

function Descriçao (props){
    return(
        <div className={DescriçaoStyle.DescriçaoContainer}>
            {props.children}
        </div>
    )
}

export default Descriçao