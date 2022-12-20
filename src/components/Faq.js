import React from 'react'
import styles from '../styles/Faq.module.css'
import Layout from './container/Layout'

const Faq = () => {
  return (
    <article className={styles.faq}>
      <Layout>
        <div>
          <h1>perguntas frequentes<span>.</span></h1>

          <dl>
            <div>
              <dt>Qual forma de pagamento vocês aceitam?</dt>
                <dd>
                    Aceitamos cartões de credito com as bandeiras: visa, mastercard, ELO e 
                    americaexpress. Para pagamentos a vista, aceitamos PIX, cartão de debito e 
                    boleto bancário
                </dd>
            </div>
            <div>
                <dt>Como entrar em contato?</dt>
                <dd>
                    Aceitamos cartões de credito com as bandeiras: visa, mastercard, ELO e 
                    americaexpress. Para pagamentos a vista, aceitamos PIX, cartão de debito e 
                    boleto bancário
                </dd>
            </div>

            <div>
                <dt>Vocês possuem algum desconto?</dt>
                <dd>
                    Aceitamos cartões de credito com as bandeiras: visa, mastercard, ELO e 
                    americaexpress. Para pagamentos a vista, aceitamos PIX, cartão de debito e 
                    boleto bancário
                </dd>
            </div>

            <div>
                <dt>Tenho garantia?</dt>
                <dd>
                    Aceitamos cartões de credito com as bandeiras: visa, mastercard, ELO e 
                    americaexpress. Para pagamentos a vista, aceitamos PIX, cartão de debito e 
                    boleto bancário
                </dd>
            </div>

            <div>
                <dt>Posso parcelar no boleto?</dt>
                <dd>
                    Aceitamos cartões de credito com as bandeiras: visa, mastercard, ELO e 
                    americaexpress. Para pagamentos a vista, aceitamos PIX, cartão de debito e 
                    boleto bancário
                </dd>
            </div>
          </dl>
        </div>
      </Layout>
    </article>
  )
}

export default Faq