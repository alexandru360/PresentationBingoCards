docker build .. -f docker_build_code_documentation.txt -t bingo_build_code_documentation
docker run -d --rm --name bingo_build_code_documentation_container bingo_build_code_documentation
docker cp bingo_build_code_documentation_container:/app/docs/source .
docker container kill bingo_build_code_documentation_container