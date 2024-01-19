# Como instalar o Docker

## Windows 11/11

Para instalar o Docker nesse sistema juntamente com o Docker Compose, basta instalar o Docker Desktop e você tera acesso tanto para uso no terminal como para uso na aplicação.

### Download

https://docs.docker.com/desktop/install/windows-install/

## Mac

Para instalar o Docker nesse sistema juntamente com o Docker Compose, basta instalar o Docker Desktop e você tera acesso tanto para uso no terminal como para uso na aplicação, assim como fizemos no Windows.

### Download

https://docs.docker.com/desktop/install/mac-install/

## Linux (Ubuntu)

Para instalar o Docker nesse sistema juntamente com o Docker Compose, precisamos rodar os seguintes comandos:

- Adicionar o Docker apt repository:

```
sudo apt-get update
sudo apt-get install ca-certificates curl gnupg
sudo install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
sudo chmod a+r /etc/apt/keyrings/docker.gpg

echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt-get update
```

- Instalar o pacote Docker:

```
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

- Tirar permissões de sudo para o Docker:

```
sudo groupadd docker
sudo usermod -aG docker $USER
newgrp docker
```

- Testar a instalação

```
docker run hello-world
```

# Comandos básicos do docker

Listar imagens disponíveis na sua máquina:

```
docker image list
```

Baixar uma iamgem do DockerHub:

```
docker image pull python
```

Listar containers:

```
docker container list
```

Parar um container

```
docker container stop meuContainer
```

Iniciar um container

```
docker container start meuContainer
```
