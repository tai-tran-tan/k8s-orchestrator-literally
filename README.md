# k8s-orchestrator-literally
cd violin
./build.sh
cd flute
./build.sh

#Install istio
https://istio.io/latest/docs/setup/getting-started/

kubectl label namespace default istio-injection=enabled
