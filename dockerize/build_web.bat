docker build .. -f docker_build_web.txt -t bingo_build_web
docker run -d --rm --name bingo_build_web_container bingo_build_web
docker cp bingo_build_web_container:/app/bingo-cards-ui/dist .
docker container kill bingo_build_web_container