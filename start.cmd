REM 先用cnpm下载,不然太慢
REM start /wait cmd /c "cnpm install"

REM 存在部分cnpm没有的electron的组件,用npm把没有的下载
REM start /wait cmd /c "npm install"

REM 构建electron和react
REM start "build" cmd /c "npm run build"

REM 运行react
start cmd /c "npm run start"

REM 运行electron
REM start cmd /c "npm run electron-start"

