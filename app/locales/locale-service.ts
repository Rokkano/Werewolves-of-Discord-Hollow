import { Debug } from "utils/debug";

const path = require("path")
const { I18n } = require('i18n')

const defaultLocale = 'fr'

Debug.log(`Handling locales : default set on '${defaultLocale}'`)

export class LocaleService {
    private static i18n = new I18n({
        locales: ['en', 'fr'],
        directory: path.join(__dirname, ''),
        defaultLocale: defaultLocale,
        objectNotation: true
      });

    static setLocale(locale: string): void {
        this.i18n.setLocale(locale)
    }

    static getLocale(): string {
        return this.i18n.getLocale()
    }

    static getCatalog(): any {
        return this.i18n.getCatalog()
    }

    static t(string: string, args: string[] = []): string {
        return this.i18n.__(string, args)
    }

    static tn(string: string, count: number = 0): string {
        return this.i18n.__n(string, count)
    }
}