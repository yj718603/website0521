// 定义语言代码映射规则
export const langMapping: Record<string, string> = {
    "zh-Hant": "zh-Hant",
    "zh-Hans": "zh-Hans",
    zh: "zh-Hans",
};

/**
 * 预处理语言代码：
 * 1. 如果传入的 langToken 在 langMapping 中有映射，则返回映射后的值。
 * 2. 如果没有映射，则将 "-" 替换为 "_" 后返回。
 *
 * @param langToken 传入的语言代码，例如 "zh-Hant" 或 "en-US"
 * @returns 处理后的语言代码
 */
export function preprocessLanguageCode(langToken: string): string {
    if (langMapping[langToken]) {
        return langMapping[langToken];
    } else {
        return langToken.replace("-", "_");
    }
}
