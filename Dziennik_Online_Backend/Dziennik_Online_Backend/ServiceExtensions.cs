using Dziennik_Online_Backend.Repositories;
using Dziennik_Online_Backend.Services;

namespace Dziennik_Online_Backend;

public static class ServiceExtensions
{
    public static void RegisterRepos(this IServiceCollection collection)
    {
        collection.AddSingleton<IAuthorizationRepository, AuthorizationRepository>();
        collection.AddSingleton<ITeacherStatisticsRepository, TeacherStatisticsRepository>();
        collection.AddSingleton<ITeacherSubjectsRepository, TeacherSubjectsRepository>();
        collection.AddSingleton<IStudentStatisticsRepository, StudentStatisticsRepository>();
        collection.AddSingleton<ITeacherGradesRepository, TeacherGradesRepository>();
        collection.AddSingleton<IStudentSubjectsRepository, StudentSubjectsRepository>();
        collection.AddSingleton<IStudentGradesRepository, StudentGradesRepository>();
    }

    public static void RegisterServices(this IServiceCollection collection)
    {
        collection.AddSingleton<IAuthorizationService, AuthorizationService>();
        collection.AddSingleton<ITeacherStatisticsService, TeacherStatisticsService>();
        collection.AddSingleton<ITeacherSubjectsService, TeacherSubjectsService>();
        collection.AddSingleton<IStudentStatisticsService, StudentStatisticsService>();
        collection.AddSingleton<ITeacherGradesService, TeacherGradesService>();
        collection.AddSingleton<IStudentSubjectsService, StudentSubjectsService>();
        collection.AddSingleton<IStudentGradesService, StudentGradesService>();
    }
}