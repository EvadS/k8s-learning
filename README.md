 
## visual studio 
minikube - только одна нода 
на windows запускаем  Docker Desktop

```
 minikube start
```


----- 
minikube ip 

доступность адрреса 
ping 

подключиться 
```
 ssh root@192.168.49.2
```

зайти на ноду в minikube
```bash
	minikube ssh
```

выйти
```
   exit
``` 
-----------------------------------------

## Pods 
### create 
```
k8s run my-ingnx-pod --image=nginx
```
### просмотреть все детали 
```
kubectl describe pods my-ingnx-pod
```
### проверка достопности

под работает внутри контейнера 
зайти на ноду и проверить доступность ip
```
minikube ssh 
```
 
 поиск по образам докера
``` 
 docker ps | grep nginx 
```
служебный контейнер, 2 контейнера которые принадлежат одному поду 
--
#### внутри контейнера 