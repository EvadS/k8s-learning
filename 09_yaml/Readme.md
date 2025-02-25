# Декларативный подход

 ### применение конфигурационного файла 
 ```
    kubectl apply -f .\deployment.yaml
 ```

### проверка 
 ```bash
  kubectl get pods
 ```

 ### ip пода 
```
    kubectl get pods -o wide
```

### проверка
```
 minikube ssh curl IP:3000
```

### Документация 
```
https://kubernetes.io/docs/reference/
```
---

в терминале 
```
 minikube dashboard
```

### 
kubectl 

kubectl delete -f .\deployment.yaml -f service.yaml 

-------------------

### полная очистка
```
kubectl delete --all pods
```

kubectl delete --all deployments

kubectl delete --all namespaces