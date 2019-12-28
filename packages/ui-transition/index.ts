import Transition from './Transition'

export default {
  init() {
    let style = document.createElement('style')
    style.textContent = `*{box-sizing: border-box;} body {margin: 0}
      .box {
        width: 200px;
        height: 200px;;
        background: blue;
        transition: all 1s;
      }
      .list {padding: 15px 30px;margin: 10px;/*width: 100px;height: 20px;*/background: yellow;}
      /*.list {padding: 0;margin: 0;}*/
      .list > li {padding: 10px 20px;}
      .square {width: 50px; height: 50px; background: orange;}

      .fade-enter-active, .fade-leave-active {
        transition: all .5s;
      }
      .fade-enter, .fade-leave-to, .fade-leave-done {
        opacity: 0;
        height: 0;
      }
      .fade-enter-to {
        /*height: auto;*/
      }
      .fade-enter-done {
        /*height: auto;*/
      }

      .morph-enter-active, .morph-leave-active {
        transition: all 1.5s;
      }
      .morph-enter, .morph-leave-to, .morph-leave-done {
        border-radius: 50%;
        /*width: 0;*/
        height: 0;
        border-width: 0;
        margin: 0;
        padding: 0;
        background-color: green;
      }
    `
    document.body.appendChild(style)
  },

  test() {
    // this.init()

    const box = document.createElement('div')

    box.classList.add('box')
    document.body.appendChild(box)

    const button = document.createElement('button')

    button.textContent = 'PLAY'
    document.body.appendChild(button)
    button.addEventListener('click', () => {
      requestAnimationFrame(() => {
        box.style.transition = 'none'
        box.style.transform = 'translateX(1000px)'

        requestAnimationFrame(() => {
          box.style.transition = 'transform 1s ease-in-out'
          box.style.transform = 'translateX(500px)'
        })
      })
    })
    //@ts-ignore
    window.box = box
  },

  test2() {
    // this.init()
    const el: HTMLElement | SVGSVGElement | null = document.querySelector(
      '#app'
    )

    if (!el) {
      return
    }

    let ul = document.createElement('ul')
    ul.classList.add('list')
    let li1 = document.createElement('li')
    let li2 = li1.cloneNode()
    let li3 = li1.cloneNode()
    li1.textContent = 'List item 1'
    li2.textContent = 'List item 2'
    li3.textContent = 'List item 3'
    ul.appendChild(li1)
    ul.appendChild(li2)
    ul.appendChild(li3)
    el.appendChild(ul)
    let square = document.createElement('div')
    square.classList.add('square')
    el.appendChild(square)
    let btn = document.createElement('button')
    btn.textContent = 'toggle'
    el.prepend(btn)

    const transition = new Transition(ul, {
      name: 'morph',
      stageIndex: 1,
      forceUpdate: true,
      css: true,
      autoSize: true,
      hideAfterLeave: true,
      // duration: 2500,
    })

    btn.addEventListener('click', async () => {
      await transition.toggle()
    })

    // let i = 100;
    //
    // while (--i) {
    //   transition.toggle()
    // }

    // @ts-ignore
    window.transition = transition
    console.log(transition)
  },
}
