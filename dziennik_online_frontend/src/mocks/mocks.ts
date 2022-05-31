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

export const getStatisticsForGradeTypeId = (): Promise<any> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                data: [
                    {
                        "grade": 2,
                        "count": 1,
                        "students": [
                            {
                                "name": "Darcey",
                                "surname": "Peacock",
                                "id": 10,
                                "login": "Aisha2010"
                            }
                        ]
                    },
                    {
                        "grade": 3,
                        "count": 4,
                        "students": [
                            {
                                "name": "Desirae",
                                "surname": "Walden",
                                "id": 19,
                                "login": "Aguilera1993"
                            },
                            {
                                "name": "Desirae",
                                "surname": "Walden",
                                "id": 19,
                                "login": "Aguilera1993"
                            },
                            {
                                "name": "Desirae",
                                "surname": "Walden",
                                "id": 19,
                                "login": "Aguilera1993"
                            }
                        ]
                    },
                    {
                        "grade": 4,
                        "count": 8,
                        "students": [
                            {
                                "name": "Desirae",
                                "surname": "Walden",
                                "id": 19,
                                "login": "Aguilera1993"
                            }
                        ]
                    },
                    {
                        "grade": 5,
                        "count": 4,
                        "students": [
                            {
                                "name": "Desirae",
                                "surname": "Walden",
                                "id": 19,
                                "login": "Aguilera1993"
                            }
                        ]
                    },
                    {
                        "grade": 6,
                        "count": 1,
                        "students": [
                            {
                                "name": "Desirae",
                                "surname": "Walden",
                                "id": 19,
                                "login": "Aguilera1993"
                            }
                        ]
                    }
                ]
            });
        }, 300);
    });
}