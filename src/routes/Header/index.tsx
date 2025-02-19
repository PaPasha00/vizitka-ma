import { Link, useNavigate } from 'react-router-dom'
import s from './Header.module.scss'

const routes = [
    {
        name: 'Главная страница',
        to: '/',
    },
    {
        name: 'Личный кабинет',
        to: '/account',
    },
    
]

function Header() {
    return (
        <div className={s.root}>
            {routes.map((el) => (
                <Link className={s.button} to={el.to}>
                {el.name}
            </Link>
            ))}
        </div>
    )
}

export default Header