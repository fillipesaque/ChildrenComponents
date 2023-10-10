import Title from './Title.module.css'

function TitleName (props){
    return(
        <h3 className={Title.TitleName}> Nome : {props.children}</h3>
        /* props.children -- children e uma propriedade propria do react
        Essa prop serve para que um componente seja capaz de aceitar outros componentes como filhos,
        daí o nome “children” (do inglês, “filhos”).
        */
    )
}

export default TitleName