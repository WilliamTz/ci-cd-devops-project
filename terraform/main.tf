provider "docker" {}

resource "docker_image" "web" {
  name = "ghcr.io/myorg/ci-cd-app:latest"
}

resource "docker_container" "app" {
  name  = "web"
  image = docker_image.web.latest
  ports {
    internal = 3000
    external = 80
  }
}
