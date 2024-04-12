import React from "react";
import { useState, createContext, useReducer} from "react";

export const AuthContext = createContext()

export const AuthProvider = ({children}) => {
	const [user, setUser] = useState({})
	
	return (
		<AuthContext.Provider value={{user, setUser}}>{children}</AuthContext.Provider>
	)
}