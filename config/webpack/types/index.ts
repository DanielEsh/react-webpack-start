export type BuildMode = 'production' | 'development'

export interface BuildEnv {
    mode: BuildMode
    port: number
}

export interface BuildPaths {
    entry: string
    output: string
    html: string
}

export interface BuildOptions {
    mode: BuildMode
    paths: BuildPaths
    port: number
    isDev: boolean
}