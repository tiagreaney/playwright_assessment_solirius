import {test} from "@playwright/test";
import LandingPage from "./pages/landingPage";
import IrregularHoursPage from "./pages/irregularHoursPage";
import EntitlementBasedOnPage from "./pages/entitlementBasedOnPage";
import WorkOutHolidayPage from "./pages/workOutHolidayPage";
import WorkedPerWeekPage from "./pages/workedPerWeekPage";
import AnswersPage from "./pages/answersPage";
import LeaveYearStartPage from "./pages/leaveYearStartPage";
import StartDatePage from "./pages/startDatePage";
import EndDatePage from "./pages/endDatePage";
import HowManyHoursPage from "./pages/howManyHoursPage";
import HowManyShiftsPage from "./pages/howManyShiftsPage";
import HowManyDaysPage from "./pages/howManyDaysPage";

test(`Calculate Holiday Entitlement for a full leave year with annualised hours and other options`, async ({ page }): Promise<void> => {
    const landingPage: LandingPage = new LandingPage();
    await landingPage.checkPageLoads(page);
    await landingPage.continueOn(page);
    const irregularHoursPage: IrregularHoursPage = new IrregularHoursPage();
    await irregularHoursPage.clickYes(page);
    await irregularHoursPage.checkPageLoads(page);
    await irregularHoursPage.continueOn(page);
    const leaveYearStartPage: LeaveYearStartPage = new LeaveYearStartPage();
    await leaveYearStartPage.checkPageLoads(page);
    await leaveYearStartPage.fillDate(page);
    await leaveYearStartPage.continueOn(page);
    const entitlementBasedOnPage: EntitlementBasedOnPage = new EntitlementBasedOnPage();
    await entitlementBasedOnPage.checkPageLoads(page);
    await entitlementBasedOnPage.clickAnnualisedHours(page);
    await entitlementBasedOnPage.continueOn(page);
    const workOutHolidayPage: WorkOutHolidayPage = new WorkOutHolidayPage();
    await workOutHolidayPage.checkTitle(page);
    await workOutHolidayPage.checkPageLoads(page);
    await workOutHolidayPage.clickFullLeaveYear(page);
    await workOutHolidayPage.continueOn(page);
    const answersPage: AnswersPage = new AnswersPage();
    await answersPage.checkPageLoads(page);
});

test(`Calculate Holiday Entitlement for someone starting and leaving part way through a leave year with shifts and other options`, async ({ page }): Promise<void> => {
    const landingPage: LandingPage = new LandingPage();
    await landingPage.checkPageLoads(page);
    await landingPage.continueOn(page);
    const irregularHoursPage: IrregularHoursPage = new IrregularHoursPage();
    await irregularHoursPage.clickYes(page);
    await irregularHoursPage.checkPageLoads(page);
    await irregularHoursPage.continueOn(page);
    const leaveYearStartPage: LeaveYearStartPage = new LeaveYearStartPage();
    await leaveYearStartPage.checkPageLoads(page);
    await leaveYearStartPage.fillDate(page);
    await leaveYearStartPage.continueOn(page);
    const entitlementBasedOnPage: EntitlementBasedOnPage = new EntitlementBasedOnPage();
    await entitlementBasedOnPage.checkPageLoads(page);
    await entitlementBasedOnPage.clickShifts(page);
    await entitlementBasedOnPage.continueOn(page);
    const workOutHolidayPage: WorkOutHolidayPage = new WorkOutHolidayPage();
    await workOutHolidayPage.checkTitleShifts(page);
    await workOutHolidayPage.checkPageLoads(page);
    await workOutHolidayPage.clickStartingAndLeaving(page);
    await workOutHolidayPage.continueOn(page);
    const startDatePage: StartDatePage = new StartDatePage();
    await startDatePage.checkPageLoads(page);
    await startDatePage.fillDate(page);
    await startDatePage.continueOn(page);
    const endDatePage: EndDatePage = new EndDatePage();
    await endDatePage.checkPageLoads(page);
    await endDatePage.fillDate(page);
    await endDatePage.continueOn(page);
    const howManyHoursPage: HowManyHoursPage = new HowManyHoursPage();
    await howManyHoursPage.checkPageLoads(page);
    await howManyHoursPage.continueOn(page);
    const howManyShiftsPage: HowManyShiftsPage = new HowManyShiftsPage();
    await howManyShiftsPage.checkPageLoads(page);
    await howManyShiftsPage.continueOn(page);
    const howManyDaysPage: HowManyDaysPage = new HowManyDaysPage();
    await howManyDaysPage.checkPageLoads(page);
    await howManyDaysPage.continueOn(page);
    const answersPage: AnswersPage = new AnswersPage();
    await answersPage.checkPageLoads(page);
});