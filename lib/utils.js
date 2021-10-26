async function sleep(time) {
  return new Promise(resolve => setTimeout(resolve, time))
}

async function wrapLoading(fn, message, ...args) { // 制作了一个等待的loading
  const spinner = ora(message)
  spinner.start() // 开启加载

  try {
    let repos = await fn(...args)
    spinner.succeed() // 成功
    return repos
  } catch (error) {
    spinner.fail('request failed, refetch...')
    await sleep(1000)
    return wrapLoading(fn, message, ...args)
  }

}

module.exports = {
  wrapLoading
}