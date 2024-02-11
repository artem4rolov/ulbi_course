type Mods = Record<string, string | boolean>

export function classNames (
    cls: string,
    mods: Mods = {},
    additional: string[] = []
): string {
    return [
    // главный класс
        cls,
        // фильтруем только те свойства, в которых есть true
        ...additional,
        ...Object.entries(mods)
            .filter(([key, value]) => !!value)
            .map(([key, value]) => key),
        // дополнительные классы
    ].join(' ')
}
