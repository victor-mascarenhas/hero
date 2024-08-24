import { ResourceList } from "../../../hooks/useCharacter/types";
import * as S from "./styles";

export const MinorList = ({ itemList }: { itemList: ResourceList }) => {
  const slice = itemList.items.slice(0, 3);
  return (
    <S.ListMinor>
      {slice.map((item, i) => (
        <li key={item.name + i}>
          <p>{item.name}</p>
        </li>
      ))}
    </S.ListMinor>
  );
};
