---
title: '[nvim] config 정리'
tags:
  - nvim
  - terminal
date: 2025-02-08 21:29:48
---

{% asset_img screenshot.png %}

요즘 terminal interface에 엄청난 관심이 생겼습니다. 
회사에서 진행하는 업무에서 리눅스 환경을 좀 더 자주 접하게 되었기 때문입니다. 

최근에는 [아래 썸네일의 영상](https://youtu.be/u6S71cpMfw8?si=VEnZWmiz_3HJ60BO)을 우연히 접하고 난 뒤에 영상의 가이드를 그대로 따라하면서 nvim 설정을 만들어 나가고 있습니다. 
{% asset_img thumbnail.png %}

환경에 좀더 빨리 익숙해지고자 늘어가는 플러그인과 단축키들을 한 곳에 정리합니다.

나중에 단축키들은 설정이 끝나면 따로 프린트해서 집이랑 사무실 모니터에 붙여둘까 합니다.

<!--more-->

## 플러그인 목록

* gruvbox : 컬러 테마. 처음에 그대로 따라서 설치했으나 지금은 비활성화.
* everforest-nvim : 녹색 계열의 컬러 테마. 눈에 편할 것 같아 이걸로 변경.
* neo-tree : 파일 탐색기. 좌측 패널에 파일을 트리 구조로 보여준다.
* telescope : 파일 검색기. 파일을 검색하고 열 수 있다.
* treesitter : syntax parser. syntax highlighting과 indenting을 강화한다.
  - 처음 설치할 때 c 컴파일러가 필요하다. visual studio에서 쓰는 cl도 사용 가능하다. 처음 한 번만 필요. 
* indent-blankline : 들여쓰기를 더 명확하게 보여준다.
* comment : 주석 처리를 쉽게 해준다.


## 단축키

### globals.lua

리터키 및 로컬 리더키: `space`

### keymaps.lua

* `space` + `e` : 파일 탐색기(neo-tree) 열기/닫기
* `space` + `h` : 검색 하이라이트 제거(nohlsearch)

* `ctrl` + `h | j | k | l` : 분할 창 이동

* (visual mode) `< | >` : indentation 줄이기 / 늘이기

### comment.lua

* `gcc` : 주석 처리/해제
* `gc` : 선택된 라인 주석 처리/해제

### telescope.lua

* `space` + `ff` : 파일 검색 (find_files)
* `space` + `fg` : 파일 내 검색 (live_grep)
* `space` + `fb` : 버퍼 목록 검색 (buffers)
* `space` + `fh` : 도움말 목록 검색 (help_tags)

## See also

* raspberry pi에 neovim 설치. 직접 컴파일 해야 한다. - [Link](https://luther.io/articles/how-to-install-neovim-on-raspberry-pi/)
* neovim 설정, 플러그인, 컬러테마 공유 포털 - https://dotfyle.com/