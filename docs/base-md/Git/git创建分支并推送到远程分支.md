---
title: git创建分支并推送到远程分支
date: 2021-12-29 18:55:00
tags:
 - git
categories:
 - git
---

## git创建分支并推送到远程分支

### Step1 创建新分支

```
git checkout -b test
```

### Step2 查看分支状态

```
git branch
```

### Step3 推送新分支

把新建的本地分支push到远程服务器，远程分支与本地分支同名（当然可以随意起名）

```
git push origin test:test
```

### 删除远程分支

#### Method1

推送一个空分支到远程分支，其实就相当于删除远程分支：

```
git push origin :test
```

#### Methods2

```
git push origin --delete test
```

以上两种方式都可以删除远程分支