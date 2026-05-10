# 在仓库根目录执行 build/push
REGISTRY ?= ccr.ccs.tencentyun.com/jancco
IMAGE_NAME := cinny
IMAGE_TAG ?= $(REGISTRY)/$(IMAGE_NAME):latest

# Makefile 所在目录 = image/
IMAGE_DIR := $(dir $(lastword $(MAKEFILE_LIST)))
# 仓库根目录 = image 的上级
REPO_ROOT := $(abspath $(IMAGE_DIR)/..)

.PHONY: build push

build:
	cd $(REPO_ROOT) && docker build -f image/Dockerfile -t $(IMAGE_TAG) .

push:
	docker push $(IMAGE_TAG)
