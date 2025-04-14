// 全局参数
const env = __wxConfig.envVersion
const baseUrls= {
    develop: 'http://localhost:3000',
    release: '',
    trial: ''
}

export default{
    env,
    baseUrl: baseUrls[env],
    token: ''
}
