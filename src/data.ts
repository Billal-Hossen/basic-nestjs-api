export enum ReportType{
  INCOME = "income",
  EXPENSE = "expense"
}


export const data: Data ={
  report:[
  { 
    id: "uuid1",
    source: "FaceBook",
    amount: 944849,
    created_at: new Date(),
    updated_at: new Date(),
    type: ReportType.INCOME
  },
  { 
    id: "uuid2",
    source: "Telegram",
    amount: 333849,
    created_at: new Date(),
    updated_at: new Date(),
    type: ReportType.INCOME
  },
  { 
    id: "uuid3",
    source: "Youtube",
    amount: 37987,
    created_at: new Date(),
    updated_at: new Date(),
    type: ReportType.EXPENSE
  },
  { 
    id: "uuid4",
    source: "WhatsUp",
    amount: 133313,
    created_at: new Date(),
    updated_at: new Date(),
    type: ReportType.EXPENSE
  },
  ]
}



interface Data{
  report:{
    id: String,
    source: String,
    amount: number,
    created_at: Date,
    updated_at: Date,
    type: ReportType


  }[]
}