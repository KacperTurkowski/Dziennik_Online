//TODO remove this file and fix services after integrate with backend

export const getUser = (): Promise<any> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        data: {
          firstName: "Maragaret",
          lastName: "Knecht",
          role: "Teacher",
          guid: "37dd9bb0-4c53-4134-31de-23e177779933",
        },
      });
    }, 300);
  });
};

export const getTeacherSubject = (): Promise<any> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        data: [
          { id: 10, schoolSubjectName: "Operations", classId: 32 },
          { id: 14, schoolSubjectName: "Information Technology", classId: 51 },
        ],
      });
    }, 300);
  });
};

export const getStatisticsForGradeTypeId = (): Promise<any> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        data: [
          {
            grade: 2,
            count: 1,
            students: [
              {
                name: "Darcey",
                surname: "Peacock",
                id: 10,
                login: "Aisha2010",
              },
            ],
          },
          {
            grade: 3,
            count: 4,
            students: [
              {
                name: "Desirae",
                surname: "Walden",
                id: 19,
                login: "Aguilera1993",
              },
              {
                name: "Desirae",
                surname: "Walden",
                id: 19,
                login: "Aguilera1993",
              },
              {
                name: "Desirae",
                surname: "Walden",
                id: 19,
                login: "Aguilera1993",
              },
            ],
          },
          {
            grade: 4,
            count: 8,
            students: [
              {
                name: "Desirae",
                surname: "Walden",
                id: 19,
                login: "Aguilera1993",
              },
            ],
          },
          {
            grade: 5,
            count: 4,
            students: [
              {
                name: "Desirae",
                surname: "Walden",
                id: 19,
                login: "Aguilera1993",
              },
            ],
          },
          {
            grade: 6,
            count: 1,
            students: [
              {
                name: "Desirae",
                surname: "Walden",
                id: 19,
                login: "Aguilera1993",
              },
            ],
          },
        ],
      });
    }, 300);
  });
};

export const getGradesPerStudent = (): Promise<any> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        data: [
          {
            subject: {
              id: 14,
              schoolSubjectName: "Information Technology",
              classId: 51,
              className: "2022 Information Technology",
            },
            students: [
              {
                name: "Sven",
                surname: "Jones",
                id: 54,
                login: "Sven3322",
              },
              {
                name: "Thier",
                surname: "Williams",
                id: 55,
                login: "Thier22",
              },
              {
                name: "Jasiu",
                surname: "Kowalski",
                id: 56,
                login: "JasKowal1",
              },
              {
                name: "Ala",
                surname: "Makota",
                id: 57,
                login: "AlaMaKota33",
              },
              {
                name: "Katarzyna",
                surname: "Kowalska",
                id: 58,
                login: "Kakowal6",
              },
              {
                name: "Max",
                surname: "Mad",
                id: 59,
                login: "MadMax00",
              },
              {
                name: "Zdzislaw",
                surname: "Onderka",
                id: 60,
                login: "Onder000",
              },
              {
                name: "Klaudia",
                surname: "Szifer",
                id: 61,
                login: "Klaydia9",
              },
            ],
            gradeTypes: [
              {
                gradeTypeId: 50,
                name: "Test1",
              },
              {
                gradeTypeId: 51,
                name: "Test2",
              },
              {
                gradeTypeId: 52,
                name: "Exam",
              },
            ],
            gradeTypeWithGrades: [
              {
                gradeTypeId: 50,
                grades: [
                  {
                    id: 49,
                    value: 4,
                    userId: 58,
                  },
                  {
                    id: 48,
                    value: 2,
                    userId: 54,
                  },
                  {
                    id: 47,
                    value: 3,
                    userId: 57,
                  },
                ],
              },
              {
                gradeTypeId: 51,
                grades: [
                  {
                    id: 51,
                    value: 6,
                    userId: 55,
                  },
                  {
                    id: 52,
                    value: 1,
                    userId: 54,
                  },
                  {
                    id: 59,
                    value: 3,
                    userId: 57,
                  },
                ],
              },
              {
                gradeTypeId: 52,
                grades: [
                  {
                    id: 53,
                    value: 2,
                    userId: 55,
                  },
                  {
                    id: 54,
                    value: 1,
                    userId: 54,
                  },
                  {
                    id: 55,
                    value: 5,
                    userId: 56,
                  },
                  {
                    id: 56,
                    value: 1,
                    userId: 57,
                  },
                  {
                    id: 57,
                    value: 3,
                    userId: 58,
                  },
                  {
                    id: 58,
                    value: 4,
                    userId: 59,
                  },
                ],
              },
            ],
          },
          {
            subject: {
              id: 10,
              schoolSubjectName: "Operations",
              classId: 32,
              className: "2022 Operations",
            },
            students: [
              {
                name: "Sven",
                surname: "Jones",
                id: 54,
                login: "Sven3322",
              },
              {
                name: "Thier",
                surname: "Williams",
                id: 55,
                login: "Thier22",
              },
              {
                name: "Jasiu",
                surname: "Kowalski",
                id: 56,
                login: "JasKowal1",
              },
              {
                name: "Ala",
                surname: "Makota",
                id: 57,
                login: "AlaMaKota33",
              },
              {
                name: "Katarzyna",
                surname: "Kowalska",
                id: 58,
                login: "Kakowal6",
              },
              {
                name: "Max",
                surname: "Mad",
                id: 59,
                login: "MadMax00",
              },
              {
                name: "Zdzislaw",
                surname: "Onderka",
                id: 60,
                login: "Onder000",
              },
              {
                name: "Klaudia",
                surname: "Szifer",
                id: 61,
                login: "Klaydia9",
              },
            ],
            gradeTypes: [
              {
                gradeTypeId: 51,
                name: "Test2",
              },
              {
                gradeTypeId: 52,
                name: "Exam",
              },
            ],
            gradeTypeWithGrades: [
              {
                gradeTypeId: 51,
                grades: [
                  {
                    id: 51,
                    value: 6,
                    userId: 55,
                  },
                  {
                    id: 52,
                    value: 1,
                    userId: 54,
                  },
                  {
                    id: 59,
                    value: 3,
                    userId: 58,
                  },
                  {
                    id: 60,
                    value: 5,
                    userId: 61,
                  },
                  {
                    id: 61,
                    value: 5,
                    userId: 60,
                  },
                ],
              },
              {
                gradeTypeId: 52,
                grades: [
                  {
                    id: 53,
                    value: 2,
                    userId: 55,
                  },
                  {
                    id: 54,
                    value: 1,
                    userId: 54,
                  },
                  {
                    id: 55,
                    value: 5,
                    userId: 56,
                  },
                  {
                    id: 56,
                    value: 1,
                    userId: 57,
                  },
                  {
                    id: 57,
                    value: 3,
                    userId: 58,
                  },
                  {
                    id: 58,
                    value: 4,
                    userId: 59,
                  },
                ],
              },
            ],
          },
        ],
      });
    }, 300);
  });
};

export const getGradesPerGradesTypes = (): Promise<any> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        data: [
          {
            students: [
              {
                name: "Sven",
                surname: "Jones",
                id: 54,
                login: "Sven3322",
              },
              {
                name: "Thier",
                surname: "Williams",
                id: 55,
                login: "Thier22",
              },
            ],
            id: 51,
            name: "Test2",
            weight: 1,
            schoolSubjectId: 14,
            gradeDetails: [
              {
                commentary: "Very well!!!!",
                value: 6,
                userId: 55,
                gradeTypeId: 51,
                id: 51,
              },
              {
                commentary: "Wrong",
                value: 1,
                userId: 54,
                gradeTypeId: 51,
                id: 52,
              },
            ],
          },
        ],
      });
    }, 300);
  });
};
