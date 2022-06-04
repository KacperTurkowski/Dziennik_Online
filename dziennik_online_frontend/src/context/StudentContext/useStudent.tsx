import React from "react";
import StudentContext from "./StudentContext";

const useStudent = () => {
    return React.useContext(StudentContext)
}

export default useStudent;