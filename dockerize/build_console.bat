docker build .. -f docker_build_console.txt -t bingo_build_console
docker run -d --rm --name bingo_build_console_container bingo_build_console
docker cp bingo_build_console_container:/app/bingo-meeting-console/bingo-meeting-console-win.exe .
docker cp bingo_build_console_container:/app/bingo-meeting-console/bingo-meeting-console-linux .
docker cp bingo_build_console_container:/app/bingo-meeting-console/bingo-meeting-console-macos .
docker container kill bingo_build_console_container