import { Controller,Get,Param,Body, Post } from '@nestjs/common';
// import { type } from 'os';
import { data, ReportType } from './data';
import {v4 as uuid} from 'uuid';

@Controller("report/:type")
export class AppController{
  // get all report use type
@Get()
  allReports(@Param("type") type:string){
    const typeOfReport = type === "income" ? ReportType.INCOME : ReportType.EXPENSE;
    return data.report.filter(repo=>repo.type ===typeOfReport);
  }

  // get report by id
  @Get(":id")
  getReport(@Param("type") type:string, @Param("id") id:string){
    const typeOfReport = type === "income" ? ReportType.INCOME : ReportType.EXPENSE;
    const info = data.report.filter(repo=>repo.type ===typeOfReport).find(repo=>repo.id=== id)
  
    if(info){
      return info;     
    }
    return "Not Found Data"
  }

  // post report
  @Post()
  createReport(@Body() {source,amount}: {source:string,amount:number}, @Param("type") type:string){
    // console.log({type,source,amount});
    const newReport = {
      id:uuid(),
      source,
      amount,
      created_at: new Date(),
      updated_at: new Date(),
      type: type === "income" ? ReportType.INCOME : ReportType.EXPENSE
     
    }
    data.report.push(newReport)

    return newReport;

  }

  
}