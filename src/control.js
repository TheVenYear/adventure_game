class Control {
  left = false;
  up = false;
  right = false;

  keyListener = (event) => {
    let keyState = event.type == "keydown";

    switch (event.keyCode) {
      case 37:
        this.left = keyState;
        break;

      case 38:
        this.up = keyState;
        break;

      case 39:
        this.right = keyState;
        break;
    }
  };
}

export default Control;
