---
title: hexo 기본 사용법 및 Tip
date: 2017-08-17 16:43:15
tags:
---

hexo는 octopress에 비해 사용법이 어렵지 않아서 구글링만 하면 쉽게 정보를 얻을 수 있다.

설치하면서 봤던 유용한 글 링크와 기본적인 팁들 몇개만 저장의 의미로 옮겨둔다.


* Hexo 기본 사용법 - http://futurecreator.github.io/2016/06/21/hexo-basic-usage/
* Hexo 시작하기 - https://hyunseob.github.io/2016/02/23/start-hexo/
* Git 의 submodule 을 사용하여 Hexo 에 테마 추가하기 - https://saystone.github.io/2017/04/04/How-to-add-a-theme-on-Hexo-using-submodule/
* Add Disqus comments in Hexo - http://www.codeblocq.com/2015/12/Add-Disqus-comments-in-Hexo/
 * 지금의 기본테마 landscape는 disqus 기본 작업이 되어있다. 어지간한 테마에는 다 되어있을듯.

## 새 글 작성

```bash
$ git new [layout] <title> # 새로운 파일을 만든다
$ git publish <포스트명>    # _draft -> _posts로 이동된다.
```

## 배포하기

public 폴더 하위에 정적 파일을 만드는 것과, 파일을 올리는 절차가 나뉘어있다.

로컬에서 `hexo server`를 실행할 때 보이는 페이지들은 `public` 폴더와 무관하다. 

```bash
$ hexo generate                     # public 폴더 생성하기
$ hexo clean                        # public 폴더 정리하기
$ hexo deploy                       # 생성된 파일들을 배포한다.

$ hexo generate --deploy            # 생성 + 배포를 한꺼번에
$ hexo deploy --generate            # 생성 + 배포를 한꺼번에
```

## 설치 관련 : disqus 활성화

config에 `disqus_shortname` 항목을 신규추가하고, disqus의 사이트 이름을 넣는다.

테마 파일들은 config의 값 설정 여부를 통해 disqus를 활성화할지 결정한다.

## Tip: 로컬 서버에서 draft문서도 함께 보기

기본 draft 문서까지 포함해서 보려면 아래처럼 실행

```bash
$ hexo server --draft
```

## Tip: 테마 설치할 때 git `submodule` 활용하기

설치는 git `submodule`을 이용해서 설치한다

```bash
$ git submodule add https://<원본경로> themes/<이름>
```

다른 환경에서 depot을 클론할 때는 submodule도 함께 받아야 한다.

```bash
$ git submodule update --init --recursive
```

참고 : https://git-scm.com/book/ko/v2/Git-%EB%8F%84%EA%B5%AC-%EC%84%9C%EB%B8%8C%EB%AA%A8%EB%93%88
