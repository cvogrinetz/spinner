const spinner = ['|', '/', '-', '\\', '|','|', '/', '-', '\\', '|'];
let timeDelay = 100;

for (const element of spinner) {
  setTimeout(() => {
    process.stdout.write('\r' + element);
  }, timeDelay += 200);
}

setTimeout(() => {
  process.stdout.write('\n');
}, 3000);