module.exports = {
	"env": {
		"browser": true,
		"es2021": true
	},
	"extends": [
		// 默认继承的配置 后面的会覆盖前面的
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:vue/vue3-essential",
		'plugin:vue/vue3-strongly-recommended',
		'plugin:vue/vue3-recommended',
	],
	"overrides": [
		{
			"env": {
				"node": true
			},
			"files": [
				".eslintrc.{js,cjs}"
			],
			"parserOptions": {
				"sourceType": "script"
			}
		}
	],
	"parserOptions": {
		"ecmaVersion": "latest",
		"parser": "@typescript-eslint/parser",
		"sourceType": "module"
	},
	"plugins": [
		"@typescript-eslint",
		"vue"
	],
	"rules": {
		// "off" 或 0 - 关闭该规则"warn" 或 1 - 启用并警告（不影响现有代码）"error" 或 2 - 启用并报错（错误代码 1）
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		//在rules中添加自定义规则
		//关闭组件命名规则
		"vue/multi-word-component-names": "off",
		// 用于指定代码缩进的方式，这里配置为使用四个空格进行缩进。
		"vue/html-indent": ["error", "tab"],  // 在模板中强制使用tab
		"indent": ["error", "tab"],            // 在脚本和js文件中强制使用制表符tab
		"quotes": ['error', 'single'], // 用于指定字符串的引号风格，这里配置为使用单引号作为字符串的引号。
		'@typescript-eslint/no-explicit-any': ['off'], // 用于配置 TypeScript 中的 "any" 类型的使用规则，这里配置为关闭禁止显式使用 "any" 类型的检查。
		// 箭头间距
		"arrow-spacing": "warn",
		// 逗号间距
		"comma-spacing": "warn",
		// 结尾逗号
		"comma-dangle": "warn",
		// 键值空格
		"key-spacing": "warn",
		// 关键词空格
		"keyword-spacing": "warn",
		// 符号间隔
		"space-infix-ops": "warn",
		// 禁止重复模块导入
		"no-duplicate-imports": "warn",
		// 静态样式类需位于单独的 class 类中
		"vue/prefer-separate-static-class": "warn",
		// 禁用 v-html
		"vue/no-v-html": "off",
		// 属性强制执行一致的位置
		"vue/first-attribute-linebreak": ["error", {
			"singleline": "beside",
			"multiline": "below"
		}],
		// 标签结束括号位置
		"vue/html-closing-bracket-newline": ["error", {
			"singleline": "never",
			"multiline": "never"
		}],
		// 组件名称大驼峰应用
		"vue/component-name-in-template-casing": ["warn", "PascalCase"],
		// 传入组件的属性（boolean）使用速记形式
		"vue/prefer-true-attribute-shorthand": "warn",
		// prop 默认值
		"vue/require-default-prop": "off",
		// 变量未使用
		"no-unused-vars": "off",
		// 变量未使用 覆盖 @typescript-eslint 中的规则
		'@typescript-eslint/no-unused-vars': ['warn'],
	}
}
