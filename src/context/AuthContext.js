import React from "react";

export const AuthContext = React.createContext();

export const AuthProvider = ({children}) => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const login = (username, password) => {
      if (username !== 'admin' || password !== 'admin') {
          return false;
      } else {
          setIsLoggedIn(true);
          return true;
      }
  };

  const logout = () => {
      setIsLoggedIn(false);
      window.location.replace("/login");
  };

  return (
      <AuthContext.Provider value={{ login, logout, isLoggedIn }}>
          { children }
      </AuthContext.Provider>
  )
};

export const withAuth = (WrappedComponent) => {
    return class extends React.Component {
        render() {
            return (
                <AuthContext.Consumer>
                    {
                        (value) => {
                            return <WrappedComponent {...value} {...this.props} />
                        }
                    }
                </AuthContext.Consumer>
            )
        }
    }
};