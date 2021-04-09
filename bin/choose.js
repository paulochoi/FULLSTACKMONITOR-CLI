#!/usr/bin/env node

const { spawn } = require('child_process')
const nrc = require('node-run-cmd')

if (process.platform !== 'win32') {
  const shell = spawn(`bin/startApp`,[process.argv.slice(2)], { stdio: 'inherit' })
  shell.on('close',(code)=>{console.log('[shell] terminated :',code)})
} else {
  const shell = spawn('where', ['git'])
  shell.stdout.on('data', (data) => {
    let dir = data.split('/')
    dir.pop()
    dir = dir.join('/')
    const execute = spawn(`${dir}/git-bash.exe`, ['fullstack-logger-cli', process.argv.slice(2)], { stdio: 'inherit' })
    shell.on('close',(code)=>{console.log('[shell] terminated :',code)})
  })
}
