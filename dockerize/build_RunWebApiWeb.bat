docker build .. -f docker_runwebapiweb.txt -t bingo_runwebapiweb
docker run --rm -p 3000:3000 --name bingo_runwebapiweb_container bingo_runwebapiweb
docker container kill bingo_runwebapiweb_container