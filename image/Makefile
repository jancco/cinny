# 在仓库根目录执行 build/push
REGISTRY ?= ccr.ccs.tencentyun.com/jancco
IMAGE_NAME := cinny
IMAGE_TAG ?= $(REGISTRY)/$(IMAGE_NAME):latest

# 约定：在 Makefile 所在目录执行 make
REPO_ROOT := $(abspath $(CURDIR)/../..)

.PHONY: build push

build:
	cd $(REPO_ROOT) && docker build -f image/Dockerfile -t $(IMAGE_TAG) .

push: build
	docker push $(IMAGE_TAG)
