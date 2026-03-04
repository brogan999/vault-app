export type LifePathNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 11 | 22;

export const VALID_PATH_NUMBERS: readonly LifePathNumber[] = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 22,
];

export interface PathMeta {
  number: LifePathNumber;
  label: string;
  shortLabel: string;
  color: string;
  element: string;
  isMaster: boolean;
}

export const PATH_META: Record<LifePathNumber, PathMeta> = {
  1:  { number: 1,  label: "Life Path 1",  shortLabel: "The Leader",        color: "#A03B0F", element: "Fire",    isMaster: false },
  2:  { number: 2,  label: "Life Path 2",  shortLabel: "The Diplomat",      color: "#CC8D90", element: "Water",   isMaster: false },
  3:  { number: 3,  label: "Life Path 3",  shortLabel: "The Creative",      color: "#C7A356", element: "Fire",    isMaster: false },
  4:  { number: 4,  label: "Life Path 4",  shortLabel: "The Builder",       color: "#315E36", element: "Earth",   isMaster: false },
  5:  { number: 5,  label: "Life Path 5",  shortLabel: "The Adventurer",    color: "#C97A30", element: "Air",     isMaster: false },
  6:  { number: 6,  label: "Life Path 6",  shortLabel: "The Nurturer",      color: "#818D59", element: "Earth",   isMaster: false },
  7:  { number: 7,  label: "Life Path 7",  shortLabel: "The Seeker",        color: "#328181", element: "Water",   isMaster: false },
  8:  { number: 8,  label: "Life Path 8",  shortLabel: "The Powerhouse",    color: "#916368", element: "Earth",   isMaster: false },
  9:  { number: 9,  label: "Life Path 9",  shortLabel: "The Humanitarian",  color: "#93A2B6", element: "Water",   isMaster: false },
  11: { number: 11, label: "Life Path 11", shortLabel: "The Intuitive",     color: "#7B6B8A", element: "Ether",   isMaster: true },
  22: { number: 22, label: "Life Path 22", shortLabel: "The Master Builder", color: "#8B6F47", element: "Earth",  isMaster: true },
};

export function getPathLabel(num: LifePathNumber): string {
  return PATH_META[num].label;
}

export function getPathColor(num: LifePathNumber): string {
  return PATH_META[num].color;
}

export function isValidPathNumber(n: number): n is LifePathNumber {
  return VALID_PATH_NUMBERS.includes(n as LifePathNumber);
}
