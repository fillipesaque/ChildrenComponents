import { Fragment } from "react"
import Profile from './Components/Profile/Profile'
import img1 from '../src/assets/img1.jpg'
import img2 from '../src/assets/img2.jpg'

function App() {
      return(
        <Fragment>
          <Profile img={img2} linkGitHub='https://github.com/fillipesaque' test ='Descriçao teste 01' name='Fillipe Saque' email='john.doe@email.com 01' skills='Full-stack javascript developer at Acme inc.01' tell='+5519992067639 - 01'></Profile>
          <Profile img={img1} linkGitHub='https://github.com/fillipesaque' test ='Descriçao teste 02' name='John Doe' email='john.doe@email.com 02' skills='Full-stack javascript developer at Acme inc.02' tell='+5519992067639 - 02'></Profile>
        </Fragment>
      )
}

export default App
