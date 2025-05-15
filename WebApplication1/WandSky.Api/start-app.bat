@echo off
echo 正在启动 WandSky API 应用程序...
start "" cmd /c "dotnet run --urls=http://localhost:5152"
timeout /t 5 /nobreak
echo 正在打开 Swagger UI...
start "" "http://localhost:5152/swagger"
echo 应用程序已启动，浏览器应该已经打开。 