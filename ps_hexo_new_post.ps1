function Get-ScriptDirectory {
    if ($psise) {
        Split-Path $psise.CurrentFile.FullPath
    }
    else {
        $global:PSScriptRoot
    }
}

Get-ScriptDirectory | Set-Location

#input으로 새 글의 제목을 받는다. 
$title = Read-Host 'Enter Title'

$postType = "post"
# 실행 : hexo new post '제목'
$out = hexo new $postType "$title"
Write-Output $out

if (-not ($out[-1] -match "INFO  Created: (.+)"))
{
    Write-Error "finding new filename failed."
    exit -1
}

$newFilePath = $Matches[1]

#$fileName = $title.Replace(' ', '-')
# 생성된 파일 오픈
#$newFilePath = Join-Path ".\source\_$($postType)s" "$fileName.md"
Write-Output "Open gvim $newFilePath"
#gvim.exe $newFilePath
Start-Process -FilePath $newFilePath
