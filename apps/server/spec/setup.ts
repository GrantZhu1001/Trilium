import { beforeAll } from "vitest";
import i18next from "i18next";
import { join } from "path";

beforeAll(async () => {
    // Initialize the translations manually to avoid any side effects.
    const Backend = (await import("i18next-fs-backend")).default;

    // Initialize translations
    await i18next.use(Backend).init({
        lng: "en",
        fallbackLng: "en",
        ns: "server",
        backend: {
            loadPath: join(__dirname, "../src/assets/translations/{{lng}}/{{ns}}.json")
        }
    });
});
