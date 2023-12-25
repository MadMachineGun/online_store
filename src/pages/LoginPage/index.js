import {useLocation, useNavigate} from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

export default function LoginPage() {
    const navigate = useNavigate();
    const location = useLocation();
    const {signIn} = useAuth();

    const fromPage = location.state?.from?.pathname || '/';
    const handleSubmit = (e) => {
        e.preventDefault();

        signIn('6asdg7f6afg7d6sfa7', () => navigate(fromPage, {replace: true}));
    };

    return(
        <div>
            <h1>Login Page</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Name: <input name='username' />
                </label>
                <button type='submit'>Login</button>
            </form>
        </div>
    );
}