& ./build.cmd 2>&1 | Tee-Object -variable output

# https://serverfault.com/a/340716 answering https://serverfault.com/questions/340711/redirect-stderr-to-variable-in-powershell
$standardError = $output | ?{$_.gettype().Name -eq "ErrorRecord"}

if ($standardError) {
  # Adapted from http://www.commandlinefu.com/commands/view/3584/remove-color-codes-special-characters-with-sed item from user "Cowboy":
  $standardErrorNoColor = %{ $standardError -replace "\x1B\[([0-9]{1,2}(;[0-9]{1,2})?)?[m|K]", "" }
  Add-AppveyorCompilationMessage -Message $standardErrorNoColor -Category Error

  # http://help.appveyor.com/discussions/problems/4498-powershell-exception-in-test_script-does-not-fail-build#comment_39657494
  if($LastExitCode -ne 0) { $host.SetShouldExit($LastExitCode) }
}
