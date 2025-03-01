
import Link from "next/link";
import Image from "next/image";
import logoImg from '@/assets/logo.png';
import classes from './main-header.module.css'
import MainHeaderBackground from "./main-header-background";
import NavLink from "./nav-link";

export default function MainHeader(){
  
    return (
    <>
    <MainHeaderBackground/>
    <header className={classes.header}>
        <Link className={classes.logo} href="/">
        <Image src={logoImg} alt="a doctor" priority/>
        NextLevel Doctor
        </Link>
        <nav className={classes.nav}>
            <ul>
                <li>
                   <NavLink href="/doctors">Doctors</NavLink>

                </li>
                <li>
                   <NavLink href="/patients">Patients</NavLink>
                </li>
                <li>
                   <NavLink href="/community">Community</NavLink>
                </li>
                <li>
                   <NavLink href="/Prescription">Prescription</NavLink>
                </li>
                
            </ul>
        </nav>
    </header>
    </>)
}