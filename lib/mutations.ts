import fetcher from './fetcher'

export const auth = (mode: 'signin' | 'signup', body: { email: string, password: string }): Promise<Response> => {
 return fetcher('/${mode}', body)
}