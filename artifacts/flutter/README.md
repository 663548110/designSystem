# Flutter Theme Artifacts

这里保存 Flutter/RDesign/TDesign 侧主题产物。

默认文件：

- `rd_${themeId}_theme.dart`

维护约定：

- 文件形态贴合 `RDThemeRegistry` 和 `TDThemeData.fromJson`。
- 只映射可识别的 TDesign/RDesign theme key。
- 缺失 key 只记录 warning，不在生成产物里算法补齐。
