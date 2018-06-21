const dev = {
    context: 'http://localhost:3000/'
}
const prod = {
    context: 'aurl'
}

export const environment = process.env.NODE_ENV === 'production'
    ? prod  
    : dev