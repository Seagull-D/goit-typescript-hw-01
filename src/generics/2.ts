type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

type Base = Pick<AllType, "name" | "position">;

function compare<T extends Base, U extends Pick<AllType, "color" | "weight">>(
  top: T,
  bottom: U
): AllType {
  return {
    name: top.name,
    position: top.position,
    color: bottom.color,
    weight: bottom.weight,
  };
}
