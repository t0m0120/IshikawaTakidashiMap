## このリポジトリについて

このNext.jsプロジェクトは、令和6年能登半島地震で被災した方への支援プロジェクトです。
地域の炊き出しや施設の開放など、困っている人が助かる情報を即座に出せるサイトを目指して制作しています。

とりあえずChatGPTと一緒にゴリゴリ骨組みだけ書いた状態なので、今後情報の追加と更新をしていく予定です。

もし何かあればIssueまたは[X(Twitter)](https://twitter.com/t0m0120)へご連絡ください。


## 開発方法について

git clone 
↓
GoogleMapのAPIKey MapIDを打ち込むと動くと思います。
```.env.local 
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=""
NEXT_PUBLIC_MAP_ID=""
```