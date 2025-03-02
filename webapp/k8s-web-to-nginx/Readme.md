# взаимодействие между контецйнерами
```
npm start
```


2 пути
 - /
 - /nginx

 ## создаем образ
```bash
    docker build . -t evaddev/k8s-web-to-nginx
```

проверяем 
```
    docker images | grep web-to-nginx
```

```bash
    docker run -p 3333:3000 --name app evaddev/k8s-web-to-nginx:latest
```

отправляем на dockerhub
```
    docker push evaddev/k8s-web-to-nginx
```
---------------
 
 -- деплоймент для nginx 
 -- nginx.yaml

 2 деплоймента на основе файлов

 1. тунель должен работать 
 2. запускаем 2 сразу
 ```
    kubectl apply -f k8s-web-to-nginx.yaml -f nginx.yaml 
 ```
 проверяем 
 ```
  kubectl get svc
 ```

 NAME                  TYPE           CLUSTER-IP       EXTERNAL-IP   PORT(S)          AGE 
kubernetes            ClusterIP      10.96.0.1        <none>        443/TCP          6h1m
myak8s-web-to-nginx   LoadBalancer   10.108.11.244    127.0.0.1     3333:32154/TCP   2m7s
nginx                 ClusterIP      10.105.147.196   <none>        80/TCP           2m7s

nginx использует ClusterIP, доступен по адресу 10.105.147.196

проверяем 
```
  
```
## удаление сервиса и деплоймента 
### список сервисом 

```bash
    kubectl get svc
```

удаляем каждый по имени 
```bash
    delete svc k8s-hello-world
```
список deployments 
```bash
     kubectl get deploy 
```
удаляем каждый по имени
```bash
    kubectl delete deploy k8s-hello-world
```
-------------------------
внутренний dns для сервиса nginx
шаг1. развернули все, проверяем с узла 
```
    kubectl get svc 
```
заходим на minikube по ssh и пингуем сервис nginx 
```
    minikube ssh 
```
```bash
   curl 10.102.227.131
```

```
    curl nginx
``` 
результат: curl nginx 
хост с таким именем не доступен. мы попытались с узла
пробуем то же самое с контейнера. (мы по прежнему в minikube по ssh ->docker@minikube) 
ищем контейнер в котором работает приложение 

```
docker ps | grep k8s-web-to-nginx 
```
нашли 2 контейнера 
тот который на паузе - контейнер для резервирования ресурсов для пода 
```
 docker exec -it 8a2865189c7c sh
```

```
curl 10.102.227.131
```
если не доступно 
```
wget 10.102.227.131
```

```
curl nginx
```
видим что dns работает внутри контейнера
```
    nslookup nginx
```
узел -> контейнер (docker) внутренний dns
----

## Шаг 3. Обновить образы 

### создать образ 
```
    docker build . -t evaddev/k8s-web-to-nginx:latest -t evaddev/k8s-web-to-nginx:1.1.0
```

### загрузить образ   
```
    docker push evaddev/k8s-web-to-nginx --all-tags
```

### обновляем deployments

в <b>k8s-web-to-nginx.yaml</b>  image: evaddev/k8s-web-to-nginx:1.1.0
```
 kubectl apply -f k8s-web-to-nginx.yaml
```

не забываем о тунеле 
``` bash
minikube tunnel start
```


видим deployment.apps/k8s-web-to-nginx configured - что deloyment был изменен