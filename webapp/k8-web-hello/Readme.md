
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
kubectl describe pod  k8s-hello-world-66b5964b66-fdfs2
```