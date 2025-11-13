import { IoReceiptOutline } from "react-icons/io5"
import "./ProfileDropdown.css"
import { CiSettings } from "react-icons/ci"
import { MdCardGiftcard, MdOutlineBugReport, MdSwitchAccount } from "react-icons/md"
import { AiOutlineAppstore } from "react-icons/ai"
import { PiSignOut } from "react-icons/pi"

const LINKS = [
    { icon: <CiSettings />, link: 'Settings' },
    { icon: <IoReceiptOutline />, link: 'Purchase History' },
    { icon: <MdCardGiftcard />, link: 'Refer and Earn' },
    { icon: <AiOutlineAppstore />, link: 'Integrations' },
    { icon: <MdOutlineBugReport />, link: 'Report Bug' },
    { icon: <MdSwitchAccount />, link: 'Switch Account' },
    { icon: <PiSignOut />, link: 'Sign Out' }
]

export default function ProfileDropdown() {

    return (
        <div className="profile-dropdown-container">
            <div>
                <div className="user-profile">
                    <p className="profile">OJ</p>
                    <div className="name-email-container">
                        <h6 className="name">Olivier Jones</h6>
                        <p className="email">olivierjones@gmail.com</p>
                    </div>
                </div>
            </div>
            {
                LINKS.map((link) => {
                    return (
                        <div key={link.link} className="link-container" role="button" tabIndex={0}>
                            {link.icon}
                            <p>{link.link}</p>
                        </div>
                    )
                })
            }

    </div>
    )

};