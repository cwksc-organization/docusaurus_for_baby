docker container run ^
    --hostname "docusaurus_for_baby_develop_container" ^
    --interactive ^
    --name "docusaurus_for_baby_develop_container" ^
    --privileged ^
    --publish 3000:3000 ^
    --rm ^
    --stop-timeout 0 ^
    --tty ^
    --volume "%cd%/../../../../volume/config/:/workspace/docusaurus_for_baby/config" ^
    --volume "%cd%/../../../../volume/docusaurus.config.ts:/workspace/docusaurus_for_baby/docusaurus.config.ts" ^
    --volume "%cd%/../../../../volume/multiblog/:/workspace/docusaurus_for_baby/multiblog/" ^
    --volume "%cd%/../../../../volume/multidocs/:/workspace/docusaurus_for_baby/multidocs/" ^
    --volume "%cd%/../../../../volume/run.sh:/workspace/docusaurus_for_baby/run.sh" ^
    --volume "%cd%/../../../../volume/src/:/workspace/docusaurus_for_baby/src/" ^
    docusaurus_for_baby_develop_image ^
    ./run.sh 
