import './Header.css'

export default function Header() {

    return (
        <>
            <header className="header">
                <div className="logo">
                    <img src={require('../../images/app.logo.png')} alt="Burger delivery" />
                </div>
                <div>
                    <h2>
                        Burger Builder App
                    </h2>
                </div>
                <ul>
                    <li>Orders</li>
                    <li>Home</li>
                </ul>
            </header>
        </>
    )
}
