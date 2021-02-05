const data = [
  {
    identifier: "dashboard",
    bn: "ড্যাশবোর্ড",
    en: "Dashboard",
  },
  {
    identifier: "customerInvoice",
    bn: "কাস্টমার ইনভয়েস",
    en: "Customer Invoice",
  },
  {
    identifier: "dealarInvoice",
    bn: "ডিলার ইনভয়েস",
    en: "Dealar Invoice",
  },
  {
    identifier: "transaction",
    bn: "ট্রান্সেকশন",
    en: "Transaction",
  },
  {
    identifier: "cashReceive",
    bn: "নগদ গ্রহন",
    en: "Cash Receive",
  },
  {
    identifier: "cashPayment",
    bn: "নগদ প্রদান",
    en: "Cash Payement",
  },
  {
    identifier: "product",
    bn: "প্রোডাক্ট",
    en: "product",
  },
  {
    identifier: "sellReturn",
    bn: "বিক্রয় ফেরত",
    en: "Sell Return",
  },

  {
    identifier: "buyReturn",
    bn: "ক্রয় ফেরত",
    en: "Buy Return",
  },

  {
    identifier: "report",
    bn: "রিপোর্ট",
    en: "report",
  },
  {
    identifier: "sellInvoice",
    bn: "বিক্রয় ইনভয়েস",
    en: "Sell Invoice",
  },
  {
    identifier: "purchaseInvoice",
    bn: "ক্রয় ইনভয়েস",
    en: "Purchase Invoice",
  },
  {
    identifier: "buyerReport",
    bn: "ক্রেতা রিপোর্ট",
    en: "Buyer Report",
  },
  {
    identifier: "selerReport",
    bn: "বিক্রেতা রিপোর্ট",
    en: "Seler Report",
  },
  {
    identifier: "voucherReport",
    bn: "ভাউচার রিপোর্ট",
    en: "Voucher Report",
  },
  {
    identifier: "dateWiseReport",
    bn: "তারিখ অনুযায়ী রিপোর্ট",
    en: "Date Wise Report",
  },
  {
    identifier: "logInAs",
    bn: "লগইন করেছেন",
    en: "Log In As",
  },
  {
    identifier: "balance",
    bn: "ব্যালেন্স",
    en: "balance",
  },
  {
    identifier: "craditor",
    bn: "পাওনাদার",
    en: "craditor",
  },
  {
    identifier: "debtor",
    bn: "দেনাদার",
    en: "Debtor",
  },
  {
    identifier: "todaysSale",
    bn: "আজকের বিক্রয়",
    en: "Today's Sale",
  },
  {
    identifier: "weeklySale",
    bn: "সাপ্তাহিক বিক্রয়",
    en: "Weekly Sale",
  },
  {
    identifier: "currentMonthsSale",
    bn: "চলতি মাসের বিক্রয়",
    en: "Current Month's Sale",
  },
  {
    identifier: "bdt",
    bn: "টাকা",
    en: "BDT",
  },
  {
    identifier: "seetings",
    bn: "সেটিং",
    en: "Settings",
  },
  {
    identifier: "activityLog",
    bn: "অ্যাক্টিভিটি লগ",
    en: "Activity Log",
  },
  {
    identifier: "logOut",
    bn: "লগ আউট",
    en: "Log Out",
  },
  {
    identifier: "catagory",
    bn: "ক্যাটাগরি",
    en: "Catagory",
  },
  {
    identifier: "productConfiguration",
    bn: "পণ্য কনফিগারেশন",
    en: "Product Configuration",
  },
  {
    identifier: "unit",
    bn: "একক",
    en: "Unit",
  },
  {
    identifier: "productSetting",
    bn: "পণ্য",
    en: "Product Setting",
  },
  {
    identifier: "customerSeeting",
    bn: "কাস্টমার সেটিং",
    en: "Customer Setting",
  },
  {
    identifier: "newCustomer",
    bn: "নতুন কাস্টমার",
    en: "New Customer",
  },
  {
    identifier: "openingCustomer",
    bn: "ওপেনিং কাস্টমার",
    en: "Opening Customer",
  },
  {
    identifier: "companyDealarSetting",
    bn: "কোম্পানি/ডিলার সেটিং",
    en: "Company/Dealar Setting",
  },
  {
    identifier: "newCompanyDealar",
    bn: "নতুন কোম্পানি/ডিলার",
    en: "New Company/Dealar",
  },
  {
    identifier: "companyDealarInvoice",
    bn: "কোম্পানি/ডিলার ইনভয়েস",
    en: "Company/Dealar Invoice",
  },
  {
    identifier: "openingCompanyDealar",
    bn: "ওপেনিং কম্পানি/ডিলার",
    en: "Opening Company/Dealar",
  },
  {
    identifier: "catagoryList",
    bn: "ক্যাটাগরি নাম",
    en: "Catagory List",
  },
  {
    identifier: "addNewCatagory",
    bn: "নতুন ক্যাটাগরি তৈরি করুণ",
    en: "Add New Catagory",
  },
  {
    identifier: "back",
    bn: "ফিরুন",
    en: "Back",
  },
  {
    identifier: "catagoryName",
    bn: "ক্যাটাগরি",
    en: "Catagory Name",
  },
  {
    identifier: "backToTheList",
    bn: "তালিকায় ফিরে যান",
    en: "Back To The List",
  },
  {
    identifier: "Name",
    bn: "নাম",
    en: "Name",
  },
  {
    identifier: "completeAdding",
    bn: "তৈরি সম্পন্ন করুণ",
    en: "Complete Adding",
  },
  {
    identifier: "productList",
    bn: "পন্যের তালিকা",
    en: "Product List",
  },
  {
    identifier: "creatNewProduct",
    bn: "নতুন পণ্য তৈরি করুন",
    en: "Creat New Product",
  },
  {
    identifier: "select",
    bn: "নির্বাচন করুন",
    en: "Select",
  },
  {
    identifier: "entry",
    bn: "এন্ট্রি",
    en: "Entry",
  },
  {
    identifier: "search",
    bn: "সার্চ করুন",
    en: "Search",
  },
  {
    identifier: "serial",
    bn: "সিরিয়াল",
    en: "Serial",
  },
  {
    identifier: "productName",
    bn: "পণ্যের নাম",
    en: "Product Name",
  },
  {
    identifier: "unit",
    bn: "একক",
    en: "Unit",
  },
  {
    identifier: "catagory",
    bn: "ক্যাটাগরি",
    en: "Catagory",
  },
  {
    identifier: "productCatagory",
    bn: "পণ্য ক্যাটাগরি",
    en: "Product Catagory",
  },
  {
    identifier: "selectCatagory",
    bn: "ক্যাটাগরি নির্বাচন করুণ",
    en: "Select Catagory",
  },
  {
    identifier: "selectType",
    bn: "টাইপ নির্বাচন করুণ",
    en: "Select Type",
  },
  {
    identifier: "completeMaking",
    bn: "তৈরি সম্পন্ন করুণ",
    en: "Complete Making",
  },
  {
    identifier: "UnitSetting",
    bn: "একক সেটিং",
    en: "Unit Setting",
  },
  {
    identifier: "createNewUnit",
    bn: "নতুন একক তৈরি করুন",
    en: "Create New Unit",
  },
  {
    identifier: "select",
    bn: "নির্বাচন করুন",
    en: "Select",
  },
  {
    identifier: "serial",
    bn: "সিরিয়াল",
    en: "Serial",
  },
  {
    identifier: "unitName",
    bn: "ইউনিটের নাম",
    en: "UnitName",
  },
  {
    identifier: "quantityInNumber",
    bn: "সংখ্যায় পরিমান",
    en: "Quantity In Number",
  },
  {
    identifier: "unitType",
    bn: "ইউনিটের ধরন",
    en: "Unit Type",
  },
  {
    identifier: "showing",
    bn: "দেখানো হচ্ছে",
    en: "Showing",
  },
  {
    identifier: "to",
    bn: "থেকে",
    en: "To",
  },
  {
    identifier: "totalInfo",
    bn: "মোট তথ্য",
    en: "Total Info",
  },
  {
    identifier: "previousPage",
    bn: "পূর্বের পাতা",
    en: "Previous Page",
  },
  {
    identifier: "nextPage",
    bn: "পরের পাতা",
    en: "Next Page",
  },
  {
    identifier: "back",
    bn: "ফিরুন",
    en: "Back",
  },
  {
    identifier: "customerList",
    bn: "কাস্টমারের তালিকা",
    en: "Customer List",
  },
  {
    identifier: "name",
    bn: "নাম",
    en: "Name",
  },
  {
    identifier: "firstName",
    bn: "নামের প্রথম অংশ",
    en: "First Name",
  },
  {
    identifier: "lastName",
    bn: "নামের শেষ অংশ",
    en: "Last Name",
  },
  {
    identifier: "phone",
    bn: "ফোন",
    en: "Phone",
  },
  {
    identifier: "email",
    bn: "ইমেইল",
    en: "Email",
  },
  {
    identifier: "currentAddress",
    bn: "বর্তমান ঠিকানা",
    en: "Current Address",
  },
  {
    identifier: "billingAddress",
    bn: "বিলিং ঠিকানা",
    en: "Billing Address",
  },
  {
    identifier: "completeCustomerCreate",
    bn: "কাস্টমার তৈরি সম্পন্ন করুন",
    en: "Complete Customer Create",
  },
  {
    identifier: "openingCustomer",
    bn: "ওপেনিং কাস্টমার",
    en: "Opening Customer",
  },
  {
    identifier: "selectCustomer",
    bn: "কাস্টমার বাছাই করুন",
    en: "Select Customer",
  },
  {
    identifier: "openingBalance",
    bn: "ওপেনিং ব্যালেন্স",
    en: "Opening Balance",
  },
  {
    identifier: "addBalance",
    bn: "ব্যালেন্স যোগ করুন",
    en: "Add Balance",
  },
  {
    identifier: "companyDealarList",
    bn: "কোম্পানি/ডিলারের তালিকা",
    en: "Company/Dealar List",
  },
  {
    identifier: "addNewCompanyDealar",
    bn: "নতুন কোম্পানি/ডিলার তৈরি করুন",
    en: "Add New Company/Dealar",
  },
  {
    identifier: "completeCompanyCreate",
    bn: "কোম্পানি তৈরি সম্পন্ন করুন",
    en: "Complete Company Create",
  },
  {
    identifier: "openingCompanyDealar",
    bn: "ওপেনিং কোম্পানি/ডিলার",
    en: "Opening Company/Dealar",
  },
  {
    identifier: "selectCompanyDealar",
    bn: "ডিলার নির্বাচন করুন",
    en: "Select Company/Dealar",
  },
  {
    identifier: "openingBalance",
    bn: "ওপেনিং ব্যালেন্স",
    en: "Opening Balance",
  },
  {
    identifier: "addOpeningBalance",
    bn: "ওপেনিং ব্যালেন্স যুক্ত করুন",
    en: "Add Opening Balance",
  },
  {
    identifier: "customerInvoiceNew",
    bn: "কাস্টমার ইনভয়েস (নতুন)",
    en: "Customer Invoice (New)",
  },
  {
    identifier: "createNewCustomer",
    bn: "কাস্টমার তৈরি করুন",
    en: "Creat New Customer",
  },
  {
    identifier: "allCatagories",
    bn: "সকল ক্যাটাগরি",
    en: "All Catagories",
  },
  {
    identifier: "selectProduct",
    bn: "পণ্য বাছাই করুন",
    en: "Select Product",
  },
  {
    identifier: "selectCustomer",
    bn: "কাস্টমার নির্বাচন করুন",
    en: "Select Customer",
  },
  {
    identifier: "productDetails",
    bn: "পণ্যের বিবরন",
    en: "Product Details",
  },
  {
    identifier: "unitePrice",
    bn: "প্রতি ইউনিটের মূল্য",
    en: "Unite Price",
  },
  {
    identifier: "quantity",
    bn: "পরিমান",
    en: "Quantity",
  },
  {
    identifier: "phone",
    bn: "ফোন",
    en: "Phone",
  },
  {
    identifier: "address",
    bn: "ঠিকানা",
    en: "Address",
  },
  {
    identifier: "balance",
    bn: "ব্যালেন্স",
    en: "Balance",
  },
  {
    identifier: "subTotal",
    bn: "সাব টোটাল",
    en: "Sub Total",
  },
  {
    identifier: "discount",
    bn: "মূল্যছাড়",
    en: "Discount",
  },
  {
    identifier: "total",
    bn: "মোট",
    en: "Total",
  },
  {
    identifier: "cash",
    bn: "ক্যাশ টাকা",
    en: "Cash",
  },
  {
    identifier: "writeSomething",
    bn: "ইনভয়েসে কিছু লিখুন",
    en: "Write Something In Invoice (Details)",
  },
  {
    identifier: "extraExpenditure",
    bn: "অতিরক্ত খরচ",
    en: "Extra Expenditure",
  },
  {
    identifier: "date",
    bn: "তারিখ",
    en: "Date",
  },
  {
    identifier: "createInvoice",
    bn: "ইনভয়েস তৈরি করুন",
    en: "Creat Invoice",
  },
  {
    identifier: "dealarInvoice",
    bn: "ডিলার ইনভয়েস",
    en: "Dealar Invoice",
  },
  {
    identifier: "createNewDealar",
    bn: "নতুন ডিলার তৈরি করুন",
    en: "Creat New Dealar",
  },
  {
    identifier: "createNewProduct",
    bn: "ণতুন পণ্য তৈরি করুন",
    en: "Create New Product",
  },
  {
    identifier: "selectDealar",
    bn: "ডিলার নির্বাচন করুন",
    en: "Select Dealar",
  },
  {
    identifier: "productNotSelected",
    bn: "পণ্য বাছাই করা হয়নি",
    en: "Product Not Selected",
  },
  {
    identifier: "cashReceive",
    bn: "নগদ গ্রহন",
    en: "Cash Receive",
  },
  {
    identifier: "amount",
    bn: "পরিমান",
    en: "Amount",
  },
  {
    identifier: "comment",
    bn: "মন্তব্য",
    en: "Comment",
  },
  {
    identifier: "receive",
    bn: "গ্রহন করুন",
    en: "Receive",
  },
  {
    identifier: "cashPayment",
    bn: "নগদ প্রদান",
    en: "Cash Payment",
  },
  {
    identifier: "pay",
    bn: "টাকা প্রদান করুন",
    en: "Pay",
  },
  {
    identifier: "salesReturn",
    bn: "বিক্রয় ফেরত",
    en: "Sales Return",
  },
  {
    identifier: "cashBackAmount",
    bn: "কত টাকা ক্যাশব্যাক করতে চান",
    en: "Cash Back Amount",
  },
  {
    identifier: "confirmSalesRefund",
    bn: "বিক্রয় ফেরত নিশ্চিত করুন",
    en: "Confirm Sales Refund",
  },
  {
    identifier: "purchaseReturn",
    bn: "ক্রয় ফেরত",
    en: "Purchase Return",
  },
  {
    identifier: "cashBackAmount",
    bn: "কত টাকা ক্যাশব্যাক নিলেন",
    en: "Cash Back Amount",
  },
  {
    identifier: "completePurchaseReturn",
    bn: "ক্রয় ফেরত সম্পন্ন করুন",
    en: "Complete Purchase Return",
  },
  {
    identifier: "productList",
    bn: "পণ্য তালিকা",
    en: "Product List (Stock)",
  },
  {
    identifier: "productName",
    bn: "পণ্যের নাম",
    en: "Product Name",
  },
  {
    identifier: "totalStock",
    bn: "মোট মজুদ",
    en: "Total Stock",
  },
  {
    identifier: "details",
    bn: "বিবরণী",
    en: "Details",
  },
  {
    identifier: "SalesInvoiceList",
    bn: "বিক্রয় ইনভয়েসের তালিকা",
    en: "Sales Invoice List",
  },
  {
    identifier: "backToDashboard",
    bn: "ড্যাশবোর্ড এ ফিরে যান",
    en: "Back To Dashboard",
  },
  {
    identifier: "serialNo",
    bn: "সিরিয়াল নাম্বার",
    en: "Serial No",
  },
  {
    identifier: "invoiceNo",
    bn: "ইনভয়েস নাম্বার",
    en: "Invoice No",
  },
  {
    identifier: "subTotal",
    bn: "সাবটোটাল",
    en: "Sub Total",
  },
  {
    identifier: "discount",
    bn: "মূল্যছাড়",
    en: "Discount",
  },
  {
    identifier: "total",
    bn: "মোট",
    en: "Total",
  },
  {
    identifier: "customerName",
    bn: "কাস্টমারের নাম",
    en: "Customer's Name",
  },
  {
    identifier: "customerPhone",
    bn: "কাস্টমারের ফোন",
    en: "Customer's Phone",
  },
  {
    identifier: "purchaseInvoceList",
    bn: "ক্রয় ইনভয়েসের তালিকা",
    en: "Purchase Invoice List",
  },
  {
    identifier: "customerReportList",
    bn: "কাস্টোমার রিপোর্টের তালিকা",
    en: "Customer Report List",
  },
  {
    identifier: "totalSale",
    bn: "মোট বিক্রয়",
    en: "Total Sale",
  },
  {
    identifier: "paidAmount",
    bn: "পরিশোধ",
    en: "Paid Amount",
  },
  {
    identifier: "customerPayable",
    bn: "কাস্টমারের দেনা",
    en: "Customer's Payable",
  },
  {
    identifier: "dealarReportList",
    bn: "ডিলার রিপোর্টের তালিকা",
    en: "Dealar Report List",
  },
  {
    identifier: "totalPurchase",
    bn: "মোট ক্রয়",
    en: "Total Purchase",
  },
  {
    identifier: "paidAmount",
    bn: "পরিশোধ",
    en: "Paid Amount",
  },
  {
    identifier: "balance",
    bn: "ব্যালেন্স",
    en: "Balance",
  },
  {
    identifier: "details",
    bn: "বিবরণী",
    en: "Details",
  },
  {
    identifier: "listOfVoucher",
    bn: "ভাওচারের তালিকা",
    en: "ListOfVoucher",
  },
  {
    identifier: "voucharNumber",
    bn: "ভাউচার নাম্বার",
    en: "Vouchar Number",
  },
  {
    identifier: "customerDealar",
    bn: "কাস্টমার/ডিলার",
    en: "Customer/Dealar",
  },
  {
    identifier: "voucharType",
    bn: "ভাউচারের ধরন",
    en: "vouchar Type",
  },
  {
    identifier: "previousBalance",
    bn: "আগের ব্যালেন্স",
    en: "Previous Balance",
  },
  {
    identifier: "payment",
    bn: "পরিশোধ",
    en: "Payment",
  },
  {
    identifier: "currentBalance",
    bn: "বর্তমান ব্যালেন্স",
    en: "Current Balance",
  },
  {
    identifier: "selectOption",
    bn: "অপশন নির্বাচন করুণ",
    en: "Select Option",
  },
  {
    identifier: "salesSummery",
    bn: "বিক্রয় সামারি",
    en: "Sales Summery",
  },
  {
    identifier: "purchaseSummery",
    bn: "ক্রয় সামারি",
    en: "Purchase Summery",
  },
  {
    identifier: "customerSaleDetails",
    bn: "কাস্টমার ক্রয় ডিটেইলস",
    en: "Customer Sale Details",
  },
  {
    identifier: "companyPurchaseDetails",
    bn: "কোম্পানির ক্রয় ডিটেইলস",
    en: "Company Purchase Details",
  },
  {
    identifier: "companyPurchaseSummery",
    bn: "কোম্পানির ক্রয় সামারি",
    en: "Company Purchase Summery",
  },
  {
    identifier: "startingDate",
    bn: "শুরুর তারিখ",
    en: "Starting Date",
  },
  {
    identifier: "endingDate",
    bn: "শেষের তারিখ",
    en: "Ending Date",
  },
  {
    identifier: "generateReport",
    bn: "রিপোর্ট তৈরি করুণ",
    en: "Genarate Report",
  },
  ,
  {
    identifier: "cashOutSummery",
    bn: "ক্যাশ উত্তোলন সামারি",
    en: "Cash Out Summery",
  },
  ,
  {
    identifier: "totalSell",
    bn: "মোট বিক্রয়",
    en: "Total Sell",
  },
  ,
  {
    identifier: "totalReceived",
    bn: "মোট গ্রহণ",
    en: "Total Received",
  },
  ,
  {
    identifier: "totalPaid",
    bn: "মোট প্রদান",
    en: "Total Paid",
  },
];
