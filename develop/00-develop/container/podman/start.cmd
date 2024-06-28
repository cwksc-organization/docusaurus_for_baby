podman container run ^
    --detach ^
    --hostname "docusaurus_for_baby_develop_container" ^
    --interactive ^
    --name "docusaurus_for_baby_develop_container" ^
    --privileged ^
    --publish 3000:3000 ^
    --replace ^
    --rm ^
    --stop-timeout 0 ^
    --tty ^
    --volume ../../../../volume/config/:/workspace/docusaurus_for_baby/config ^
    --volume ../../../../volume/docusaurus.config.ts:/workspace/docusaurus_for_baby/docusaurus.config.ts ^
    --volume ../../../../volume/multidocs/:/workspace/docusaurus_for_baby/multidocs/ ^
    --volume ../../../../volume/run.sh:/workspace/docusaurus_for_baby/run.sh ^
    --volume ../../../../volume/src/:/workspace/docusaurus_for_baby/src/ ^
    --volume ../../../../volume/multiblog/:/workspace/docusaurus_for_baby/multiblog/ ^
    docusaurus_for_baby_develop_image
