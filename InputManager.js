import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

class InputManager {
  awaitInput(callback) {
    rl.question(
      "F)irst page, P)revious page, N)ext page, L)ast page, E)xit \n",
      (answer) => {
        callback(answer);
        this.awaitInput(callback);
      }
    );
  }
}

export default InputManager;
