export function DateToStringFormat(date : Date) :string {

  const dateToParse : Date = new Date(date.toString());
  const day : string = ("0" + dateToParse.getDate().toString()).slice(-2);
  const month : string = ("0" + (dateToParse.getMonth() < 12 ? dateToParse.getMonth() + 1 : 1).toString()).slice(-2);
  const year : string = dateToParse.getFullYear().toString();
  const hours : string = ("0" + dateToParse.getHours().toString()).slice(-2);
  const minutes : string = ("0" + dateToParse.getMinutes().toString()).slice(-2);
  const seconds : string = ("0" + dateToParse.getSeconds().toString()).slice(-2);

  const result : string = day + "."  + month + "." + year + " " + hours + ":" + minutes + ":" + seconds
  return result
}