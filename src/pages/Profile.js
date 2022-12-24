import React from 'react'
import styles from '../styles/Profile.module.css'
import Layout from '../components/container/Layout'
import Intro from '../components/Intro'

const Profile = () => {
    const [value, setValue] = React.useState('Profile')


    function handleClick(e) {
        setValue(e.target.innerText)
    }

    React.useEffect(()=> {
        console.log(value)
    }, [value])

  return (
    <section className={styles.profile}>
        <Intro text="Bem vindo de volta Marcelo" title="My Account"/>
        <Layout>
            <div className={styles.container}>
                <div className={styles.blackSide}>
                    <h1>Marcelo Henrique</h1>
                    <span>Recife - Brasil</span>
                    <ul>
                        <li onClick={handleClick}><button>Profile</button></li>
                        <li onClick={handleClick}><button>Address</button></li>
                        <li onClick={handleClick}><button>My Orders</button></li>
                        <li onClick={handleClick}><button>Payments</button></li>
                        <li onClick={handleClick}><button>Whitelist</button></li>
                    </ul>
                </div>
                
                <div className={styles.whiteSide}>
                    <h1>Orders</h1>
                    <span>8 items</span>

                    <div className={styles.content}>
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                        <span>1 2 3 4</span>
                    </div>
                </div>
            </div>
        </Layout>
    </section>
  )
}

export default Profile
