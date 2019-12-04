import React from 'react';

const authContext = React.createContext({authenticated: false, logIn: () => {}})

export default authContext;