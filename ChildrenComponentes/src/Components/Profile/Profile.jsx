import styles from './Profile.module.css'
import Title from '../Title/Title'
import Descriçao from '../Descriçao/Descriçao'
import LinkBtn from '../LinkBtn/LinkBtn'

function Profile (props){
    return(
        <div className={styles.ProfileContainer}>
            <div className={styles.imgContainer}>
                <img src={props.img} alt="" />
                <Title>
                    {/* Todos os filhos do componente title sera passado para o componente title com o comando {props.children */}
                    <span>{props.name}</span> 
                    <button>Follow</button>
                </Title>
                <hr />
            </div>
            <Descriçao>
                <p>{props.skills}</p>
                <hr />
                <p>{props.tell}</p>
                <hr />
                <p>{props.email}</p>
                <hr />
                <p>{props.test}</p>
                <hr />
            </Descriçao>
            <LinkBtn>
                <a href={props.linkGitHub}><button>GitHub</button></a>
                <a href=""><button>GitHub</button></a>
                <a href=""><button>GitHub</button></a>
            </LinkBtn>
        </div>
    )
}

export default Profile