import {Route} from 'react-router-dom';
import {Navigate} from 'react-router-dom';

import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({ element: Element, ...rest }) => {
    return (
        <Route
            {...rest}
            element={useAuth() ? <Element /> : <Navigate to="/login" />}
        />
    );
};

export default PrivateRoute;