docker build .. -f docker_bingo_cli.txt -t docker_bingo_cli
docker run -it --rm --name docker_bingo_cli_container docker_bingo_cli
docker container kill docker_bingo_cli_container