using Dziennik_Online_Backend.DbModels;

namespace Dziennik_Online_Backend
{
    public class AverageHelper
    {
        public static double GetWeightedAverage(List<Grade> grades)
        {
            if (grades == null || grades.Count == 0)
                return 0;
            var counter = 0.0;
            var denominator = 0.0;
            foreach (var grade in grades)
            {
                counter += grade.Value * grade.GradeType.Weight;
                denominator += grade.GradeType.Weight;
            }

            return denominator == 0 ? 0 : counter / denominator;
        }

        public static double GetMedian(List<int> grades)
        {
            if (grades.Count == 0)
                return 0;

            var tempGrades = grades.OrderBy(x => x).ToList();

            var index = grades.Count / 2;
            return tempGrades.Count % 2 == 0
                ? (tempGrades[index] + tempGrades[index - 1]) / 2.0
                : tempGrades[index];
        }
    }
}
