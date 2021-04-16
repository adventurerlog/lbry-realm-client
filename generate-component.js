// eslint-disable-next-line no-undef
const path = require('path')
const fs = require('fs');
function writeFileSyncRecursive(filename, content, charset) {
  // -- normalize path separator to '/' instead of path.sep,
  // -- as / works in node for Windows as well, and mixed \\ and / can appear in the path
  let filepath = filename.replace(/\\/g,'/');

  // -- preparation to allow absolute paths as well
  let root = '';
  if (filepath[0] === '/') {
    root = '/';
    filepath = filepath.slice(1);
  }
  else if (filepath[1] === ':') {
    root = filepath.slice(0,3);   // c:\
    filepath = filepath.slice(3);
  }

  // -- create folders all the way down
  const folders = filepath.split('/').slice(0, -1);  // remove last item, file
  folders.reduce(
    (acc, folder) => {
      const folderPath = acc + folder + '/';
      if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath);
      }
      return folderPath
    },
    root // first 'acc', important
  );

  // -- write file
  fs.writeFileSync(root + filepath, content, charset);
}
let filePath = process.argv[2]
const template = (name) => {
  return `<template>
<p>${name} works!</p>
</template>

<script>
export default {
  name: '${name}',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
`;
}
const finalPath = ['.', 'src', 'components', ...filePath.split('/')]
//final element of the array is the file
const fileName = finalPath[finalPath.length - 1]
  .split('-')
  .map(word =>
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join('')
finalPath[finalPath.length - 1] = fileName+'.vue';

writeFileSyncRecursive(path.resolve(path.join(...finalPath)),template(fileName),'utf-8')

console.log(
  path.resolve(path.join(...finalPath))
);



