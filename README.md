# [Sendbird Data Export Platform API docs](https://sendbird.com/docs/chat/v3/platform-api/guides/data-export)

## Export Desk data

This script exports Desk information and store the result inside a JSON file: `export-requests.json` 

````Author````: Charis Theodoulou
````Updated by````: Walter Rodriguez

## Install

From the root directory of this project run inside the terminal:

```bash
npm i
```

## Run

1. Update the `constants.js` file with your `APP_ID`, `DESK_API_TOKEN` and `API_TOKEN`

2. From the root directory of this project run inside the terminal:

    ```bash
    node registerRequests.js && node updateRequestsStatus.js
    ```

    ```updateRequestsStatus.js``` fetches and updates the output JSON file (`export-requests.json`) with requests' statuses

    Open ```export-requests.json``` to see your ticket's information.

3. If you want to see the messages from these exported tickets, go to your Dashboard and select ```Data Export```. 
You will see a data export request with the information of the messages for these tickets. Download and use.


## Customise

1. Default exporting time is 30 days. You can change this by modifying the `dateRange` object variable in the `registerRequests.js` file.

3. Control which data types you would like to request data export for in the `dataTypes` array variable in the `registerRequests.js` file. Possible values are **messages**, **channels**, **users** and **failed_webhooks**.

4. Add user IDs to the `MESSAGES_FOR_USER_IDS` array variable in the `registerRequests.js` file for the users you would like to export data (effective only when using **messages** in `dataTypes` array)

5. Add user IDs to the `DATA_FOR_USER_IDS` array variable in the `registerRequests.js` file for the users you would like to export data (effective only when using **users** in `dataTypes` array)

6. Add channel URLs to the `DATA_FOR_CHANNEL_URLS` array variable in the `registerRequests.js` file for the channels you would like to export data (effective only when using **messages** or **channels** in `dataTypes` array)

7. All requests used in this script to the Sendbird API are rate-limited. [Learn more here](https://sendbird.com/docs/chat/v3/platform-api/guides/rate-limits#2-plan-based-limits).


