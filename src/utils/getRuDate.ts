export function getRuDate(inputDate: string) {
    const [year, month, day] = inputDate.split('-');
    const formattedDate = `${day}.${month}.${year}`;
    return formattedDate;
}