export function trim(str: string) {
    return str.replace(/^ +/mg, '')
        .replace(/ +$/mg, '')
        .split(/\n{2,}/)
        .map(p => p.replace(/\n/mg, ' ').trim())
        .filter(Boolean)
        .join('\n')
}
