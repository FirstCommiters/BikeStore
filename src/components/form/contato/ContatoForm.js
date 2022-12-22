import React from 'react'
import styles from './ContatoForm.module.css'
import Cart from '../../../icons/cart.png'
import Cellphone from '../../../icons/cellphone.png'
import Location from '../../../icons/location.png'
import Youtube from '../../../icons/youtube.png'
import Facebook from '../../../icons/facebookGradient.png'
import Instagram from '../../../icons/instagram.png'
import Layout from '../../container/Layout'
import Input from '../Input'
import ButtonCta from '../../cta/ButtonCta/ButtonCta'

const ContatoForm = () => {
    return (
        <div className={styles.ContatoForm}>
            <Layout>
                <div className={styles.display}>
                    <div className={styles.blackSide}>
                        <h2>loja online</h2>
                        <ul>
                            <li>
                                <img src={Location} alt="localização" />
                                <p>
                                    Rua Ali Perto, 42 - Botafogo <br />
                                    Rio de Janeiro - RJ
                                </p>
                            </li>
                            <li>
                                <img src={Cellphone} alt="Celular" />
                                <p>
                                    +55 81 9999-9999
                                </p>
                            </li>
                            <li>
                                <img src={Cart} alt="Contato" />
                                <p>
                                    contato@bikestore.com
                                </p>
                            </li>
                        </ul>
                        <div>
                            <img src={Instagram} alt="intagram logo" />
                            <img src={Facebook} alt="Facebook logo" />
                            <img src={Youtube} alt="Youtube logo" />
                        </div>
                    </div>
                    <div className={styles.whiteSide}>
                        <ul>
                            <li>
                                <label>Nome</label>
                                <Input placeholder="Seu nome" type="text" required/>
                            </li>
                            <li>                               
                                <label>Telefone</label>
                                <Input placeholder="(81) 9999-9999" type="text" required/>
                            </li>
                            <li className={styles.email}>                               
                                <label>Email</label>
                                <input placeholder="contato@email.com" type="email" required/>
                            </li>
                            <li className={styles.textarea}>
                                <label>Mensagem</label>
                                <textarea rows="5" placeholder="Digite sua mensagem aqui!"></textarea>
                            </li>
                        </ul>

                        <ButtonCta>Enviar mensagem</ButtonCta>
                    </div>
                </div>
            </Layout>
        </div>

    )
}

export default ContatoForm
