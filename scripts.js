const initialCode = {
	html: `
<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="utf-8">
    <title>Магазин товаров для дома</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <header class="site-header">
      <div class="container">
        <h1>Gloevk</h1>
        <p>Разнообразные товары для дома с доставкой по всей планете</p>
      </div>
    </header>

    <section class="features">
      <h2>Что поможет вам создать домашний уют?</h2>
      <p>Мебель и фурнитура</p>
      <p>Лампы и торшеры</p>
      <!-- Добавьте абзац сюда -->
    </section>

    <section class="advantages">
      <h2>Что выделяет нас среди конкурентов?</h2>
      <ul class="advantages-list">
        <li>Используем только природные материалы</li>
        <li>Ежедневные отчёты о ходе работ</li>
        <li>Сами соберём мебель для вас</li>
        <li>Бесплатное гарантийное обслуживание в течение 10 лет</li>
        <!-- Добавьте пункт списка сюда -->
      </ul>
    </section>

    <footer class="site-footer">
      <div class="container">
        <p>© Кекс, 2020</p>
        <p>Магазин товаров для дома</p>
      </div>
    </footer>
  </body>
</html>
`,
	css: `
 body {
  margin: 0;
  padding: 0;
  font-family: "Arial", sans-serif;
  font-size: 14px;
  line-height: 20px;
  color: #444444;
}

h1 {
  width: 255px;
  margin: 0 auto 8px;
  font-family: "Arial", sans-serif;
  text-align: center;
  font-weight: normal;
  font-size: 56px;
  line-height: 64px;
}

.container {
  width: 510px;
  margin: 0 auto;
  padding: 0 20px;
}

.site-header {
  min-width: 550px;
  height: 186px;
  margin-bottom: 150px;
  padding-top: 30px;
  background: #847462 no-repeat center url("/fogstream/shared_files/298/gloevk-bg.jpg");
  background-size: cover;
  color: #ffffff;
}

.site-header p {
  width: 255px;
  margin: 0 auto 26px;
  text-align: center;
  font-size: 16px;
  line-height: 24px; 
}

.site-header img {
  display: block;
  margin: 0 auto;
}

.features {
  width: 510px;
  margin: 0 auto 30px;
  padding: 0 20px;
}

.features p {
  display: inline-block;
  vertical-align: top;
  width: 30%;
  margin: 0 5px;
  background-repeat: no-repeat;
  background-position: center top;
  text-transform: uppercase;
}

.feature-furniture {
  padding-top: 65px;
  background-image: url("img/furniture.svg");
}

.feature-lighting {
  padding-top: 65px;
  background-image: url("img/lighting.svg");
}

.feature-accessories {
  padding-top: 65px;
  background-image: url("img/accessories.svg");
}

.advantages {
  width: 510px;
  margin: 0 auto 40px;
  padding: 0 20px;
}

.advantages-list {
  padding: 0;
}

.site-footer {
  min-width: 550px;
  background-color: #847462;
  color: #ffffff;
}

.site-footer .container {
  text-align: center;
}

.site-footer p {
  display: inline-block;
  vertical-align: middle;
  padding: 0 20px;
}
`,
}

const taskMessage = `Что такое HTML
Привет! Здорово, что вы хотите познакомиться с вёрсткой сайтов! Эта часть как раз посвящена созданию веб-страниц.

Самый лучший способ начать что-то изучать — это поменять код и посмотреть, что получится! Вам повезло, ведь как раз сейчас у нас под рукой оказался работающий сайт, с которым можно поэкспериментировать.

Если уж что-то менять, то менять по-крупному, чтобы нанесённый урон изменения были максимальными. Так что для начала удалите эту строку, а потом разберёмся, что это было:

<link rel="stylesheet" href="style.css">
Ну, поехали! Удалите кусок кода в редакторе слева и посмотрите, что изменится в мини-браузере справ`

const scrollStyle = `
body::-webkit-scrollbar {
	width: 7px;
	height: 7px;
}
body::-webkit-scrollbar-track {
	background-color: #fff;
}
body::-webkit-scrollbar-thumb {
	background-color: #d1d1d1;
	border-radius: 5px;
}
`

function ResizeSensor(element, callback) {
	let zIndex = parseInt(getComputedStyle(element))
	if (isNaN(zIndex)) {
		zIndex = 0
	}
	zIndex--

	const expand = document.createElement('div')
	expand.style.position = 'absolute'
	expand.style.left = '0px'
	expand.style.top = '0px'
	expand.style.right = '0px'
	expand.style.bottom = '0px'
	expand.style.overflow = 'hidden'
	expand.style.zIndex = zIndex
	expand.style.visibility = 'hidden'

	const expandChild = document.createElement('div')
	expandChild.style.position = 'absolute'
	expandChild.style.left = '0px'
	expandChild.style.top = '0px'
	expandChild.style.width = '10000000px'
	expandChild.style.height = '10000000px'
	expand.appendChild(expandChild)

	const shrink = document.createElement('div')
	shrink.style.position = 'absolute'
	shrink.style.left = '0px'
	shrink.style.top = '0px'
	shrink.style.right = '0px'
	shrink.style.bottom = '0px'
	shrink.style.overflow = 'hidden'
	shrink.style.zIndex = zIndex
	shrink.style.visibility = 'hidden'

	const shrinkChild = document.createElement('div')
	shrinkChild.style.position = 'absolute'
	shrinkChild.style.left = '0px'
	shrinkChild.style.top = '0px'
	shrinkChild.style.width = '200%'
	shrinkChild.style.height = '200%'
	shrink.appendChild(shrinkChild)

	element.appendChild(expand)
	element.appendChild(shrink)

	function setScroll() {
		expand.scrollLeft = 10000000
		expand.scrollTop = 10000000

		shrink.scrollLeft = 10000000
		shrink.scrollTop = 10000000
	}
	setScroll()

	const size = element.getBoundingClientRect()

	let currentWidth = size.width
	let currentHeight = size.height

	const onScroll = () => {
		const size = element.getBoundingClientRect()

		const newWidth = size.width
		const newHeight = size.height

		if (newWidth != currentWidth || newHeight != currentHeight) {
			currentWidth = newWidth
			currentHeight = newHeight

			callback()
		}

		setScroll()
	}

	expand.addEventListener('scroll', onScroll)
	shrink.addEventListener('scroll', onScroll)
}

class QtModule {
	taskId = null
	taskMessage = null
	htmlValue = null
	cssValue = null
	initialCode = null
	frameScale = 1

	htmlTextarea = document.querySelector('#codeAreaHtml')
	cssTextarea = document.querySelector('#codeAreaCss')
	browserTitle = document.querySelector('.browser-title')
	browserFrame = document.querySelector('.qt-iframe')
	overlayFrame = document.querySelector('.prompt-modal__frame--after')

	constructor(taskId, initialCode, taskMessage) {
		this.taskId = taskId
		this.initialCode = initialCode
		this.htmlValue = initialCode.html
		this.cssValue = initialCode.css
		this.taskMessage = taskMessage
	}

	setTextAreaValues() {
		this.htmlTextarea.innerHTML = this.htmlValue
		this.cssTextarea.innerHTML = this.cssValue
	}

	setBrowserTitle() {
		this.browserTitle.innerText = this.getTitleFromHtmlDoc(this.htmlValue)
	}

	setFrameData(iframe, html, css) {
		const iframeContent = iframe.contentDocument
		const iframeCss = document.createElement('style')

		iframeCss.innerHTML = css ? this.cssValue + scrollStyle : scrollStyle
		iframeContent.open()
		iframeContent.write(html)
		iframeContent.close()
		iframeContent.head.appendChild(iframeCss)
	}

	getTitleFromHtmlDoc(str) {
		return str
			.match(/<title>(.*?)<\/title>/g)
			.map(s => s.replace(/<\/?title>/g, ''))
			.join()
	}

	updateModuleData() {
		const htmlChangeHandler = e => {
			this.htmlValue = e.target.value
			this.setBrowserTitle()
			this.setFrameData(this.browserFrame, this.htmlValue, this.cssValue)
			this.setFrameData(this.overlayFrame, this.htmlValue, this.cssValue)
		}
		const cssChangeHandler = e => {
			this.cssValue = e.target.value
			this.setFrameData(this.browserFrame, this.htmlValue, this.cssValue)
			this.setFrameData(this.overlayFrame, this.htmlValue, this.cssValue)
		}
		this.htmlTextarea.addEventListener('input', htmlChangeHandler)
		this.cssTextarea.addEventListener('input', cssChangeHandler)
	}

	initRefresh() {}

	initResizer() {
		const rightEl = document.querySelector('.qt-browser ')
		const leftEl = document.querySelector('.editor-content')

		const rightElWidth = rightEl.clientWidth
		const leftElWidth = leftEl.clientWidth

		new ResizeSensor(rightEl, function () {
			const newWidth = leftElWidth - (rightEl.clientWidth - rightElWidth) + 'px'
			leftEl.style.width = newWidth
		})
	}

	initZoomer() {
		const plusBtn = document.querySelector('.browser-sizer__plus')
		const minusBtn = document.querySelector('.browser-sizer__minus')
		const sizerValue = document.querySelector('.browser-sizer__value')

		let value = Number(sizerValue.innerText)

		const setFrameSize = () => {
			switch (sizerValue.innerText) {
				case '100':
					this.browserFrame.style.transform = 'scale(1)'
					this.browserFrame.style.width = '100%'
					this.browserFrame.style.height = '100%'
					break
				case '75':
					this.browserFrame.style.transform = 'scale(0.75)'
					this.browserFrame.style.width = '133.333%'
					this.browserFrame.style.height = '133.333%'
					break
				case '50':
					this.browserFrame.style.transform = 'scale(0.5)'
					this.browserFrame.style.width = '200%'
					this.browserFrame.style.height = '200%'
					break
				default:
					break
			}
		}

		const increment = () => {
			if (value < 100) {
				value += 25

				sizerValue.innerText = value
				setFrameSize()
			}
		}

		const decrement = () => {
			if (value > 50) {
				value -= 25

				sizerValue.innerText = value
				setFrameSize()
			}
		}

		plusBtn.addEventListener('click', increment)
		minusBtn.addEventListener('click', decrement)
	}

	initModuleData() {
		this.setTextAreaValues()
		this.setBrowserTitle()
		this.setFrameData(this.browserFrame, this.htmlValue, this.cssValue)
		this.updateModuleData()
	}

	initTaskModal() {
		const body = document.querySelector('body')
		const modal = document.querySelector('.task-modal')
		const modalText = document.querySelector('.task-modal__text')
		const modalIcon = document.querySelector('.task-modal__icon')
		const modalCloseBtn = document.querySelector('.task-modal__close')
		const modalOpenBtn = document.querySelector('.task-modal__open')
		const modalOverlay = document.querySelector('.task-modal__overlay')

		modalText.innerText = this.taskMessage

		const closeModal = () => {
			modal.classList.remove('task-modal--active')
			body.classList.remove('lock')
		}

		const openModal = () => {
			modal.classList.add('task-modal--active')
			body.classList.add('lock')
		}

		modalOpenBtn.addEventListener('click', openModal)
		modalIcon.addEventListener('click', closeModal)
		modalCloseBtn.addEventListener('click', closeModal)
		modalOverlay.addEventListener('click', closeModal)
	}

	initConfirmModal() {
		const body = document.querySelector('body')
		const resetButton = document.querySelector('.qt-reset')
		const modal = document.querySelector('.confirm-modal ')
		const overlay = document.querySelector('.confirm-modal__overlay')
		const content = document.querySelector('.confirm-modal__content')
		const acceptBtn = document.querySelector('.confirm-modal__btn--accept ')
		const rejectBtn = document.querySelector('.confirm-modal__btn--reject ')

		const closeModal = () => {
			modal.classList.remove('confirm-modal--active')
			body.classList.remove('lock')
		}

		const openModal = () => {
			modal.classList.add('confirm-modal--active')
			body.classList.add('lock')
		}

		resetButton.addEventListener('click', openModal)
		content.addEventListener('click', e => e.stopPropagation())
		overlay.addEventListener('click', closeModal)
		acceptBtn.addEventListener('click', closeModal)
		rejectBtn.addEventListener('click', closeModal)
	}

	initPromptModal() {
		const body = document.querySelector('body')
		const modal = document.querySelector('.prompt-modal')
		const openBtn = document.querySelector('.qt-prompt__open')
		const closeBtn = document.querySelector('.prompt-modal__btn--close')
		const beforeBtn = document.querySelector('.prompt-modal__btn--before')
		const afterBtn = document.querySelector('.prompt-modal__btn--after')
		const quickBtn = document.querySelector('.prompt-modal__btn--quick')
		const overlayTab = document.querySelector('.prompt-modal__tab--after')
		const rangeSlider = document.querySelector('.prompt-modal__input')
		const mainFrame = document.querySelector('.prompt-modal__frame--before')

		this.setFrameData(mainFrame, initialCode.html, initialCode.css)
		this.setFrameData(this.overlayFrame, this.htmlValue, this.cssValue)

		const closeModal = () => {
			modal.classList.remove('prompt-modal--active')
			body.classList.remove('lock')
		}

		const openModal = () => {
			modal.classList.add('prompt-modal--active')
			body.classList.add('lock')
		}

		function imageCompare() {
			overlayTab.style.width = rangeSlider.value + '%'
		}

		const toggleBefore = () => {
			const slideBefore = setInterval(() => {
				rangeSlider.stepDown()
				imageCompare()

				if (rangeSlider.value == 0) {
					clearInterval(slideBefore)
				}
			}, 5)
		}

		const toggleAfter = () => {
			const slideAfter = setInterval(() => {
				rangeSlider.stepUp()
				imageCompare()

				if (rangeSlider.value == 100) {
					clearInterval(slideAfter)
				}
			}, 5)
		}

		const toggleQuick = () => {
			if (rangeSlider.value == 0) {
				rangeSlider.value = 100
			} else if (rangeSlider.value == 100) {
				rangeSlider.value = 0
			} else if (rangeSlider.value >= 50) {
				rangeSlider.value = 100
			} else {
				rangeSlider.value = 0
			}

			imageCompare()
		}

		openBtn.addEventListener('click', openModal)
		closeBtn.addEventListener('click', closeModal)
		beforeBtn.addEventListener('click', toggleBefore)
		afterBtn.addEventListener('click', toggleAfter)
		quickBtn.addEventListener('click', toggleQuick)
		rangeSlider.addEventListener('input', imageCompare)
	}

	initTabs() {
		const htmlTrigger = document.querySelector('.tab-trigger--html')
		const cssTrigger = document.querySelector('.tab-trigger--css')
		const htmlContent = document.querySelector('.editor-tab--html')
		const cssContent = document.querySelector('.editor-tab--css')

		const openHtmlTab = () => {
			cssTrigger.classList.remove('tab-trigger--active')
			htmlTrigger.classList.add('tab-trigger--active')
			cssContent.classList.remove('editor-tab--active')
			htmlContent.classList.add('editor-tab--active')
		}

		const openCssTab = () => {
			htmlTrigger.classList.remove('tab-trigger--active')
			cssTrigger.classList.add('tab-trigger--active')
			htmlContent.classList.remove('editor-tab--active')
			cssContent.classList.add('editor-tab--active')
		}

		htmlTrigger.addEventListener('click', openHtmlTab)
		cssTrigger.addEventListener('click', openCssTab)
		htmlTrigger.click()
	}

	init() {
		this.initModuleData()
		this.initTabs()
		this.initTaskModal()
		this.initConfirmModal()
		this.initPromptModal()
		this.initZoomer()
		this.initResizer()
	}
}

const qtModule = new QtModule(0, initialCode, taskMessage)
qtModule.init()

// highlighting -----------------------------------------------------
class Parser {
	constructor(rules, i) {
		const api = this

		// variables used internally
		i = i ? 'i' : ''
		let parseRE = null
		const ruleSrc = []
		const ruleMap = {}

		api.add = rules => {
			for (const rule in rules) {
				const s = rules[rule].source
				ruleSrc.push(s)
				ruleMap[rule] = new RegExp('^(' + s + ')$', i)
			}
			parseRE = new RegExp(ruleSrc.join('|'), 'g' + i)
		}
		api.tokenize = input => input.match(parseRE)
		api.identify = token => {
			for (const rule in ruleMap) {
				if (ruleMap[rule].test(token)) {
					return rule
				}
			}
		}

		api.add(rules)

		return api
	}
}

class TextareaDecorator {
	constructor(textarea, parser) {
		const api = this

		// construct editor DOM
		const parent = document.createElement('div')
		const output = document.createElement('pre')
		const label = document.createElement('label')

		parent.appendChild(output)
		parent.appendChild(label)

		// replace the textarea with RTA DOM and reattach on label
		textarea.parentNode.replaceChild(parent, textarea)
		label.appendChild(textarea)

		// transfer the CSS styles to our editor
		parent.className = 'ldt ' + textarea.className
		textarea.className = ''
		// turn off built-in spellchecking in firefox
		textarea.spellcheck = false
		// turn off word wrap
		textarea.wrap = 'off'

		// coloring algorithm
		const color = function (input, output, parser) {
			const oldTokens = output.childNodes
			const newTokens = parser.tokenize(input)
			let firstDiff, lastDiffNew, lastDiffOld

			// find the first difference
			for (
				firstDiff = 0;
				firstDiff < newTokens.length && firstDiff < oldTokens.length;
				firstDiff++
			)
				if (newTokens[firstDiff] !== oldTokens[firstDiff].textContent) break
			// trim the length of output nodes to the size of the input
			while (newTokens.length < oldTokens.length)
				output.removeChild(oldTokens[firstDiff])
			// find the last difference
			for (
				lastDiffNew = newTokens.length - 1, lastDiffOld = oldTokens.length - 1;
				firstDiff < lastDiffOld;
				lastDiffNew--, lastDiffOld--
			)
				if (newTokens[lastDiffNew] !== oldTokens[lastDiffOld].textContent) break
			// update modified spans
			for (; firstDiff <= lastDiffOld; firstDiff++) {
				oldTokens[firstDiff].className = parser.identify(newTokens[firstDiff])
				oldTokens[firstDiff].textContent = oldTokens[firstDiff].innerText =
					newTokens[firstDiff]
			}
			// add in modified spans
			for (
				const insertionPt = oldTokens[firstDiff] || null;
				firstDiff <= lastDiffNew;
				firstDiff++
			) {
				const span = document.createElement('span')
				span.className = parser.identify(newTokens[firstDiff])
				span.textContent = span.innerText = newTokens[firstDiff]
				output.insertBefore(span, insertionPt)
			}
		}

		api.input = textarea
		api.output = output
		api.update = function () {
			const input = textarea.value
			if (input) {
				color(input, output, parser)
				// determine the best size for the textarea
				const lines = input.split('\n')
				// find the number of columns
				let maxlen = 0,
					curlen
				for (let i = 0; i < lines.length; i++) {
					// calculate the width of each tab
					let tabLength = 0,
						offset = -1
					while ((offset = lines[i].indexOf('\t', offset + 1)) > -1) {
						tabLength += 7 - ((tabLength + offset) % 8)
					}
					curlen = lines[i].length + tabLength
					// store the greatest line length thus far
					maxlen = maxlen > curlen ? maxlen : curlen
				}
				textarea.cols = maxlen + 1
				textarea.rows = lines.length + 2
			} else {
				// clear the display
				output.innerHTML = ''
				// reset textarea rows/cols
				textarea.cols = textarea.rows = 1
			}
		}

		// detect all changes to the textarea,
		// including keyboard input, cut/copy/paste, drag & drop, etc
		if (textarea.addEventListener) {
			// standards browsers: oninput event
			textarea.addEventListener('input', api.update, false)
		} else {
			// MSIE: detect changes to the 'value' property
			textarea.attachEvent('onpropertychange', e => {
				if (e.propertyName.toLowerCase() === 'value') {
					api.update()
				}
			})
		}
		// initial highlighting
		api.update()

		return api
	}
}

const htmlParser = new Parser({
	whitespace: /\s+/,
	number: /0x[\dA-Fa-f]+|-?(\d+\.?\d*|\.\d+)|#[\dA-Fa-f]{3,6}/,
	comment: /\/\*([^\*]|\*[^\/])*(\*\/?)?|(\/\/|#)[^\r\n]*/,
	string: /"(\\.|[^"\r\n])*"?|'(\\.|[^'\r\n])*'?/,
	htmlcom: /<!--(.*?)-->/,
	otag: /<([\w]+)/,
	ctag: /<\/([\w]+)/,
	attribute: /[\w-]+\s*=/,
	op: /[\+\-\*\/=<>!]=?|[\(\)\{\}\[\]\.\|]/,
	other: /\S/,
})

const cssParser = new Parser({
	whitespace: /\s+/,
	number: /0x[\dA-Fa-f]+|-?(\d+\.?\d*|\.\d+)|#[\dA-Fa-f]{3,6}/,
	comment: /\/\*([^\*]|\*[^\/])*(\*\/?)?|(\/\/|#)[^\r\n]*/,
	string: /"(\\.|[^"\r\n])*"?|'(\\.|[^'\r\n])*'?/,
	ctag: /(?![#.])\S*\s*\{/,
	cname: /\.(-?[_a-zA-Z]+[_a-zA-Z0-9-]*)(?![^\{]*\})/,
	cvalue: /(?:([\w\d\S\-\_]+)\:)/,
	cunit: /(rem|em|px|vh|vw|vmin|vmax|%)(?!\w|=)/,
	op: /[\+\-\*\/=<>!]=?|[\(\)\{\}\[\]\.\|]/,
	other: /\S/,
})

const htmlLdt = new TextareaDecorator(
	document.querySelector('#codeAreaHtml'),
	htmlParser
)
const cssLdt = new TextareaDecorator(
	document.querySelector('#codeAreaCss'),
	cssParser
)
