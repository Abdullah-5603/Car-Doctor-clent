import React from 'react';

const Loader = () => {
    return (
        <div className="flex justify-center items-center h-full my-10">
            <div className="inline-block w-10 h-10 border-8 border-[#FF3811] border-t-transparent rounded-full animate-spin"></div>
        </div>
    );
};

export default Loader;