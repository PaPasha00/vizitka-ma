//@ts-nocheck
import { IData } from "./types";

export function transformData(data: IData[]) {
    const result: { items: IData[]; monthsDay: string }[] = [];
    const groupedByDay = {};

    data?.forEach((item) => {
      const date = new Date(item.date);
      if (date < new Date()) return null
      
      const dayKey = date.toLocaleDateString("ru-RU", {
        day: "numeric",
        month: "long",
        weekday: "short",
      });

      if (!groupedByDay[dayKey]) {
        groupedByDay[dayKey] = [];
      }
      groupedByDay[dayKey].push(item);
    });

    for (const [day, items] of Object.entries(groupedByDay)) {
      result.push({
        monthsDay: day,
        items: items as IData,
      });
    }
    return result;
  }