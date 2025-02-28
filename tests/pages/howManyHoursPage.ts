import { Page } from 'playwright';
import {expect} from "@playwright/test";
import axeTest from "../accessibilityTestHelper";
import howManyHoursContent from "../content/howManyHours_content";

class HowManyHoursPage {
    private readonly title: string;
    private readonly text: string;
    private readonly field: string;

    constructor() {
        this.title = `.govuk-label-wrapper`
        this.text = `.govuk-hint`
        this.field = `#response`
    }

    async checkPageLoads(page: Page): Promise<void> {
        await Promise.all([
            expect(page.locator(this.title)).toHaveText(howManyHoursContent.pageTitle),
        ]);
        await axeTest(page);
    }

    async continueOn(page: Page): Promise<void> {
        await page.locator(this.field).fill("5");
        // Click the continue button
        await page.getByRole("button", { name: "Continue" }).click();
    }

}

export default HowManyHoursPage;