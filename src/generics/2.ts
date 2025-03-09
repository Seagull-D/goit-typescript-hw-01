type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};
type Base = Pick<AllType, "name" | "position">;

function compare(top: AllType, bottom: AllType): Base {
  return {
    name: top.name,
    position: bottom.position,
  };
}
