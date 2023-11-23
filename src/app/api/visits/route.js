import connectMongo from "@/database/connect";
import UserPhonebookVisit from "@/database/models/userphonebookvisit";
import UserVisit from "@/database/models/uservisit";
import { queryToMongoose } from "@/utilFunctions/dateConvert";
import { NextResponse } from "next/server";

export async function GET(request) {
    const params = request.nextUrl.searchParams.toString();
    const data = queryToMongoose(params)
    const timePeriod = data.timeperiod || 'lastWeek';
    try {
        await connectMongo();

        const today = new Date();

        let filter = {};
        let groupByFormat = '';

        if (timePeriod === 'lastWeek') {
            const lastWeekStart = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);
            filter = { timestamp: { $gte: lastWeekStart } };
            groupByFormat = '%d.%m.%Y'; 
        } else if (timePeriod === 'lastMonth') {
            const lastMonthStart = new Date(today.getFullYear(), today.getMonth() - 1, today.getDate());
            filter = { timestamp: { $gte: lastMonthStart } };
            groupByFormat = '%V.%Y'; 
        } else if (timePeriod === 'lastYear') {
            const lastYearStart = new Date(today.getFullYear() - 1, today.getMonth(), today.getDate());
            filter = { timestamp: { $gte: lastYearStart } };
            groupByFormat = '%m.%Y'; 
        }

        const visitCounts = await UserVisit.aggregate([
            {
                $match: filter 
            },
            {
                $group: {
                    _id: {
                        $dateToString: { format: groupByFormat, date: '$timestamp' } 
                    },
                    count: { $sum: 1 } 
                }
            },
            {
                $sort: { _id: 1 } 
            }
        ]);

        const phonebookVisits = await UserPhonebookVisit.aggregate([
            {
                $match: filter 
            },
            {
                $group: {
                    _id: {
                        $dateToString: { format: groupByFormat, date: '$timestamp' } 
                    },
                    count: { $sum: 1 }
                }
            },
            {
                $sort: { _id: 1 } 
            }
        ]);

        return NextResponse.json({visitCounts, phonebookVisits, timePeriod});
    } catch (error) {
        console.log(error);
        return NextResponse.json(null, {status: 500});
    }
}