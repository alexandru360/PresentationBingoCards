docker build .. -f docker_bingo_api.txt -t docker_bingo_api
docker run -p 3000:3000 --rm --name docker_bingo_api_container docker_bingo_api
docker container kill docker_bingo_api_container