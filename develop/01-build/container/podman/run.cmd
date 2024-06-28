podman container run ^
    --interactive ^
    --privileged ^
    --rm ^
    --stop-timeout 0 ^
    --tty ^
    --volume ../build/:/workspace/docusaurus_for_baby/build/ ^
    docusaurus_for_baby_build_docs_image ^
    npm run build
