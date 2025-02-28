import { Page } from 'playwright';
import {expect} from "@playwright/test";
import axeTest from "../accessibilityTestHelper";
import endDate_content from "../content/endDate_content";

class EndDatePage {
    private readonly title: string;
    private readonly day: string;
    private readonly month: string;
    private readonly year: string;

    constructor() {
        this.title = `.govuk-fieldset__heading`
        this.day = '#response-0'
        this.month = '#response-1'
        this.year = '#response-2'
    }

    async checkPageLoads(page: Page): Promise<void> {
        // Check elements of the page
        await Promise.all([
            expect(page.locator(this.title)).toContainText(endDate_content.pageTitle),
        ]);
        await axeTest(page);
    }

    async fillDate(page: Page): Promise<void> {
        await page.locator(this.day).fill("01");
        await page.locator(this.month).fill("09");
        await page.locator(this.year).fill("2024");
    }

    async continueOn(page: Page): Promise<void> {
        // Click the continue button
        await page.getByRole("button", { name: "Continue" }).click();
    }
}

export default EndDatePage;