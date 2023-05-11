import React, { useContext } from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Services from '../Services/Services';
import { AuthContext } from '../../../Providers/AuthProvider';
import Loader from '../../Shared/Loader/Loader';

const Home = () => {
    const { loading } = useContext(AuthContext)
    return (
        <div>
            {
                loading ? <Loader /> :
            <>
                <Banner />
                <About />
                <Services />
            </>
            }
        </div>
    );
};

export default Home;