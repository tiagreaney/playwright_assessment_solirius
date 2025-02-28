import { Page } from 'playwright';
import {expect} from "@playwright/test";
import leaveYearStart_content from "../content/leaveYearStart_content";
import axeTest from "../accessibilityTestHelper";

class LeaveYearStartPage {
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
            expect(page.locator(this.title)).toContainText(leaveYearStart_content.pageTitle),
        ]);
        await axeTest(page);
    }

    async fillDate(page: Page): Promise<void> {
        await page.locator(this.day).fill("01");
        await page.locator(this.month).fill("10");
        await page.locator(this.year).fill("2023");
    }

    async continueOn(page: Page): Promise<void> {
        // Click the continue button
        await page.getByRole("button", { name: "Continue" }).click();
    }
}

export default LeaveYearStartPage;