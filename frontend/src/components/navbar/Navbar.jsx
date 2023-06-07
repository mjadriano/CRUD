import React from 'react'
import { Link } from 'react-router-dom'
import { useLogout } from '../../hooks/useLogout'
import { useAuthContext } from '../../hooks/useAuthContext'

const Navbar = () => {
    const { logout } = useLogout()
    const { user } = useAuthContext()

    const onLogout = () => {
        logout()
    }

    return (
        <>
            <nav className="shadow-sm border-bottom border-secondary navbar navbar-expand-lg bg-light justify-content-end">
                <div className="container">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <Link className="navbar-brand" to="/">  MJ. </Link>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

                            { user &&
                                <li className="nav-item">
                                    <Link className="nav-link" to="/"> Dashboard </Link>
                                </li>
                            }
                            

                            <li className="nav-item dropdown">
                                { user ? 
                                    <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        { user.firstName +" "+ user.lastName }
                                    </a>
                                    :
                                    <Link className="dropdown-item" to="/login"> <button className="btn btn-outline-primary rounded-1" type="submit"> Sign In </button> </Link>
                                }
                                
                                { user &&
                                    <ul className="dropdown-menu">
                                        <li> <span onClick={onLogout} className="dropdown-item" style={{cursor: 'pointer'}}> Sign Out </span> </li>
                                    </ul>
                                }
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar