import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { PageHeader, Signup, FormStyled} from './Contact.styles'



const Contact = () => {
  return (
    <div>
    <Header />
    <PageHeader>
        <h2>Chcesz dowiedzieć się wiecej? </h2>
            <p>Skontaktuj się z nami a my odpowiemy na wszystkie pytania.</p>

    </PageHeader>

    <FormStyled>
        <div>
          
        </div>
    </FormStyled>
    

   

    <Signup>
        <div>
            <h3>Zapisz się do naszego Newslettera</h3>
            <p>Otrzymuj powiadomienia e-mail o naszych nowościach.</p>
        </div>
        <form>
            <input type="text" placeholder="Wpisz swój email" id="email"/>
            <button>Wyślij</button>
        </form>
    </Signup>
    <Footer />
</div>
  )
}

export default Contact