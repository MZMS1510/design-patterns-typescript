class Window {
  constructor(public title: string, public width: number, public height: number) { }
  
  displayInfo(): void {
    console.log(`Window Title: ${this.title}, Width: ${this.width}, Height: ${this.height}`);
  }
}

class WindowFactory {
  static createDefaultWindow(): Window {
    return new Window("Default Window", 800, 600);
  }

  static createWideScreenWindow(): Window {
    return new Window("Wide Screen Window", 1280, 720);
  }

  static createFullScreenWindow(): Window {
    return new Window("Full Screen Window", 1920, 1080);
  }
}

const window1 = WindowFactory.createDefaultWindow();
window1.displayInfo();

const window2 = WindowFactory.createWideScreenWindow();
window2.displayInfo();

const window3 = WindowFactory.createFullScreenWindow();
window3.displayInfo();