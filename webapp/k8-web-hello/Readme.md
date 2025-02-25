
```
npm start
```

## создаем образ
```bash
    docker build . -t evaddev/k8s-web-hello-ru:latest -t evaddev/k8s-web-hello-ru:1.0.0
```

проверить локально
```
    docker run -p 3000:3000 --name app evaddev/k8s-web-hello-ru:1.0.0
```


## проверяем что образ создался 
```bash
docker  images | grep web-hello
```

## для загрузки необходимо залогиниться  
```bash
    docker login 
```

## заливаем образ в хаб
```bash
    docker push evaddev/k8s-web-hello-ru
```

## залить все 
```bash
    docker push evaddev/k8s-web-hello-ru  --all-tags
```


### создаем deployments из удаленного репо 
```bash
    kubectl create deployment k8s-hello-world  --image evaddev/k8s-web-hello-ru:1.0.0
```


проверяем 
```bash
    kubectl get pods 
```

```bash
kubectl describe pod k8s-hello-world-66b5964b66-fdfs2
```

### тунель - для подключения из вне к запущеному сервису 
```bash
    minikube tunnel 
```

### сервис 
```bash
 kubectl expose deploy k8s-hello-world --type=LoadBalancer --port=3333 --target-port=3000
```

### проверяем 
```bash
 kubectl get svc
```

-----------
шаг 2 
хотим новый образ
## создаем образ
```bash
    docker build . -t evaddev/k8s-web-hello-ru:latest -t evaddev/k8s-web-hello-ru:2.0.0
```

## заливаем образ в хаб
```bash
    docker push evaddev/k8s-web-hello-ru
```

закинуть образ со всеми тегами (--all-tags)
```bash
    docker push evaddev/k8s-web-hello-ru --all-tags
```

Обновление версии deployment
```
    kubectl rollout status deploy k8s-hello-world
```

```bash
    kubectl set image deploy k8s-hello-world  k8s-web-hello-ru=evaddev/k8s-web-hello-ru:2.0.0
```

k8s-hello-world  - название деплоймента 
k8s-web-hello-ru - образ который используем 

-- 
## удаление сервиса и деплоймента 
### список сервисом 
```bash
    kubectl get svc
```

```bash
    delete svc k8s-hello-world
```

```bash
     kubectl get deploy 
```

```bash
    kubectl delete deploy k8s-hello-world
```
-----------------------------------
