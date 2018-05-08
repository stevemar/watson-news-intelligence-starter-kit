> TODO: Should we add travis and run the included tests if they work?

# Watson News Intelligence starter kit

The Watson News Intelligence starter kit for Node.js visualizes the results of [Discovery](https://www.ibm.com/watson/services/discovery) queries. The app searches [Discovery News](https://www.ibm.com/watson/services/discovery-news) data to get insights from the news, including related concepts, entities, and sentiment trends.

> TODO: Reverse engineer and document:
   * what the kit does (intro and overview)
   * goals
   * architecture
   * flow
   * components used, featured tech
   * sample output
   * troubleshooting tips
   * links
   * add section(?) to refer to the actual starter kit

In this Code Pattern, we will [create something] using [technologies] and [components]. [Explain briefly how things work]. [Give acknowledgements to others if necessary]

When the reader has completed this Code Pattern, they will understand how to:

* [goal 1]
* [goal 2]
* [goal 3]
* [goal 4]

![](doc/source/images/architecture.png)

## Flow
1. Step 1.
2. Step 2.
3. Step 3.
4. Step 4.

<!--Update this section-->
## Included components
Select components from [here](https://github.ibm.com/developer-journeys/journey-docs/tree/master/_content/dev#components), copy and paste the raw text for ease
* [Component](link): description
* [Component](link): description

<!--Update this section-->
## Featured technologies
Select components from [here](https://github.ibm.com/developer-journeys/journey-docs/tree/master/_content/dev#technologies), copy and paste the raw text for ease
* [Technology](link): description
* [Technology](link): description

# Watch the Video
> We don't do videos for starter kits, right?

# Steps
Use the ``Try the Starter Kit`` button **OR** create the services and run locally.

## Try the Starter Kit

> TODO: Update these old d2b instructions to describe the "Starter Kit Experience" TM
   * explain what options are there (cloud, docker, download...)

[![Try the starter kit](doc/source/images/try_the_starter_kit.png)](https://console.bluemix.net/developer/watson/create-project?starterKit=51d65dc8-1125-3cea-845d-5161aa6105f4)

1. Press the above ``Try the Starter Kit`` button and then click on ``Deploy``.

2. In Toolchains, click on Delivery Pipeline to watch while the app is deployed. Once deployed, the app can be viewed by clicking 'View app'.

3. To see the app and services created and configured for this Code Pattern, use the IBM Cloud dashboard. The app is named `WatsonNewsIntelligence` with a unique suffix. The following services are created <!-- and easily identified by the `wbc-` prefix -->:
    * watson-news-intelligence-discovery-1525714616589

## Run locally
> NOTE: These steps are only needed when running locally instead of using the ``Try the Starter Kit`` button.

1. [Clone the repo](#1-clone-the-repo)
2. [Create Watson services with IBM Cloud](#2-create-watson-services-with-ibm-cloud)
3. [Configure credentials](#3-configure-credentials)
4. [Run the application](#4-run-the-application)

### 1. Clone the repo

Clone the `watson-news-intelligence-starter-kit` locally. In a terminal, run:

```
$ git clone https://github.com/markstur/watson-news-intelligence-starter-kit
```

### 2. Create Watson services with IBM Cloud

Create the following services:

* [**Watson Discovery**](https://console.ng.bluemix.net/catalog/services/discovery)

### 3. Configure credentials

The credentials for IBM Cloud services (Discovery), can be found in the ``Services`` menu in IBM Cloud,
by selecting the ``Service Credentials`` option for the service.

Copy the Discovery credentials JSON into your local repos `server/localdev-config.json` file.

#### Example `server/localdev-config.json`:

```json
{
  "watson_discovery_url": "https://gateway.watsonplatform.net/discovery/api",
  "watson_discovery_username": "a111aaaa-1a1a-111a-a11a-1aaa1111aaa1",
  "watson_discovery_password": "aaAAA1aaaAaa"
}
```

### 4. Run the application

1. Install [Node.js](https://nodejs.org) ([LTS](https://github.com/nodejs/Release) supported versions). 

1. At the command line, go to your project directory.

1. Install the dependencies:

    ```sh
    npm install
    ```

1. Start the app:

    ```sh
    npm start
    ```

1. Point your browser to [localhost:3000](http://localhost:3000).

# Sample output

Enter a company name in the search bar to query Watson Discovery News through the app. Each panel on the page contains a visual presentation of insights derived from the API response. Press `View Query` in each panel to view the parameters of the API request and the response in JSON form.

For your first search, enter the name of a company (or some news topic) and hit enter or click on the magnifying glass icon.

![](doc/source/images/first_search.png)

After your first search, you can change the search term, and you can specify the time period for your search.

![](doc/source/images/later_search.png)

The results will include the following sections.

## Top Entitites
**Top Entities** shows a word cloud showing frequently mentioned entities for your search term. The words are sized to indicate their significance. You can click on the tabs to show entities that are topics, companies, or people.

## Top Stories
**Top Stories** shows a the top news stories that matched your search. You can sort the articles by relevance or by date.

## Sentiment Analysis
**Sentiment Analysis** shows the postitive/neutral/negative sentiment breakdown of the news articles from a variety of news sources.

## Anomaly Detection
**Anomaly Detection** shows the number of articles over the specificed time period and highlights anomalies, if any, with a red dot. You can hover over the chart to get additional details about each data point -- including an example headline.

## Co-Mentions & Trends
**Co-Mentions & Trends** shows entities that are commonly co-mentioned with your search entity and charts the trend for each entity pair. The chart tracks positive and negative sentiment for the pair over time. The total number of mentions and overall sentiment is also listed for each co-mentioned entity pair.

## Screenshot

Example results from a week with Hawaiian volcano activity:

![](doc/source/images/sample_output.png)

# Troubleshooting

* Error placeholder

  > Explanation placeholder

# Links
*
*
* 

# Learn more

* **Artificial Intelligence Code Patterns**: Enjoyed this Code Pattern? Check out our other [AI Code Patterns](https://developer.ibm.com/code/technologies/artificial-intelligence/).
* **Data Analytics Code Patterns**: Enjoyed this Code Pattern? Check out our other [Data Analytics Code Patterns](https://developer.ibm.com/code/technologies/data-science/)
* **AI and Data Code Pattern Playlist**: Bookmark our [playlist](https://www.youtube.com/playlist?list=PLzUbsvIyrNfknNewObx5N7uGZ5FKH0Fde) with all of our Code Pattern videos
* **With Watson**: Want to take your Watson app to the next level? Looking to utilize Watson Brand assets? [Join the With Watson program](https://www.ibm.com/watson/with-watson/) to leverage exclusive brand, marketing, and tech resources to amplify and accelerate your Watson embedded commercial solution.
* **Kubernetes on IBM Cloud**: Deliver your apps with the combined the power of [Kubernetes and Docker on IBM Cloud](https://www.ibm.com/cloud-computing/bluemix/containers)

# License
[Apache 2.0](LICENSE)
