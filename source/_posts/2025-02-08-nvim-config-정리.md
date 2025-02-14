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
* lualine : 상태바를 꾸며준다. 독자적인 테마설정이 있는데, 현 메인테마(everforest)와 맞춰준다.
* mason : LSP 버전 관리. 플러그인 및 의존성 관리 등
  * mason-lspconfig : mason - lsp간 설정. 
  * nvim-lspconfig : neovim - lsp간 설정. 단축키 설정 등
* nvim-autopairs : 자동 괄호 삽입. 괄호를 열면 자동으로 닫히게 해준다.


## 단축키

더하기는 함께 누르는 것, 그냥 공백은 연속으로 누르는 것을 의미한다.

| 단축키 | 설명 | 위치 |
| --- | --- | --- |
| `space`                  | 리더키 | globals.lua |
| `space` `e`              | 파일 탐색기(neo-tree) 열기/닫기 | keymaps.lua |
| `space` `h`              | 검색 하이라이트 제거(nohlsearch) | |
| `ctrl` + `h , j , k , l` | 분할 창 이동 | |
| (visual mode) `< , >`    | indentation 줄이기 / 늘이기 | |
| `gcc`                    | 주석 처리/해제 | comment.lua |
| `gc`                     | 선택된 라인 주석 처리/해제 | |
| `space` `f` `f`          | 파일 검색 (find_files) | telescope.lua |
| `space` `f` `g`          | 파일 내 검색 (live_grep) | |
| `space` `f` `b`          | 버퍼 목록 검색 (buffers) | |
| `space` `f` `h`          | 도움말 목록 검색 (help_tags) | |
| `shift` + `k`            | LSP hover | lsp.lua |
| `g` `d`                  | LSP goto definition (이전 버퍼로 돌아올 땐 Ctrl + 6)| |
| `space` `c` `a`          | LSP code action | |


## See also

* raspberry pi에 neovim 설치. 직접 컴파일 해야 한다. - [Link](https://luther.io/articles/how-to-install-neovim-on-raspberry-pi/)
* neovim 설정, 플러그인, 컬러테마 공유 포털 - https://dotfyle.com/
* c# in neovim - [Link](https://www.reddit.com/r/neovim/comments/1eikoyu/does_anyone_tried_omnisharp_in_neovim/?rdt=46411)


## troubleshooting

#### LSP 설치 이슈

* lua: path상에 lua lsp가 있어야 한다. winget으로 설치해준다.

```
winget install LuaLS.lua-language-server
```

* c# : 일단 `csharp_ls`로 설치를 했는데 잘 되지 않는다. omnisharp가 정통인데, 잘못 선택한 걸까. 
path를 못찾는다는 오류가 발생해서 dotnet tool로 된 ls 설치.

```
dotnet tool install -g csharp_ls
```

이후에 .cs 파일을 열면 msbuild를 패스에서 찾지 못한다는 오류가 발생한다.

```
Error executing vim.schedule lua callback: ...m Files/Neovim/share/nvim/runtime/lua/vim/lsp/client.lua:588:
  RPC[Error] code_name = InternalError, message = "System.InvalidOperationException: No instances of MSBuild could be detected.\13\
  Try calling RegisterInstance or RegisterMSBuildPath to manually register one.\13\
    at CSharpLanguageServer.Handlers.Initialization.handleInitialize@52-6.Invoke(Unit _arg2) in /_//src/CSharpLanguageServer/Handlers/Initialization.fs:line 55\13\
    at Microsoft.FSharp.Control.AsyncPrimitives.CallThenInvokeNoHijackCheck[a,b](AsyncActivation`1 ctxt, b result1, FSharpFunc`2 userCode) in D:\\workspace\\_work\\1\\s\\src\\fsharp\\FSharp.Core\\async.fs:line 464\13\
    at Ionide.LanguageServerProtocol.Server.sendServerNotification@139-3.Invoke(AsyncActivation`1 ctxt)\13\
    at Microsoft.FSharp.Control.Trampoline.Execute(FSharpFunc`2 firstAction) in D:\\workspace\\_work\\1\\s\\src\\fsharp\\FSharp.Core\\async.fs:line 104"
  stack traceback:
    [C]: in function 'assert'
      ...m Files/Neovim/share/nvim/runtime/lua/vim/lsp/client.lua:588: in function 'fn'
      vim/_editor.lua:351: in function <vim/_editor.lua:350>
```

> System.InvalidOperationException: No instances of MSBuild could be detected. 
> Try calling RegisterInstance or RegisterMSBuildPath to manually register one. 

여기가 핵심. 근데 `where msbuild`가 동작하도록 개발자 커맨드 프롬프트에서 진행해도 동일하다. 

그래서 검색을 해보니 [roslyn.nvim](https://github.com/seblyng/roslyn.nvim)을 설치하는 것이 더 좋은 듯 하다. 이건 메모만 남겨두고 나중에 다시 시도. 