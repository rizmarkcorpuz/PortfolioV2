// import WorkIm from '../assets/projects/workImg.jpeg'
// import RealEst from '../assets/projects/realestate.jpg'
import UrbanGardener from '../assets/projects/urban_gardener.jpg'
import Ventures from '../assets/projects/ventures_++.jpg'
import PortfolioV1 from '../assets/projects/portfolio_v1.png'
import GoogleKeepClone from '../assets/projects/google_keep_clone.png'

export const data=[
    {
        id:1,
        name:"Urban Gardener",
        image:UrbanGardener,
        github:"https://github.com/rizmarkcorpuz/Urban-Gardener",
        live:"https://urbangardenercavite.000webhostapp.com",
    },
    {
        id:2,
        name:"Ventures ++",
        image:Ventures,
        github:"https://drive.google.com/file/d/1D2pKuf3wDSvjo-o2t-yVX-gqXqV-kB7d/view?usp=sharing",
        live:"https://drive.google.com/file/d/1IDMVwmon7-y8Vrec7W3VhUPgovu5I8bN/view?usp=sharing",
    },
    {
        id:3,
        name:"Personal Website V1",
        image:PortfolioV1,
        github:"https://github.com/rizmarkcorpuz/Portfolio",
        live:"https://rizmarkcorpuz.github.io/Portfolio/",
    },
    {
        id:4,
        name:"Google Keep Clone",
        image:GoogleKeepClone,
        github:"https://github.com/rizmarkcorpuz/google-keep-clone",
        live:"https://rizmarkcorpuz.github.io/google-keep-clone/",
    },
    {
        id:5,
        type:"automation",
        name:"Monthly SDR Leaderboard",
        description:"Automated end-of-day reporting system in Google Sheets tracking SDR performance metrics including meetings scheduled, bids, goal completion, calls per day, and conversion rates across all Temporary Wall Systems locations.",
        tools:["Google Sheets", "Google Apps Script", "Automation"],
        color:"#1a7a4a",
    },
    {
        id:6,
        type:"automation",
        name:"N8N QuickBooks Invoice Creation",
        description:"Built an N8N workflow that automatically retrieves client hours from project data, merges invoice data, searches for existing invoice folders, and creates QuickBooks invoices on a scheduled trigger — eliminating manual billing effort.",
        tools:["N8N", "QuickBooks", "Google Sheets", "REST API"],
        color:"#1a4a7a",
    },
    {
        id:7,
        type:"automation",
        name:"Slack Channel Creation via Airtable",
        description:"Zapier automation that listens for Airtable checkbox triggers to automatically create private Slack channels, invite internal and external users, and update Airtable with the new channel name — handling both internal and external client paths.",
        tools:["Zapier", "Slack", "Airtable"],
        color:"#4a1a7a",
    },
    {
        id:8,
        type:"automation",
        name:"HubSpot Deal Auto-Creation",
        description:"Make.com workflow that automatically creates a HubSpot deal whenever a new appointment is scheduled — extracting contact details, assigning project types, and routing deals through the CRM pipeline without manual entry.",
        tools:["Make.com", "HubSpot CRM", "Webhooks"],
        color:"#7a3a1a",
    },
]