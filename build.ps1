New-Item -ItemType directory -Path "build" -Force | Out-Null

# Release whenever a commit is merged to master
#$ENV:UseMasterReleaseStrategy = "true" (default is false)
 
try {
  Invoke-WebRequest https://raw.githubusercontent.com/ritterim/build-scripts/master/bootstrap-cake.ps1 -OutFile build\bootstrap-cake.ps1
  # Invoke-WebRequest https://raw.githubusercontent.com/ritterim/build-scripts/master/build-net5.cake -OutFile build.cake
}
catch {
  Write-Output $_.Exception.Message
  Write-Output "Error while downloading shared build script, attempting to use previously downloaded scripts..."
}

.\build\bootstrap-cake.ps1 -Verbose --verbosity=Normal

Exit $LastExitCode
