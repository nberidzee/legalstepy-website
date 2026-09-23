const translations = {
  en: {
    meta: {
      title: "LegalStepy — Contract management, finally under control",
      description: "Create, collaborate, approve, sign and track every contract in one controlled workspace.",
    },
    nav: { product: "Product", solutions: "Solutions", features: "Features", team: "Team", demo: "Book a demo" },
    hero: {
      eyebrow: "AI-powered contract lifecycle management",
      title: "Every contract.<br /><span>One controlled workspace.</span>",
      lead: "Create, collaborate, approve, sign and track contracts in one controlled workspace — without the email chaos.",
      cta: "Book a demo", secondary: "Explore the platform",
      note: "Built for legal, procurement, finance and HR teams",
      approved: "Approved", approvedSub: "Legal review complete",
      reminder: "Renewal reminder", reminderSub: "30 days remaining",
      ask: "Ask LegalStepy", askSub: "Get answers from your contracts.",
    },
    mock: {
      workspace: "Workspace", contracts: "Contracts", active: "Active", approval: "In approval", renewals: "Renewals",
      current: "CURRENT WORKFLOW", service: "Service Agreement", review: "In review", legal: "Legal team",
      completed: "Review completed", finance: "Finance manager", waiting: "Waiting for approval", approve: "Approve",
      caption: "Illustrative product preview",
    },
    strip: { label: "One workspace for", legal: "Legal", procurement: "Procurement", finance: "Finance", operations: "Operations" },
    tabs: { legal: "Legal", management: "Management", procurement: "Procurement", finance: "Finance" },
    problem: {
      kicker: "THE PROBLEM", title: "Contract work shouldn’t feel like detective work.",
      lead: "When contracts live across inboxes, folders and spreadsheets, visibility disappears — and risk quietly grows.",
      emailTitle: "Endless email threads", emailText: "Feedback, attachments and decisions get buried in long conversations.",
      versionTitle: "Version confusion", versionText: "Nobody is fully sure which document is current or who changed what.",
      deadlineTitle: "Missed deadlines", deadlineText: "Renewals and obligations surface only when they become urgent.",
      controlTitle: "Limited control", controlText: "Approvals, access and accountability remain difficult to track.",
      messages: "messages", attachments: "attachments", decisionBuried: "Decision buried", whichFinal: "Which one is final?",
      daysOverdue: "days overdue", renewalNotice: "Renewal notice", noReminder: "No reminder set", ownerUnknown: "Owner unknown", pendingApprovals: "3 approvals pending", blocked: "Blocked",
      emailSubject: "Re: Supplier agreement — final?", emailParticipants: "Legal, Finance + 6 others", editedYesterday: "Edited yesterday · Luka", editedToday: "Edited today · Noe", sentByEmail: "Sent by email · 11:42",
      legalReview: "Legal review", financeApproval: "Finance approval", finalApproval: "Final approval",
    },
    lifecycle: {
      kicker: "ONE CONNECTED LIFECYCLE", title: "From first draft to final deadline.",
      lead: "LegalStepy keeps every step, person and decision connected — so work moves forward without losing context.",
      create: "Create", createText: "Build from approved templates or generate a new contract with AI.",
      collaborate: "Collaborate", collaborateText: "Comment, edit and compare versions in one shared workspace.",
      approve: "Approve", approveText: "Route contracts through the right people and company rules.",
      sign: "Sign", signText: "Send for electronic signature without leaving the process.",
      track: "Track", trackText: "Stay ahead of renewals, obligations and performance.",
      templateReady: "Approved template", readyToUse: "Ready to use", reviewers: "3 reviewers", comments: "2 open comments",
      signed: "Signed", signedCount: "2 of 2 parties", renewalDue: "Renewal due", daysLeft: "30 days remaining",
      signer1: "Noe Beridze", signer2: "Sophie Bakhbakhashvili", obligations: "obligations", oneDue: "1 due this week",
    },
    features: {
      kicker: "EVERYTHING IN ONE PLACE", title: "Control the process, not just the document.",
      lead: "A complete workspace designed around how contracts actually move through a business.",
      repository: "Smart repository", repositoryText: "One searchable source of truth for every contract, version and attachment.",
      ai: "AI assistant", aiText: "Draft, summarize and surface key terms in seconds.",
      access: "Roles & permissions", accessText: "Give every person exactly the access they need.",
      templates: "Smart templates", templatesText: "Turn company standards into faster, safer drafting.",
      analytics: "Analytics & insights", analyticsText: "See cycle times, workload, bottlenecks and upcoming obligations at a glance.",
      reminders: "Events & reminders", remindersText: "Never discover a renewal or obligation too late.",
      audit: "Complete audit trail", auditText: "A reliable record of every change, action and decision.",
      repoPoint1: "Find any agreement, owner or clause in seconds", repoPoint2: "See status, value and renewal date without opening files", repoPoint3: "Keep every version and attachment connected",
      searchPlaceholder: "Search contracts, parties or clauses...", newContract: "New contract", allContracts: "All contracts", inReview: "In review", awaitingMe: "Awaiting me", expiringSoon: "Expiring soon",
      contract: "Contract", owner: "Owner", status: "Status", renewal: "Renewal", active: "Active", review: "Review", draft: "Draft",
      connectedRecords: "Connected records", completeView: "Complete relationship view", amendments: "Amendments", twoSigned: "2 signed", subcontracts: "Subcontracts", activeLabel: "Active", counterparties: "Related counterparties", linked: "Linked", legalTasks: "Legal tasks", twoDue: "2 due soon",
      linkedTo: "LINKED TO CONTRACT", amendment: "Amendment", priceAdjustment: "Price Adjustment #02", signed: "Signed", subcontract: "Subcontract", cloudHosting: "Cloud Hosting Services", counterparty: "Counterparty", verified: "Verified", legalTask: "Legal task", reviewLiability: "Review liability cap", dueSep: "Due Sep 30",
      workflowTitle: "Approvals that follow your rules", workflowLead: "Turn company policy into a clear, automatic route — with no chasing and no guesswork.",
      workflowPoint1: "Route by contract type, value, department or risk", workflowPoint2: "Give every reviewer a clear task and deadline", workflowPoint3: "Know exactly where every request is blocked",
      supplierWorkflow: "Supplier agreement workflow", live: "Live", request: "REQUEST", newSupplierContract: "New supplier contract", condition: "CONDITION", valueOver: "Value is over 50,000 GEL?", no: "No", yes: "Yes",
      legalReview: "Legal review", required: "Required", financeApproval: "Finance approval", conditional: "Conditional", executiveApproval: "Executive approval", highValueOnly: "High value only",
      approvedByNoe: "Approved · N. Beridze", approvedByFinance: "Approved · Finance", approvedByLuka: "Approved · L. Shakhkulashvili", eSignature: "E-SIGNATURE", sentForSignature: "Sent for signature", twoOfTwoSigned: "2 of 2 signed", noeName: "Noe Beridze", sophieName: "Sophie Bakhbakhashvili", signedAt: "Signed · 14:22", signedAt2: "Signed · 14:31", executed: "Contract executed", archivedAutomatically: "Final PDF archived automatically",
      intelligenceTitle: "Contract intelligence, not just storage", intelligenceLead: "Surface the terms that matter, spot risk early and turn dense documents into clear next steps.",
      aiPoint1: "Summarize long agreements and compare clauses", aiPoint2: "Flag risky language against your playbook", aiPoint3: "Extract obligations, dates and owners automatically",
      nonStandardTerm: "Non-standard notice period", playbookSays: "Your playbook recommends 30 days.", reviewing: "Reviewing", aiSuggestion: "Replace 90 days with 30 days to match your approved renewal policy.", applySuggestion: "Apply suggestion",
      reviewed: "Reviewed", obligationDetected: "Obligation detected", obligationDetail: "Send performance report every quarter · Owner: Operations", reviewComplete: "Review complete", risks: "Risks", obligationsLabel: "Obligations", keyDates: "Key dates", highRiskFinding: "High-risk finding",
      esign: "Electronic signature", esignText: "Send, sign and archive without leaving the workflow.",
      liabilityCap: "Liability cap", missingHighRisk: "Missing · High risk", paymentTerms: "Payment terms", governingLaw: "Governing law", georgia: "Georgia", renewalTerm: "Renewal", twelveMonths: "12 months", openFullReview: "Open full review",
      approvedTemplate: "Approved template", legalTeam: "Legal team", fullAccess: "Full access", financeTeam: "Finance", reviewOnly: "Review only", noeShort: "Noe B.", sophieShort: "Sophie B.", avgCycle: "Average cycle time", renewalNotice: "Renewal notice", thirtyDays: "30 days", legalApproved: "Legal approved",
    },
    teams: {
      kicker: "BUILT FOR THE WHOLE BUSINESS", title: "Everyone sees what they need. Nothing gets lost.",
      lead: "LegalStepy connects the teams involved in contract work while keeping responsibilities and access clear.",
    },
    ai: {
      kicker: "LEGALSTEPY AI", title: "Ask your contracts.<br />Get clear answers.",
      lead: "Turn complex documents into actionable information. LegalStepy AI helps your team understand, draft and act faster.",
      point1: "Summarize long agreements", point2: "Find clauses, obligations and risks", point3: "Generate contracts from company-approved rules",
      online: "Online · Ready to help", question: "What are the renewal terms in this agreement?",
      answer: "The agreement renews automatically for 12 months unless either party gives written notice at least 30 days before the renewal date.",
      source: "Source: Section 8.2", open: "Open clause", placeholder: "Ask anything about this contract...",
    },
    control: {
      kicker: "CONTROL BY DESIGN", title: "Your process. Your rules. Full visibility.",
      lead: "Build contract workflows around the way your company operates — with clear ownership, controlled access and a reliable record at every step.",
      access: "Role-based access", accessText: "Keep sensitive information visible only to the right people.",
      audit: "Audit-ready history", auditText: "See who did what, when and why — without searching.",
      workflow: "Custom approval workflows", workflowText: "Turn company policies into repeatable digital processes.",
      center: "Control center", policyEngine: "Policy & access engine", live: "Live", rules: "Approval rules", permissions: "Permissions", auditTab: "Audit",
      supplierPolicy: "Supplier agreement policy", autoApplies: "Applies automatically", when: "WHEN", valueCondition: "Contract value is greater than", thenRoute: "THEN ROUTE TO", legal: "Legal", finance: "Finance",
      accessPreview: "Access preview", legalAdmin: "Legal admin", fullAccess: "Full access", allowed: "Allowed", financeTeam: "Finance team", reviewOnly: "Review & approve only", limited: "Limited",
      latestActivity: "Latest activity", legalApproved: "Legal approved", sentFinance: "Sent to Finance",
      activeContracts: "Active contracts", awaitingApproval: "Awaiting approval", dueToday: "due today", averageCycle: "Average cycle", renewalsMonth: "Renewals this month",
    },
    how: {
      kicker: "START SIMPLY", title: "A clearer contract process in three steps.",
      step1: "Bring your contracts", step1Text: "Move active agreements and templates into one structured repository.",
      step2: "Set your workflow", step2Text: "Define roles, approvals, templates and rules around your business.",
      step3: "See everything clearly", step3Text: "Track every contract, decision, deadline and result from one place.",
    },
    team: {
      kicker: "MEET THE FOUNDERS", title: "The people building LegalStepy.", lead: "A team combining legal, operational, business and technology expertise.",
      lukaName: "Luka Shakhkulashvili", noeName: "Noe Beridze", sophieName: "Sophie Bakhbakhashvili", sabaName: "Saba Gobiani",
      luka: "Co-Founder & CEO", noe: "Co-Founder & COO", sophie: "Co-Founder & CLO", saba: "Co-Founder & CTO",
    },
    demo: {
      kicker: "LET’S TALK CONTRACTS", title: "Ready to bring every contract under control?",
      lead: "Book a personal walkthrough or tell us what your team needs. We’ll show you how LegalStepy can fit your process.",
      calendar: "Choose a time on Calendly", or: "Or contact us directly",
    },
    form: {
      name: "Name and surname", namePlaceholder: "Your name", email: "Work email", company: "Company", companyPlaceholder: "Company name",
      role: "Your role", rolePlaceholder: "Legal, Finance, CEO...", message: "What would you like to improve?",
      messagePlaceholder: "Tell us briefly about your contract process", consent: "I agree to be contacted about my request.", submit: "Request a demo",
    },
    footer: {
      copy: "One controlled workspace for every contract, decision and deadline.", product: "Product", company: "Company", follow: "Follow", contact: "Contact", rights: "All rights reserved.",
    },
  },
  ka: {
    meta: {
      title: "LegalStepy — ხელშეკრულებების მართვა სრული კონტროლით",
      description: "შექმენით, შეათანხმეთ, დაამტკიცეთ, მოაწერეთ ხელი და აკონტროლეთ ყველა ხელშეკრულება ერთ სივრცეში.",
    },
    nav: { product: "პროდუქტი", solutions: "გადაწყვეტილებები", features: "ფუნქციები", team: "გუნდი", demo: "დაჯავშნე დემო" },
    hero: {
      eyebrow: "AI-ზე დაფუძნებული ხელშეკრულებების მართვა",
      title: "ყველა ხელშეკრულება.<br /><span>ერთი კონტროლირებადი სივრცე.</span>",
      lead: "შექმენით, შეათანხმეთ, დაამტკიცეთ, მოაწერეთ ხელი და აკონტროლეთ ხელშეკრულებები ერთ სივრცეში — ელფოსტის ქაოსის გარეშე.",
      cta: "დაჯავშნე დემო", secondary: "დაათვალიერე პლატფორმა",
      note: "შექმნილია იურიდიული, შესყიდვების, ფინანსური და HR გუნდებისთვის",
      approved: "დამტკიცებულია", approvedSub: "იურიდიული შემოწმება დასრულდა",
      reminder: "განახლების შეხსენება", reminderSub: "დარჩენილია 30 დღე",
      ask: "ჰკითხე LegalStepy-ს", askSub: "მიიღე პასუხები ხელშეკრულებებიდან.",
    },
    mock: {
      workspace: "სამუშაო სივრცე", contracts: "ხელშეკრულებები", active: "აქტიური", approval: "დამტკიცებაში", renewals: "განახლებები",
      current: "მიმდინარე პროცესი", service: "მომსახურების ხელშეკრულება", review: "განხილვაში", legal: "იურიდიული გუნდი",
      completed: "განხილვა დასრულდა", finance: "ფინანსური მენეჯერი", waiting: "ელოდება დამტკიცებას", approve: "დამტკიცება",
      caption: "პროდუქტის საილუსტრაციო მაკეტი",
    },
    strip: { label: "ერთი სივრცე", legal: "იურიდიული", procurement: "შესყიდვები", finance: "ფინანსები", operations: "ოპერაციები" },
    tabs: { legal: "იურიდიული", management: "მენეჯმენტი", procurement: "შესყიდვები", finance: "ფინანსები" },
    problem: {
      kicker: "პრობლემა", title: "ხელშეკრულების მოძებნა გამოძიებას არ უნდა ჰგავდეს.",
      lead: "როდესაც ხელშეკრულებები ელფოსტაში, საქაღალდეებსა და ცხრილებშია გაფანტული, ხილვადობა ქრება და რისკი შეუმჩნევლად იზრდება.",
      emailTitle: "უსასრულო მიმოწერა", emailText: "უკუკავშირი, დანართები და გადაწყვეტილებები გრძელ მიმოწერაში იკარგება.",
      versionTitle: "ვერსიების გაურკვევლობა", versionText: "არავინ არის ბოლომდე დარწმუნებული, რომელია ბოლო ვერსია ან ვინ რა შეცვალა.",
      deadlineTitle: "გამორჩენილი ვადები", deadlineText: "განახლებისა და ვალდებულებების შესახებ მხოლოდ მაშინ ვიგებთ, როცა უკვე გვიანია.",
      controlTitle: "შეზღუდული კონტროლი", controlText: "დამტკიცებების, წვდომებისა და პასუხისმგებლობების კონტროლი რთულია.",
      messages: "წერილი", attachments: "დანართი", decisionBuried: "გადაწყვეტილება დაიკარგა", whichFinal: "რომელია საბოლოო?",
      daysOverdue: "დღით დაგვიანება", renewalNotice: "განახლების შეტყობინება", noReminder: "შეხსენება არ არის", ownerUnknown: "პასუხისმგებელი უცნობია", pendingApprovals: "3 დამტკიცება მოლოდინშია", blocked: "შეფერხებულია",
      emailSubject: "Re: მომწოდებლის ხელშეკრულება — საბოლოო?", emailParticipants: "იურიდიული, ფინანსები + 6 სხვა", editedYesterday: "შეიცვალა გუშინ · ლუკა", editedToday: "შეიცვალა დღეს · ნოე", sentByEmail: "გაგზავნილია ელფოსტით · 11:42",
      legalReview: "იურიდიული განხილვა", financeApproval: "ფინანსების დამტკიცება", finalApproval: "საბოლოო დამტკიცება",
    },
    lifecycle: {
      kicker: "ერთი დაკავშირებული სასიცოცხლო ციკლი", title: "პირველი მონახაზიდან საბოლოო ვადამდე.",
      lead: "LegalStepy ყველა ეტაპს, ადამიანს და გადაწყვეტილებას ერთმანეთთან აკავშირებს — პროცესი წინ მიდის, ინფორმაცია კი არ იკარგება.",
      create: "შექმნა", createText: "გამოიყენეთ დამტკიცებული შაბლონი ან შექმენით ახალი ხელშეკრულება AI-ის დახმარებით.",
      collaborate: "თანამშრომლობა", collaborateText: "დააკომენტარეთ, შეასწორეთ და შეადარეთ ვერსიები ერთ სივრცეში.",
      approve: "დამტკიცება", approveText: "გაატარეთ ხელშეკრულება შესაბამის პირებთან და კომპანიის წესებთან.",
      sign: "ხელმოწერა", signText: "გააგზავნეთ ელექტრონულ ხელმოწერაზე პროცესიდან გაუსვლელად.",
      track: "კონტროლი", trackText: "წინასწარ აკონტროლეთ ვადები, ვალდებულებები და შედეგები.",
      templateReady: "დამტკიცებული შაბლონი", readyToUse: "მზადაა გამოსაყენებლად", reviewers: "3 შემფასებელი", comments: "2 ღია კომენტარი",
      signed: "ხელმოწერილია", signedCount: "2-დან 2 მხარე", renewalDue: "განახლების ვადა", daysLeft: "დარჩენილია 30 დღე",
      signer1: "ნოე ბერიძე", signer2: "სოფი ბახბახაშვილი", obligations: "ვალდებულება", oneDue: "1 შესასრულებელია ამ კვირაში",
    },
    features: {
      kicker: "ყველაფერი ერთ სივრცეში", title: "მართეთ მთელი პროცესი და არა მხოლოდ დოკუმენტი.",
      lead: "სრული სამუშაო სივრცე, რომელიც შექმნილია ბიზნესში ხელშეკრულებების რეალური მოძრაობის მიხედვით.",
      repository: "ჭკვიანი საცავი", repositoryText: "ყველა ხელშეკრულების, ვერსიისა და დანართის ერთიანი, მარტივად საძიებო წყარო.",
      ai: "AI ასისტენტი", aiText: "შექმენით, შეაჯამეთ და მოძებნეთ მნიშვნელოვანი პირობები წამებში.",
      access: "როლები და წვდომები", accessText: "თითოეულ ადამიანს მიეცით ზუსტად ის წვდომა, რაც სჭირდება.",
      templates: "ჭკვიანი შაბლონები", templatesText: "კომპანიის სტანდარტები აქციეთ უფრო სწრაფ და უსაფრთხო პროცესად.",
      analytics: "ანალიტიკა და ხედვები", analyticsText: "ერთიანად დაინახეთ ვადები, დატვირთვა, შეფერხებები და მომავალი ვალდებულებები.",
      reminders: "მოვლენები და შეხსენებები", remindersText: "განახლებისა თუ ვალდებულების შესახებ ყოველთვის დროულად შეიტყობთ.",
      audit: "სრული აუდიტის ჟურნალი", auditText: "ყველა ცვლილების, მოქმედებისა და გადაწყვეტილების სანდო ისტორია.",
      repoPoint1: "იპოვეთ ნებისმიერი ხელშეკრულება, მხარე ან პუნქტი წამებში", repoPoint2: "ფაილის გახსნის გარეშე ნახეთ სტატუსი, ღირებულება და განახლების თარიღი", repoPoint3: "შეინახეთ ყველა ვერსია და დანართი ერთ კონტექსტში",
      searchPlaceholder: "მოძებნეთ ხელშეკრულება, მხარე ან პუნქტი...", newContract: "ახალი ხელშეკრულება", allContracts: "ყველა", inReview: "განხილვაში", awaitingMe: "ჩემს მოლოდინში", expiringSoon: "ვადა მალე იწურება",
      contract: "ხელშეკრულება", owner: "პასუხისმგებელი", status: "სტატუსი", renewal: "განახლება", active: "აქტიური", review: "განხილვა", draft: "მონახაზი",
      connectedRecords: "დაკავშირებული ჩანაწერები", completeView: "სრული ურთიერთკავშირი", amendments: "ცვლილებები", twoSigned: "2 ხელმოწერილი", subcontracts: "ქვეხელშეკრულებები", activeLabel: "აქტიური", counterparties: "დაკავშირებული კონტრაგენტები", linked: "დაკავშირებული", legalTasks: "იურიდიული დავალებები", twoDue: "2-ის ვადა ახლოვდება",
      linkedTo: "დაკავშირებულია ხელშეკრულებასთან", amendment: "ცვლილება", priceAdjustment: "ფასის ცვლილება #02", signed: "ხელმოწერილი", subcontract: "ქვეხელშეკრულება", cloudHosting: "ქლაუდ ჰოსტინგის მომსახურება", counterparty: "კონტრაგენტი", verified: "დადასტურებული", legalTask: "იურიდიული დავალება", reviewLiability: "პასუხისმგებლობის ლიმიტის განხილვა", dueSep: "ვადა: 30 სექ",
      workflowTitle: "დამტკიცებები, რომლებიც თქვენს წესებს მიჰყვება", workflowLead: "კომპანიის პოლიტიკა აქციეთ მკაფიო, ავტომატურ მარშრუტად — დევნისა და გაურკვევლობის გარეშე.",
      workflowPoint1: "განსაზღვრეთ მარშრუტი ტიპის, ღირებულების, დეპარტამენტის ან რისკის მიხედვით", workflowPoint2: "თითოეულ შემფასებელს მიეცით მკაფიო დავალება და ვადა", workflowPoint3: "ზუსტად დაინახეთ, სად და რატომ შეფერხდა პროცესი",
      supplierWorkflow: "მომწოდებლის ხელშეკრულების პროცესი", live: "აქტიური", request: "მოთხოვნა", newSupplierContract: "ახალი მომწოდებლის ხელშეკრულება", condition: "პირობა", valueOver: "ღირებულება აღემატება 50,000 GEL-ს?", no: "არა", yes: "კი",
      legalReview: "იურიდიული განხილვა", required: "სავალდებულო", financeApproval: "ფინანსების დამტკიცება", conditional: "პირობითი", executiveApproval: "დირექტორის დამტკიცება", highValueOnly: "მხოლოდ მაღალი ღირებულება",
      approvedByNoe: "დაამტკიცა · ნ. ბერიძე", approvedByFinance: "დაამტკიცა · ფინანსებმა", approvedByLuka: "დაამტკიცა · ლ. შახყულაშვილმა", eSignature: "ელექტრონული ხელმოწერა", sentForSignature: "გაგზავნილია ხელმოწერაზე", twoOfTwoSigned: "2-დან 2 ხელმოწერილია", noeName: "ნოე ბერიძე", sophieName: "სოფი ბახბახაშვილი", signedAt: "ხელმოწერილია · 14:22", signedAt2: "ხელმოწერილია · 14:31", executed: "ხელშეკრულება გაფორმდა", archivedAutomatically: "საბოლოო PDF ავტომატურად დაარქივდა",
      intelligenceTitle: "ხელშეკრულების ინტელექტი და არა უბრალოდ საცავი", intelligenceLead: "გამოავლინეთ მნიშვნელოვანი პირობები, დროულად შენიშნეთ რისკი და რთული დოკუმენტები მკაფიო მოქმედებებად აქციეთ.",
      aiPoint1: "შეაჯამეთ ვრცელი ხელშეკრულებები და შეადარეთ პუნქტები", aiPoint2: "მონიშნეთ სარისკო ტექსტი თქვენი წესების მიხედვით", aiPoint3: "ავტომატურად ამოიღეთ ვალდებულებები, თარიღები და პასუხისმგებლები",
      nonStandardTerm: "არასტანდარტული შეტყობინების ვადა", playbookSays: "თქვენი წესები 30 დღეს ითვალისწინებს.", reviewing: "ამოწმებს", aiSuggestion: "შეცვალეთ 90 დღე 30 დღით, რათა დაემთხვეს დამტკიცებულ განახლების პოლიტიკას.", applySuggestion: "ცვლილების გამოყენება",
      reviewed: "შემოწმებულია", obligationDetected: "ვალდებულება აღმოჩენილია", obligationDetail: "შესრულების ანგარიში ყოველ კვარტალში · პასუხისმგებელი: ოპერაციები", reviewComplete: "შემოწმება დასრულდა", risks: "რისკი", obligationsLabel: "ვალდებულება", keyDates: "მთავარი თარიღი", highRiskFinding: "მაღალი რისკის აღმოჩენა",
      esign: "ელექტრონული ხელმოწერა", esignText: "გააგზავნეთ, მოაწერეთ ხელი და დაარქივეთ პროცესიდან გაუსვლელად.",
      liabilityCap: "პასუხისმგებლობის ლიმიტი", missingHighRisk: "არ არის · მაღალი რისკი", paymentTerms: "გადახდის პირობა", governingLaw: "მარეგულირებელი სამართალი", georgia: "საქართველო", renewalTerm: "განახლება", twelveMonths: "12 თვე", openFullReview: "სრული განხილვის გახსნა",
      approvedTemplate: "დამტკიცებული შაბლონი", legalTeam: "იურიდიული გუნდი", fullAccess: "სრული წვდომა", financeTeam: "ფინანსები", reviewOnly: "მხოლოდ განხილვა", noeShort: "ნოე ბ.", sophieShort: "სოფი ბ.", avgCycle: "საშუალო ციკლი", renewalNotice: "განახლების შეტყობინება", thirtyDays: "30 დღე", legalApproved: "იურიდიულმა დაამტკიცა",
    },
    teams: {
      kicker: "შექმნილია მთელი ბიზნესისთვის", title: "ყველა ხედავს იმას, რაც სჭირდება. არაფერი იკარგება.",
      lead: "LegalStepy ხელშეკრულების პროცესში ჩართულ გუნდებს აკავშირებს და პასუხისმგებლობებსა და წვდომებს მკაფიოდ განსაზღვრავს.",
    },
    ai: {
      kicker: "LEGALSTEPY AI", title: "ჰკითხეთ თქვენს ხელშეკრულებებს.<br />მიიღეთ მკაფიო პასუხები.",
      lead: "გადააქციეთ რთული დოკუმენტები მოქმედებისთვის საჭირო ინფორმაციად. LegalStepy AI გუნდს გააზრებაში, შექმნასა და მოქმედებაში ეხმარება.",
      point1: "ვრცელი ხელშეკრულებების შეჯამება", point2: "პირობების, ვალდებულებებისა და რისკების მოძიება", point3: "ხელშეკრულებების შექმნა კომპანიის წესების საფუძველზე",
      online: "ონლაინ · მზადაა დასახმარებლად", question: "როგორია ხელშეკრულების განახლების პირობები?",
      answer: "ხელშეკრულება ავტომატურად განახლდება 12 თვით, თუ რომელიმე მხარე განახლების თარიღამდე არანაკლებ 30 დღით ადრე წერილობით შეტყობინებას არ გააგზავნის.",
      source: "წყარო: პუნქტი 8.2", open: "პუნქტის ნახვა", placeholder: "ჰკითხეთ ყველაფერი ამ ხელშეკრულების შესახებ...",
    },
    control: {
      kicker: "კონტროლი თავიდანვე", title: "თქვენი პროცესი. თქვენი წესები. სრული ხილვადობა.",
      lead: "ააწყვეთ ხელშეკრულების პროცესი თქვენი კომპანიის მუშაობის წესზე — მკაფიო პასუხისმგებლობებით, კონტროლირებადი წვდომითა და სანდო ისტორიით.",
      access: "როლებზე დაფუძნებული წვდომა", accessText: "სენსიტიური ინფორმაცია მხოლოდ შესაბამისი ადამიანებისთვის იყოს ხილული.",
      audit: "აუდიტისთვის მზად ისტორია", auditText: "ნახეთ ვინ, როდის და რატომ შეასრულა მოქმედება — ძიების გარეშე.",
      workflow: "მორგებული დამტკიცების პროცესები", workflowText: "კომპანიის პოლიტიკა აქციეთ განმეორებად ციფრულ პროცესად.",
      center: "კონტროლის ცენტრი", policyEngine: "წესებისა და წვდომის ძრავი", live: "აქტიური", rules: "დამტკიცების წესები", permissions: "წვდომები", auditTab: "აუდიტი",
      supplierPolicy: "მომწოდებლის ხელშეკრულების წესი", autoApplies: "ავტომატურად გამოიყენება", when: "როდესაც", valueCondition: "ხელშეკრულების ღირებულება აღემატება", thenRoute: "შემდეგ გადაეცეს", legal: "იურიდიული", finance: "ფინანსები",
      accessPreview: "წვდომის გადახედვა", legalAdmin: "იურიდიული ადმინისტრატორი", fullAccess: "სრული წვდომა", allowed: "დაშვებულია", financeTeam: "ფინანსური გუნდი", reviewOnly: "მხოლოდ განხილვა და დამტკიცება", limited: "შეზღუდული",
      latestActivity: "ბოლო აქტივობა", legalApproved: "იურიდიულმა დაამტკიცა", sentFinance: "გადაეცა ფინანსებს",
      activeContracts: "აქტიური ხელშეკრულებები", awaitingApproval: "ელოდება დამტკიცებას", dueToday: "დღესაა ვადა", averageCycle: "საშუალო ციკლი", renewalsMonth: "ამ თვის განახლებები",
    },
    how: {
      kicker: "დაიწყეთ მარტივად", title: "გამართული სახელშეკრულებო პროცესი სამ ნაბიჯში.",
      step1: "გადმოიტანეთ ხელშეკრულებები", step1Text: "აქტიური ხელშეკრულებები და შაბლონები მოათავსეთ ერთ სტრუქტურირებულ საცავში.",
      step2: "დააყენეთ თქვენი პროცესი", step2Text: "განსაზღვრეთ როლები, დამტკიცებები, შაბლონები და კომპანიის წესები.",
      step3: "დაინახეთ ყველაფერი მკაფიოდ", step3Text: "ერთ სივრცეში აკონტროლეთ ყველა ხელშეკრულება, გადაწყვეტილება, ვადა და შედეგი.",
    },
    team: {
      kicker: "გაიცანით დამფუძნებლები", title: "ადამიანები LegalStepy-ს უკან.", lead: "გუნდი, რომელიც იურიდიულ, საოპერაციო, ბიზნეს და ტექნოლოგიურ გამოცდილებას აერთიანებს.",
      lukaName: "ლუკა შახყულაშვილი", noeName: "ნოე ბერიძე", sophieName: "სოფი ბახბახაშვილი", sabaName: "საბა გობიანი",
      luka: "თანადამფუძნებელი და გენერალური დირექტორი", noe: "თანადამფუძნებელი და ოპერაციული დირექტორი", sophie: "თანადამფუძნებელი და იურიდიული დირექტორი", saba: "თანადამფუძნებელი და ტექნიკური დირექტორი",
    },
    demo: {
      kicker: "ვისაუბროთ ხელშეკრულებებზე", title: "მზად ხართ ყველა ხელშეკრულება კონტროლს დაუქვემდებაროთ?",
      lead: "დაჯავშნეთ პერსონალური დემო ან მოგვიყევით თქვენი გუნდის საჭიროებაზე. გაჩვენებთ, როგორ მოერგება LegalStepy თქვენს პროცესს.",
      calendar: "აირჩიეთ დრო Calendly-ზე", or: "ან დაგვიკავშირდით პირდაპირ",
    },
    form: {
      name: "სახელი და გვარი", namePlaceholder: "თქვენი სახელი", email: "სამუშაო ელფოსტა", company: "კომპანია", companyPlaceholder: "კომპანიის დასახელება",
      role: "თქვენი პოზიცია", rolePlaceholder: "იურისტი, ფინანსები, CEO...", message: "რის გაუმჯობესებას ისურვებდით?",
      messagePlaceholder: "მოკლედ მოგვიყევით თქვენს სახელშეკრულებო პროცესზე", consent: "ვეთანხმები, რომ ჩემს მოთხოვნასთან დაკავშირებით დამიკავშირდნენ.", submit: "დემოს მოთხოვნა",
    },
    footer: {
      copy: "ერთი კონტროლირებადი სივრცე ყველა ხელშეკრულებისთვის, გადაწყვეტილებისა და ვადისთვის.", product: "პროდუქტი", company: "კომპანია", follow: "გამოგვყევით", contact: "კონტაქტი", rights: "ყველა უფლება დაცულია.",
    },
  },
};

const roleContent = {
  en: {
    legal: { label: "LEGAL TEAM", title: "Move contracts forward without losing control.", text: "Standardize drafting, manage reviews and keep every version, comment and approval connected.", list: ["Approved templates and clause control", "Clear internal and external collaboration", "Complete version history and audit trail"] },
    management: { label: "MANAGEMENT", title: "Make decisions with the full picture in view.", text: "See contract status, business exposure and pending decisions without chasing updates.", list: ["Live status across the portfolio", "Clear ownership and bottleneck visibility", "Decision-ready analytics and reporting"] },
    procurement: { label: "PROCUREMENT", title: "Keep every supplier agreement moving.", text: "Coordinate negotiation, approvals and renewals while maintaining one reliable vendor record.", list: ["Structured supplier workflows", "Faster cross-team approvals", "Renewal and obligation tracking"] },
    finance: { label: "FINANCE", title: "Know the financial impact before you approve.", text: "Review commercial terms, payment obligations and approvals in the same controlled process.", list: ["Clear approval requests", "Payment term visibility", "Upcoming obligation reminders"] },
    hr: { label: "HR TEAM", title: "Standardize agreements without slowing people down.", text: "Use approved templates and repeatable workflows for employment and people-related agreements.", list: ["Controlled HR templates", "Confidential role-based access", "Fast internal review and signature"] },
  },
  ka: {
    legal: { label: "იურიდიული გუნდი", title: "წაიყვანეთ პროცესი წინ კონტროლის დაკარგვის გარეშე.", text: "გააერთიანეთ დოკუმენტის შექმნა და განხილვა და ყველა ვერსია, კომენტარი და დამტკიცება ერთმანეთთან დააკავშირეთ.", list: ["დამტკიცებული შაბლონები და პირობების კონტროლი", "გამართული შიდა და გარე თანამშრომლობა", "ვერსიებისა და მოქმედებების სრული ისტორია"] },
    management: { label: "მენეჯმენტი", title: "მიიღეთ გადაწყვეტილებები სრული სურათის საფუძველზე.", text: "დაინახეთ ხელშეკრულებების სტატუსი, ბიზნესრისკები და მომლოდინე გადაწყვეტილებები დამატებითი ინფორმაციის მოთხოვნის გარეშე.", list: ["პორტფელის მიმდინარე სტატუსი", "პასუხისმგებლობებისა და შეფერხებების ხილვადობა", "გადაწყვეტილებისთვის მზა ანალიტიკა"] },
    procurement: { label: "შესყიდვები", title: "მართეთ მომწოდებლის ყველა ხელშეკრულება დროულად.", text: "კოორდინაცია გაუწიეთ მოლაპარაკებას, დამტკიცებასა და განახლებას ერთიანი მომწოდებლის ჩანაწერით.", list: ["სტრუქტურირებული მომწოდებლის პროცესები", "უფრო სწრაფი შიდა დამტკიცება", "განახლებისა და ვალდებულებების კონტროლი"] },
    finance: { label: "ფინანსები", title: "დამტკიცებამდე იცოდეთ ფინანსური გავლენა.", text: "ერთ პროცესში განიხილეთ კომერციული პირობები, გადახდის ვალდებულებები და მოთხოვნილი თანხმობები.", list: ["მკაფიო დამტკიცების მოთხოვნები", "გადახდის პირობების ხილვადობა", "მომავალი ვალდებულებების შეხსენება"] },
    hr: { label: "HR გუნდი", title: "დაასტანდარტეთ შეთანხმებები პროცესის შენელების გარეშე.", text: "გამოიყენეთ დამტკიცებული შაბლონები და განმეორებადი პროცესები დასაქმებისა და HR შეთანხმებებისთვის.", list: ["კონტროლირებადი HR შაბლონები", "კონფიდენციალური როლებზე დაფუძნებული წვდომა", "სწრაფი განხილვა და ხელმოწერა"] },
  },
};

const getValue = (obj, path) => path.split(".").reduce((value, key) => value?.[key], obj);
let currentLanguage = localStorage.getItem("legalstepy-language") || (navigator.language?.startsWith("ka") ? "ka" : "en");
let activeRole = "legal";

function applyLanguage(lang) {
  currentLanguage = lang;
  const dictionary = translations[lang];
  document.documentElement.lang = lang;
  document.title = dictionary.meta.title;
  document.querySelector('meta[name="description"]').setAttribute("content", dictionary.meta.description);
  document.querySelector('meta[property="og:title"]').setAttribute("content", dictionary.meta.title);
  document.querySelector('meta[property="og:description"]').setAttribute("content", dictionary.meta.description);

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = getValue(dictionary, element.dataset.i18n);
    if (value !== undefined) element.innerHTML = value;
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const value = getValue(dictionary, element.dataset.i18nPlaceholder);
    if (value !== undefined) element.setAttribute("placeholder", value);
  });

  document.querySelector("[data-lang-label]").textContent = lang === "en" ? "KA" : "EN";
  const whatsapp = document.querySelector("[data-whatsapp]");
  const message = lang === "ka"
    ? "გამარჯობა, მაინტერესებს LegalStepy და მსურს მეტი ინფორმაციის მიღება."
    : "Hello, I’m interested in LegalStepy and would like to learn more.";
  whatsapp.href = `https://wa.me/995579229296?text=${encodeURIComponent(message)}`;
  whatsapp.setAttribute("aria-label", lang === "ka" ? "დაუკავშირდით LegalStepy-ს WhatsApp-ზე" : "Contact LegalStepy on WhatsApp");

  localStorage.setItem("legalstepy-language", lang);
  updateRolePanel(activeRole);
}

function updateRolePanel(role) {
  activeRole = role;
  const content = roleContent[currentLanguage][role];
  const panel = document.querySelector("[data-role-panel]");
  panel.classList.add("switching");
  window.setTimeout(() => {
    panel.querySelector("[data-role-badge]").textContent = content.label;
    panel.querySelector("[data-role-title]").textContent = content.title;
    panel.querySelector("[data-role-text]").textContent = content.text;
    panel.querySelector("[data-role-list]").innerHTML = content.list.map((item) => `<li>${item}</li>`).join("");
    panel.classList.remove("switching");
  }, 120);
}

document.querySelector(".language-switch").addEventListener("click", () => applyLanguage(currentLanguage === "en" ? "ka" : "en"));

document.querySelectorAll(".team-tab").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".team-tab").forEach((tab) => {
      tab.classList.toggle("active", tab === button);
      tab.setAttribute("aria-selected", tab === button ? "true" : "false");
    });
    updateRolePanel(button.dataset.role);
  });
});

const header = document.querySelector("[data-header]");
const progress = document.querySelector(".scroll-progress span");
window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 20);
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = `${maxScroll > 0 ? (window.scrollY / maxScroll) * 100 : 0}%`;
}, { passive: true });

const menuButton = document.querySelector(".menu-toggle");
const navPanel = document.querySelector(".nav-panel");
menuButton.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isOpen));
  navPanel.classList.toggle("open", !isOpen);
});
document.querySelectorAll(".nav-panel a").forEach((link) => link.addEventListener("click", () => {
  menuButton.setAttribute("aria-expanded", "false");
  navPanel.classList.remove("open");
}));

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach((element, index) => {
    element.style.transitionDelay = `${Math.min(index % 4, 3) * 70}ms`;
    observer.observe(element);
  });
} else {
  document.querySelectorAll(".reveal").forEach((element) => element.classList.add("visible"));
}

applyLanguage(currentLanguage);
