export const egor : Column[] = [
  { id: "Название", label: "Название", minWidth: 150, align: "left" },
  { id: "Локация", label: "Локация", minWidth: 150, align: "left" },
  {
      id: "Url сайта",
      label: "Url сайта",
      minWidth: 150,
      align: "left",
      format: (value: number) => value.toLocaleString("en-US"),
  },
  {
      id: "Дата изменения",
      label: "Дата изменения",
      minWidth: 150,
      align: "left",
      format: (value: number) => value.toLocaleString("en-US"),
  },
  {
      id: "Действия",
      label: "Действия",
      minWidth: 150,
      align: "center",
      format: (value: number) => value.toFixed(2),
  },
];

interface Column {
  id: "Название" | "Локация" | "Url сайта" | "Дата изменения" | "Действия";
  label: string;
  minWidth?: number;
  align?: "right" | "left" | "center";
  format?: (value: number) => string;
}