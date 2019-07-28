docker build ../src -f docker_ci_test.txt -t bingo_ci_test
docker run -d --rm --name bingo_ci_test_container bingo_ci_test
docker cp bingo_ci_test_container:/app/jest-stare .	
docker container kill bingo_ci_test_container