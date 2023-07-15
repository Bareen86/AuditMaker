export function DateToStringFormat(date : Date) :string {

  const dateToParse : Date = new Date(date.toString())
  const day : string = dateToParse.getDate().toString();
  const month : string = (dateToParse.getMonth() < 12 ? dateToParse.getMonth() + 1 : 1).toString();
  const year : string = dateToParse.getFullYear().toString();
  const hours : string = dateToParse.getHours().toString();
  const minutes : string = dateToParse.getMinutes().toString();
  const seconds : string = dateToParse.getSeconds().toString();

  const result : string = day + "."  + month + "." + year + " " + hours + ":" + minutes + ":" + seconds
  return result
}