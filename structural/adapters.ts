class UsbCable {
  private isPlugged = false;

  plugUsb() {
    this.isPlugged = true;
  }
}

class UsbPort {
  portAvailable = true;

  plug(usb: UsbCable) {
    if (this.portAvailable) {
      usb.plugUsb();
      this.portAvailable = false;
    }
  }
}

const usbCale = new UsbCable();
const usbPort1 = new UsbPort();
usbPort1.plug(usbCale);

class MicroUsbCable {
  private isPlugged = false;

  plugMicroUsb() {
    this.isPlugged = true;
  }
}

class MicroToUsbAdapter extends UsbCable {
  constructor(private microUsbCale: MicroUsbCable) {
    super();
  }

  override plugUsb(): void {
    this.microUsbCale.plugMicroUsb();
  }
}

const microToUsbAdapter = new MicroToUsbAdapter(new MicroUsbCable());
const usbPort2 = new UsbPort();
usbPort2.plug(microToUsbAdapter);