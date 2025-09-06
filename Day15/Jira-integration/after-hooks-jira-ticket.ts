import { TestInfo } from "@playwright/test";
import { createJiraIssue } from "./jira-integration";

export async function logADefectInJira(testInfo:TestInfo){

    if(testInfo.status==='failed' || testInfo.status === 'timedOut'){

        const summary = `Test ${testInfo.status}:${testInfo.title}`;
        const description=`Here is the error: ${testInfo.error?.message}`

        await createJiraIssue(summary, description);

        console.log(`Jira issue created for ${testInfo.status} test:${testInfo.title}`);
        console.log(`Error message :${testInfo.error?.message}`);
    }
    else{
        //Do nothing
    }


}