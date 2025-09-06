import axios  from "axios";

const endpoint = "https://manual-testing-demoproject.atlassian.net/rest/api/2/issue"
const username="ravindranr90@gmail.com"
const apiKey="ATATT3xFfGF00ALA1K4_mQlO-kiq_N5iBlFoLRc3JBOIOAQFcDngqZoOe7TRosEdzM8zhoEKIoKanI-_7KtfWHWFG62EzRxkvTyKVf-f6X3TOUwWpuW78NFJ2Os1tRj9KkJ8R3Y0EowBPNSwRMk_IoDHEwd7O_IY8XT8viIAHAvpg5am_utul5c=09CBED82"
const projectID="PW"

export async function createJiraIssue(summary:string, description:string){

    const issueRequestJson={
    "fields":{
    "project":{
        "key":projectID
    },
    "summary":summary,
    "description":description,
    "issuetype":{
        "name":"Bug"
    }
}
}

//Send the POST request

await axios.post(endpoint,issueRequestJson,{
    auth:{
        username:username,
        password:apiKey
    },
    headers:{
        'Content-Type':'application/json'
    }
})

console.log(`The API reuqest API successfull`);

}
//export {createJiraIssue}
