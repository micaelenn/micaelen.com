export function fromEnv(name: string): string | undefined {
    return process.env[name]
}
