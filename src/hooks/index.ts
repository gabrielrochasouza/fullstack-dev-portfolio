import { useEffect } from "react";

const SECTIONS = ['intro', 'about', 'project', 'contact'];
const PAGE_SCROLL_INTERVAL = 300;
const DEFAULT_SECTION_INDEX = 0;
const LOCAL_HASH = document.location.hash.slice(1);

let CURRENT_SECTION_INDEX = SECTIONS.some(s => s === LOCAL_HASH) ? SECTIONS.findIndex(s => s === LOCAL_HASH) : DEFAULT_SECTION_INDEX;
let IS_ABLE_TO_SCROLL = true;

const movePage = (section:string) => {
  const link = document.createElement('a')
  link.href = document.location.origin + "/#" + section
  link.click();
}

const intervalBetweenScrolls = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      IS_ABLE_TO_SCROLL = true
      resolve
    }, PAGE_SCROLL_INTERVAL)}
  )
}

export const scrollDown = async () => {
  if ((CURRENT_SECTION_INDEX < SECTIONS.length - 1) && IS_ABLE_TO_SCROLL) {
    CURRENT_SECTION_INDEX++
    IS_ABLE_TO_SCROLL = false
    const section = SECTIONS[CURRENT_SECTION_INDEX]
    movePage(section)

    await intervalBetweenScrolls()
  }
}

export const scrollUp = async () => {
  if ((CURRENT_SECTION_INDEX !== 0) && IS_ABLE_TO_SCROLL) {
    CURRENT_SECTION_INDEX--
    IS_ABLE_TO_SCROLL = false
    const section = SECTIONS[CURRENT_SECTION_INDEX]
    movePage(section)

    await intervalBetweenScrolls()
  }
}

const roll = (e: WheelEvent)=>{
  if (e.deltaY > 0) {
    scrollDown()
  } else {
    scrollUp()
  }
}
const keyDown = (e:KeyboardEvent)=> {
  if (e.key === 'ArrowUp') {
    scrollUp()
  }
  if (e.key === 'ArrowDown') {
    scrollDown()
  }
}

let TOUCH_START_SCREENY = 0

const touchStart = (touch: TouchEvent) => {
  TOUCH_START_SCREENY = touch.changedTouches[0].screenY;
}

const touchEnd = (touch: TouchEvent) => {
  const touchEndScreenY = touch.changedTouches[0].screenY;
  const swipe = touchEndScreenY - TOUCH_START_SCREENY;
  const swipeLength = 40
  if (swipe > swipeLength) {
    return scrollUp();
  } 
  if (swipe < -swipeLength) {
    return scrollDown();
  }
}

export const ScrollHook = () => {
  useEffect(()=> {
    document.addEventListener('wheel', roll);
    document.addEventListener('keydown', keyDown);
    document.addEventListener('touchstart', touchStart)
    document.addEventListener('touchend', touchEnd)
    return ()=> {
      document.removeEventListener('wheel', roll);
      document.removeEventListener('keydown', keyDown);
      document.removeEventListener('touchstart', touchStart);
      document.removeEventListener('touchend', touchEnd);
    }
  }, [roll, keyDown])
}

export const currentSection = SECTIONS[CURRENT_SECTION_INDEX];