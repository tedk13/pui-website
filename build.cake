#addin nuget:?package=Cake.FileHelpers&version=4.0.1
#addin nuget:?package=Cake.Git&version=1.1.0
#addin nuget:?package=Cake.Npm&version=1.0.0

var target = Argument("target", "Default");

var configuration = "Release";

var artifactsDir = Directory("./assets/output");

Task("Clean")
    .Does(() =>
    {
        CleanDirectory(artifactsDir);
    });

Task("Restore-npm-Packages")
    .Does(() =>
    {
        NpmCi(new NpmCiSettings
        {
            LogLevel = NpmLogLevel.Warn,
            WorkingDirectory = ""
        });
    });

Task("Build")
    .IsDependentOn("Clean")
    .IsDependentOn("Restore-npm-Packages")
    .Does(() =>
    {
        NpmRunScript(new NpmRunScriptSettings
        {
            ScriptName = "build",
            WorkingDirectory = ""
        });
    });

Task("Package")
    .IsDependentOn("Build")
    .Does(() =>
    {
        System.IO.File.AppendAllText(
            artifactsDir + File("./_git_hash/index.html"),
            BuildSystem.AppVeyor.Environment.Repository.Commit.Id);
        
        System.IO.File.AppendAllText(
            artifactsDir + File("./_health/index.html"),
            "Healthy");

        Zip(
            artifactsDir,
            "./Styleguide.zip"
        );
    });

Task("Default")
    .IsDependentOn("Package");

RunTarget(target);
