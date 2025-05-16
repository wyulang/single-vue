# single-vue
vue2 webpack4  @babel/core babel-loader8

vue-seamless-scroll


"vetur.format.defaultFormatter.html": "js-beautify-html",
    "vetur.format.defaultFormatterOptions": {
        "js-beautify-html": {
            "wrap_line_length": 320,
            "wrap_attributes": "auto",
            "end_with_newline": false
        }
    },
    "vetur.format.defaultFormatter.js": "vscode-typescript",
    "editor.detectIndentation": true,
    "editor.tabSize": 2
    
    
Android SDK Manager
1.启动 Android SDK Manager ；
2.打开主界面，依次选择「Tools」、「Options…」，弹出『Android SDK Manager – Settings』窗口；
3.在『Android SDK Manager – Settings』窗口中，在「HTTP Proxy Server」和「HTTP Proxy Port」输入框内填入mirrors.neusoft.edu.cn和80，并且选中「Force https://… sources to be fetched using http://…」复选框；
4.设置完成后单击「Close」按钮关闭『Android SDK Manager – Settings』窗口返回到主界面；
5.依次选择「Packages」、「Reload」。

•用notepad打开C:\WINDOWS\system32\drivers\etc中的hosts文件
•在最后一行添加74.125.237.1 dl-ssl.google.com

http://mirrors.neusoft.edu.cn/android/repository/


http://www.cnblogs.com/goldlong/p/8109283.html 安装教程 李 艳 茹  q340613539

puppeteer是一个基于js的强大API，它可以操作Chrome浏览器进行网页的获取，并且能进行无头浏览模式，强大到没朋友。


公羊:
{
    "vetur.format.defaultFormatter.html": "js-beautify-html",
    "vetur.format.defaultFormatterOptions": {
        "js-beautify-html": {
            "wrap_line_length": 320,
            "wrap_attributes": "auto",
            "end_with_newline": false
        }
    },
    "editor.detectIndentation": true,
    "editor.tabSize": 2,
    "window.zoomLevel": 1,
    "editor.fontSize": 16,
    "workbench.colorTheme": "One Dark Pro",
    "explorer.confirmDelete": false,
    "editor.wordSeparators": "`~!@#$%^&*()=+[{]}\\|;:'\",.<>/?",
    "files.exclude": {
        "**/.classpath": true,
        "**/.project": true,
        "**/.settings": true,
        "**/.factorypath": true
    },
    "editor.suggestSelection": "first",
    "vsintellicode.modify.editor.suggestSelection": "automaticallyOverrodeDefaultValue",
    "editor.quickSuggestions": {
        "strings": true
    },
    "git.autofetch": true,
    "terminal.integrated.rendererType": "dom",
    "vsicons.dontShowNewVersionMessage": true,
    "editor.minimap.scale": 3,
    "editor.minimap.maxColumn": 60,
    "explorer.confirmDragAndDrop": false,
    "[dart]": {
        "editor.formatOnSave": true,
        "editor.formatOnType": true,
        "editor.rulers": [            80
        ],
        "editor.selectionHighlight": false,
        "editor.suggest.snippetsPreventQuickSuggestions": false,
        "editor.suggestSelection": "first",
        "editor.tabCompletion": "onlySnippets",
        "editor.wordBasedSuggestions": false
    },
    "vetur.format.defaultFormatter.js": "vscode-typescript",
    "vetur.format.defaultFormatter.ts": "vscode-typescript",
    "vetur.validation.template": false,
    "terminal.integrated.tabs.enabled": true,
    "terminal.integrated.defaultProfile.windows": "Command Prompt",
    "[less]": {
        "editor.defaultFormatter": "michelemelluso.code-beautifier"
    },
    "[vue]": {
        "editor.defaultFormatter": "octref.vetur"
    },
    "security.workspace.trust.untrustedFiles": "open"
}

公羊:
{
  "Print to console": {
    "prefix": "templ",
    "body": [      "<template>",
      "    <div></div>",
      "</template>\n",
      "<script>",
      "export default {",
      "    data() {",
      "        return {\n",
      "        }",
      "    },",
      "    methods: {",
      "    },",
      "    created() {",
      "    },",
      "};",
      "</script>\n",
      "<style scoped lang=\"${1:less}\">\n",
      "</style>\n",
    ],
    "description": "Create vue template"
  },
  "typescriptVue": {
    "prefix": "tsmpl",
    "body": [      "<template>",
      "  <div></div>",
      "</template>",
      "",
      "<script lang='ts'>",
      "import {Vue} from 'vue-property-decorator';",
      "export default class App extends Vue {",
      "}",
      "</script>",
      "",
      "<style lang='less'>",
      "</style>",
    ],
    "description": "Create vue template"
  },
  "canvas": {
    "prefix": "cv",
    "body": [      "/** @type {HTMLCanvasElement} */"
    ],
    "description": "Create vue template"
  },
  "canvas-htm": {
    "prefix": "cvs",
    "body": [      "/** @type {HTMLCanvasElement} */",
      "let canvas = document.getElementById('canvas')",
      "let g = canvas.getContext('2d')"
    ],
    "description": "Create vue template"
  }
}

