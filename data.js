const programs = [
    {
        id: 1,
        name: '3-D Animation',
        eventType: 'prejudged projects and presentation events',
        desc: '',
    },
    {
        id: 2,
        name: 'Accounting I',
        eventType: 'objective test events',
        desc: '',
    },
    {
        id: 3,
        name: 'Accounting II',
        eventType: 'objective test events',
        desc: '',
    },
    {
        id: 4,
        name: 'Advertising',
        eventType: 'objective test events',
        desc: '',
    },
    {
        id: 5,
        name: 'Agribusiness',
        eventType: 'objective test events',
        desc: '',
    },
    {
        id: 6,
        name: 'American Enterprise Project',
        eventType: 'prejudged reports and presentation events',
        desc: '',
    },
    {
        id: 7,
        name: 'Banking & Financial Systems',
        eventType: 'collaborative objective test and role play event',
        desc: '',
    },
    {
        id: 8,
        name: 'Broadcast Journalism',
        eventType: 'presentation events',
        desc: '',
    },
    {
        id: 9,
        name: 'Business Calculations',
        eventType: 'objective test events',
        desc: '',
    },
    {
        id: 10,
        name: 'Business Communication',
        eventType: 'objective test events',
        desc: '',
    },
    {
        id: 11,
        name: 'Business Ethics – MODIFIED',
        eventType: 'presentation events',
        desc: '',
    },
    {
        id: 12,
        name: 'Business Financial Plan',
        eventType: 'prejudged reports and presentation events',
        desc: '',
    },
    {
        id: 13,
        name: 'Business Law',
        eventType: 'objective test events',
        desc: '',
    },
    {
        id: 14,
        name: 'Business Management – NAME CHANGE',
        eventType: 'collaborative objective test and role play event',
        desc: '',
    },
    {
        id: 15,
        name: 'Business Plan',
        eventType: 'prejudged reports and presentation events',
        desc: '',
    },
    {
        id: 16,
        name: 'Client Service',
        eventType: 'individual role play event',
        desc: '',
    },
    {
        id: 17,
        name: 'Coding & Programming – MODIFIED',
        eventType: 'demonstration events',
        desc: '',
    },
    {
        id: 18,
        name: 'Community Service Project',
        eventType: 'prejudged reports and presentation events',
        desc: '',
    },
    {
        id: 19,
        name: 'Computer Applications',
        eventType: 'production and objective test',
        desc: '',
    },
    {
        id: 20,
        name: 'Computer Game & Simulation Programming',
        eventType: 'demonstration events',
        desc: '',
    },
    {
        id: 21,
        name: 'Computer Problem Solving',
        eventType: 'objective test events',
        desc: '',
    },
    {
        id: 22,
        name: 'Cyber Security',
        eventType: 'objective test events',
        desc: '',
    },
    {
        id: 23,
        name: 'Data Analysis - NEW',
        eventType: 'presentation events',
        desc: '',
    },
    {
        id: 24,
        name: 'Database Design & Application',
        eventType: 'production and objective test',
        desc: '',
    },
    {
        id: 25,
        name: 'Digital Video Production',
        eventType: 'prejudged projects and presentation events',
        desc: '',
    },
    {
        id: 26,
        name: 'E-business - MODIFIED',
        eventType: 'demonstration events',
        desc: '',
    },
    {
        id: 27,
        name: 'Economics',
        eventType: 'objective test events',
        desc: '',
    },
    {
        id: 28,
        name: 'Electronic Career Portfolio',
        eventType: 'presentation events',
        desc: '',
    },
    {
        id: 29,
        name: 'Entrepreneurship',
        eventType: 'collaborative objective test and role play event',
        desc: '',
    },
    {
        id: 30,
        name: 'Future Business Leader',
        eventType: 'interview events',
        desc: '',
    },
    {
        id: 31,
        name: 'Graphic Design',
        eventType: 'presentation events',
        desc: '',
    },
    {
        id: 32,
        name: 'Health Care Administration',
        eventType: 'objective test events',
        desc: '',
    },
    {
        id: 33,
        name: 'Help Desk',
        eventType: 'individual objective test and role play event',
        desc: '',
    },
    {
        id: 34,
        name: 'Hospitality & Event Management',
        eventType: 'collaborative objective test and role play event',
        desc: '',
    },
    {
        id: 35,
        name: 'Human Resource Management - NEW',
        eventType: 'objective test events',
        desc: '',
    },
    {
        id: 36,
        name: 'Impromptu Speaking',
        eventType: 'speech events',
        desc: '',
    },
    {
        id: 37,
        name: 'Insurance & Risk Management',
        eventType: 'objective test events',
        desc: '',
    },
    {
        id: 38,
        name: 'International Business',
        eventType: 'collaborative objective test and role play event',
        desc: '',
    },
    {
        id: 39,
        name: 'Introduction to Business Communication',
        eventType: {
            a: 'objective test events',
            b: 'presentation events',
        },
        desc: '',
    },
    {
        id: 40,
        name: 'Introduction to Business Concepts - NAME CHANGE',
        eventType: 'objective test events',
        desc: '',
    },
    {
        id: 41,
        name: 'Introduction to Business Presentation',
        desc: '',
    },
    {
        id: 42,
        name: 'Introduction to Business Procedures',
        eventType: 'objective test events',
        desc: '',
    },
    {
        id: 43,
        name: 'Introduction to Event Planning',
        eventType: 'collaborative objective test and role play event',
        desc: '',
    },
    {
        id: 44,
        name: 'Introduction to FBLA',
        eventType: 'objective test events',
        desc: '',
    },
    {
        id: 45,
        name: 'Introduction to Financial Math',
        eventType: 'objective test events',
        desc: '',
    },
    {
        id: 46,
        name: 'Introduction to Information Technology',
        eventType: 'objective test events',
        desc: '',
    },
    {
        id: 47,
        name: 'Introduction to Parlimentary Procedure',
        eventType: 'objective test events',
        desc: '',
    },
    {
        id: 48,
        name: 'Introduction to Public Speaking',
        eventType: 'speech events',
        desc: '',
    },
    {
        id: 49,
        name: 'Introduction to Social Media Strategy',
        eventType: 'presentation events',
        desc: '',
    },
    {
        id: 50,
        name: 'Job Interview',
        eventType: 'interview events',
        desc: '',
    },
    {
        id: 51,
        name: 'Journalism',
        eventType: 'objective test events',
        desc: '',
    },
    {
        id: 52,
        name: 'Local Chapter Annual Business Report',
        eventType: 'prejudged reports and presentation events',
        desc: '',
    },
    {
        id: 53,
        name: 'Management Information Systems',
        eventType: 'collaborative objective test and role play event',
        desc: '',
    },
    {
        id: 54,
        name: 'Marketing',
        eventType: 'collaborative objective test and role play event',
        desc: '',
    },
    {
        id: 55,
        name: 'Mobile Application Development',
        eventType: 'demonstration events',
        desc: '',
    },
    {
        id: 56,
        name: 'Network Design',
        eventType: 'collaborative objective test and role play event',
        desc: '',
    },
    {
        id: 57,
        name: 'Networking Infrastructures',
        eventType: 'objective test events',
        desc: '',
    },
    {
        id: 54,
        name: 'Organizational Leadership',
        eventType: 'objective test events',
        desc: '',
    },
    {
        id: 55,
        name: 'Parliamentary Procedure',
        eventType: 'individual objective test and team role play event',
        desc: '',
    },
    {
        id: 56,
        name: 'Partnership with Business Project',
        eventType: 'prejudged reports and presentation events',
        desc: '',
    },
    {
        id: 57,
        name: 'Personal Finance',
        eventType: 'objective test events',
        desc: '',
    },
    {
        id: 58,
        name: 'Political Science',
        eventType: 'objective test events',
        desc: '',
    },
    {
        id: 59,
        name: 'Public Service Announcement',
        eventType: 'presentation events',
        desc: '',
    },
    {
        id: 60,
        name: 'Public Speaking',
        eventType: 'speech events',
        desc: '',
    },
    {
        id: 61,
        name: 'Publication Design',
        eventType: 'presentation events',
        desc: '',
    },{
        id: 62,
        name: 'Sales Presentation',
        eventType: 'presentation events',
        desc: '',
    },{
        id: 63,
        name: 'Securities & Investments',
        eventType: 'objective test events',
        desc: '',
    },
    {
        id: 64,
        name: 'Social Media Strategies',
        eventType: 'presentation events',
        desc: '',
    },
    {
        id: 65,
        name: 'Sports & Entertainment Management',
        eventType: 'collaborative objective test and role play event',
        desc: '',
    },
    {
        id: 66,
        name: 'Spreadsheet Applications',
        eventType: 'production and objective test',
        desc: '',
    },
    {
        id: 67,
        name: 'Supply Chain Management',
        eventType: 'objective test events',
        desc: '',
    },
    {
        id: 68,
        name: 'UX Design - NEW',
        eventType: 'objective test events',
        desc: '',
    },
    {
        id: 69,
        name: 'Website Design',
        eventType: 'demonstration events',
        desc: '',
    },
    {
        id: 70,
        name: 'Word Processing',
        eventType: 'production and objective test',
        desc: '',
    },
]

const guidelines = [
    {
        competitiveGuidelines: {
            eligibility: {
                dues: '',
                NLCregistration: '',
                deadlines: '',
            },
            repeatCompetitors: {
                modifiedEvents: '',
                teamEvents: '',
                chapterEvents: '',
                individualEntry: '',
                parliamentaryProcedure: '',
                pilotEvent: '',
            },
            breakingTies: {
                objectiveTests: '',
                objectiveAndProductionTests: '',
                objectiveTestsAndPerformances: '',
                reportsProjectsAndPerformances: '',
                performances: '',
            },
            nationalDeadlines: '',
            nationalAwards: '',
            americansWithDisbilitiesAct: '',
            recordingOfPresentations: '',
        },
        performanceGuidelines: '',
        technologyGuidelines: '',
        performanceCompetencies: '',
        penaltyPointsDeductedByJudges: '',
        audience: '',

    }
]


module.exports = { programs, guidelines }
