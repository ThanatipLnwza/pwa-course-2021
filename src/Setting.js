import './Settings.css';
import { Link } from 'react-router-dom';
function Settings(){
    return(
        <div className="contain">
            <div className="contents">
            <Link to="/">
            <button>
            PrivateChatRoom
            </button>
            </Link>
            </div>
        </div>
    );
};

export default Settings;