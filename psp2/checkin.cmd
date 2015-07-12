@if "%_echo%" == "" echo off
setlocal
if "%1"=="" goto usage
echo git status
call git status
echo git add -A
call git add -A
echo git status
call git status
echo git commit -m "%*"
call git commit -m "%*"
echo git push origin master
call git push origin master
goto :EOF

:Usage
echo.
echo Missing commit comments
echo %0 My Comments Are Here
echo.
goto :EOF
