"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[6807],{7060:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var s=t(4848),o=t(8453);const i={sidebar_position:60},r="Self-assessment / Validation",a={id:"report/testing",title:"Self-assessment / Validation",description:"To ensure a high-quality product, a series of tests that cover different aspects of the system has been implemented.",source:"@site/docs/report/testing.md",sourceDirName:"report",slug:"/report/testing",permalink:"/revue/docs/report/testing",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:60,frontMatter:{sidebar_position:60},sidebar:"tutorialSidebar",previous:{title:"DevOps",permalink:"/revue/docs/report/devops"},next:{title:"Deployment",permalink:"/revue/docs/category/deployment"}},c={},d=[{value:"Architectural Testing",id:"architectural-testing",level:2},{value:"API Testing",id:"api-testing",level:2},{value:"Code Quality",id:"code-quality",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components},{Summary:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Summary",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"self-assessment--validation",children:"Self-assessment / Validation"})}),"\n",(0,s.jsx)(n.p,{children:"To ensure a high-quality product, a series of tests that cover different aspects of the system has been implemented.\nThe tests have been divided into two main categories: architectural testing and API testing.\nMoreover, to ensure also a high-quality code production, Code Quality tools have been integrated into the Continuous Integration pipeline."}),"\n",(0,s.jsx)(n.h2,{id:"architectural-testing",children:"Architectural Testing"}),"\n",(0,s.jsxs)(n.p,{children:["To ensure that layers\u2019 dependencies are respected, ",(0,s.jsx)(n.a,{href:"https://github.com/sverweij/dependency-cruiser",children:"Dependency Cruiser"})," framework has been exploited.\nEssentially, the configured rules check that:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.strong,{children:"Domain"})," layer does not access to any other layer."]}),"\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.strong,{children:"Application"})," layer can access only the Domain layer."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Presentation"})," layer can access only Domain and Application layers."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Infrastructure"})," layer can access to the above layers."]}),"\n"]}),"\n",(0,s.jsx)(t,{title:"Dependency Cruiser rules",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"forbidden: [\n  {\n    name: 'no-unreachable-from-domain',\n    comment: 'The domain layer should not depend on any other layer',\n    severity: 'error',\n    from: {\n      path: '^(src/domain)'\n    },\n    to: {\n      pathNot: '^(src/domain)'\n    }\n  },\n  {\n    name: 'no-unreachable-from-application',\n    comment: 'The application layer should only depend on the domain layer',\n    severity: 'error',\n    from: {\n      path: '^(src/application)'\n    },\n    to: {\n      pathNot: '^(src/domain)|^(src/application)|^(src/utils)'\n    }\n  },\n  {\n    name: 'no-unreachable-from-presentation',\n    comment: 'The presentation layer should only depend on the domain and application layers',\n    severity: 'error',\n    from: {\n      path: '^(src/presentation)'\n    },\n    to: {\n      pathNot: '^(src/domain)|^(src/application)|^(src/presentation)|^(src/utils)|^(node_modules/zod)'\n    }\n  }\n]\n"})})}),"\n",(0,s.jsx)(n.h2,{id:"api-testing",children:"API Testing"}),"\n",(0,s.jsxs)(n.p,{children:["API testing has been performed using the ",(0,s.jsx)(n.a,{href:"https://vitest.dev/",children:"Vitest framework"}),"."]}),"\n",(0,s.jsx)(t,{title:"Example: testing the PUT /devices endpoint",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"describe('PUT /devices', (): void => {\n  beforeAll(async (): Promise<void> => {\n    await connectToMock()\n  })\n  describe('PUT /devices', (): void => {\n    it('responds with a forbidden status if no auth token is provided', \n      async (): Promise<void> => {\n        const update: Response = await deviceService.put('/devices')\n        expect(update.status).toBe(HttpStatusCode.FORBIDDEN)\n    })\n    it('should update the device', async (): Promise<void> => {\n      const newDevice = {\n        endpoint: {\n          ipAddress: '192.168.1.1',\n          port: 1000\n        },\n        description: 'updated description',\n        locationId: 'updated locationId',\n        isEnabled: false\n      }\n      const update: Response = await deviceService\n        .put('/devices/test-device-id')\n        .set('Authorization', `Bearer ${TOKEN}`)\n        .send(newDevice)\n      expect(update.status).toBe(HttpStatusCode.OK)\n      expect(update.type).toBe('application/json')\n    })\n  })\n  afterAll(async (): Promise<void> => {\n    await disconnectFromMock()\n  })\n})\n"})})}),"\n",(0,s.jsxs)(n.p,{children:["To be able to execute the tests,\nthe database has been mocked using ",(0,s.jsx)(n.strong,{children:"MongoDB Memory Server"})," that allows to run a MongoDB instance in memory.\nWith this configuration, each integration test is isolated from the others, resetting the database after each test."]}),"\n",(0,s.jsx)(t,{title:"Example: connecting to the mock database",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"export const connectToMock = async (): Promise<void> => {\n  mongoMock = await MongoMemoryServer.create()\n  await mongoose.connect(mongoMock.getUri(), {\n    directConnection: true\n  })\n}\n\nexport const populateUsers = async (): Promise<void> => {\n  const userModel: Model<User> = model<User>('User', userSchema, 'user')\n  await userModel.create(userSample)\n}\n"})})}),"\n",(0,s.jsx)(n.h2,{id:"code-quality",children:"Code Quality"}),"\n",(0,s.jsxs)(n.p,{children:["Two main tools have been used to ensure the quality of the code produced:\n",(0,s.jsx)(n.strong,{children:"Prettier"})," is a code formatter that supports many languages. It enforces a consistent style by parsing code and re-writing it according to the configuration rules.\n",(0,s.jsx)(n.strong,{children:"ESLint"})," is a tool that statically analyses code to find suboptimal patterns and errors."]}),"\n",(0,s.jsx)(n.p,{children:"Both tools have been integrated into the Continuous Integration pipeline to keep the high-quality code production."})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var s=t(6540);const o={},i=s.createContext(o);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);