# Tabloom｜页序

> This repository contains the packaged Chrome extension only. It does not contain the TypeScript or React source code.
>
> 本仓库只包含可安装的 Chrome 扩展构建产物，不包含 TypeScript 或 React 源码。

Tabloom（中文名：页序）会把所有 Chrome 窗口中的标签页按网站整理到一个干净的新标签页工作台中。

Tabloom organizes tabs from every Chrome window into a clean new-tab workspace grouped by website.

## 中文

### 使用编程代理安装

把下面的地址发送给 Claude Code、Codex 等编程代理，并告诉它：

> 安装这个 Chrome 扩展。下载仓库后，指导我在 `chrome://extensions` 中加载它。

```text
https://github.com/cuiyuanS/Tabloom
```

通常约需 1 分钟。

### 手动安装

1. 点击 GitHub 页面上的 **Code -> Download ZIP**。
2. 解压下载的 ZIP 文件。
3. 在 Chrome 地址栏打开 `chrome://extensions`。
4. 开启右上角的“开发者模式”。
5. 点击“加载已解压的扩展程序”。
6. 选择解压后直接包含 `manifest.json` 的文件夹。
7. 打开一个新标签页，即可使用页序。

### 功能

- 按网站查看所有窗口中的标签页
- 集中整理 Gmail、X、YouTube、LinkedIn 和 GitHub 首页
- 跨窗口跳转、关闭单个标签页或整个分组
- 检测并一键清理完全重复的页面
- 将页面保存到稍后阅读清单和归档
- 显示 localhost 端口，区分本地开发项目
- 中英文界面
- 微信与支付宝打赏

### 隐私

扩展不使用作者的服务器，也不会向作者发送浏览记录、标签页标题或网址。设置和稍后阅读内容保存在 `chrome.storage.sync` 中；Chrome 可能根据你的账号同步设置在设备之间同步这些数据。

## English

### Install with a coding agent

Send this repository to Claude Code, Codex, or another coding agent and say:

> Install this Chrome extension. Download the repository and guide me through loading it in `chrome://extensions`.

```text
https://github.com/cuiyuanS/Tabloom
```

It usually takes about one minute.

### Manual installation

1. Click **Code -> Download ZIP** on GitHub.
2. Extract the downloaded ZIP archive.
3. Open `chrome://extensions` in Chrome.
4. Enable **Developer mode** in the top-right corner.
5. Click **Load unpacked**.
6. Select the extracted folder that directly contains `manifest.json`.
7. Open a new tab to start using Tabloom.

### Features

- View tabs from every window grouped by website
- Collect Gmail, X, YouTube, LinkedIn, and GitHub homepages together
- Jump across windows and close individual tabs or complete groups
- Detect and remove exact duplicate pages with one click
- Save pages to a reading queue and archive
- Keep localhost ports visible for local development projects
- English and Simplified Chinese interfaces
- WeChat Pay and Alipay support

### Privacy

The extension does not use the author's servers and does not send browsing history, tab titles, or URLs to the author. Settings and saved pages use `chrome.storage.sync`; Chrome may synchronize this data between devices according to your account settings.
