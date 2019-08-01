docker build .. -f docker_ci_test.txt -t bingo_ci_test
docker run -d --rm --name bingo_ci_test_container bingo_ci_test
docker cp bingo_ci_test_container:/app/bingo-meeting-objects-test/jest-stare .
docker cp bingo_ci_test_container:/app/bingo-meeting-objects-test/junit.xml .
docker cp bingo_ci_test_container:/app/bingo-meeting-objects-test/coverage/cobertura-coverage.xml .	
docker container kill bingo_ci_test_container