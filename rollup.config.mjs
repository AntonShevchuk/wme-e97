import typescript from '@rollup/plugin-typescript'
import postcss from 'rollup-plugin-postcss'
import { readFileSync } from 'fs'

const pkg = JSON.parse(readFileSync('./package.json', 'utf8'))
const meta = readFileSync('./src/meta.ts', 'utf8')
const banner = meta.replace('{{version}}', pkg.version)

export default {
  input: 'src/index.ts',
  output: {
    file: 'dist/WME-E97.user.js',
    format: 'iife',
    banner,
  },
  plugins: [
    postcss({ inject: false }),
    typescript(),
  ],
}
