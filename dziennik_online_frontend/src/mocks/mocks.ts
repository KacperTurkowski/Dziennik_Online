//TODO remove this file and fix services after integrate with backend

export const getUser = (): Promise<any> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                data: {
                    "firstName": "Maragaret",
                    "lastName": "Knecht",
                    "role": "Teacher",
                    "guid": "37dd9bb0-4c53-4134-31de-23e177779933"
                }
            });
        }, 300);
    });
}

export const getTeacherSubject = (): Promise<any> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                data: [
                    {"id": 10, "schoolSubjectName": "Operations", "classId": 32}
                ]
            });
        }, 300);
    });
}